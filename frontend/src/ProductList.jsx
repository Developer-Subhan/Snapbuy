"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Heart, Eye, AlertCircle, RefreshCcw } from "lucide-react";
import Loader from "./Loader";
import { useError } from "./ErrorContext";

const GridItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (!item) return null;

  return (
    <motion.div
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link to={`/products/${item._id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          <motion.img
            src={item.images?.[0]?.src || "https://placehold.co/400x500/f8fafc/64748b?text=No+Image"}
            alt={item.name || "Product"}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              e.target.src = "https://placehold.co/400x500/f8fafc/64748b?text=Image+Error";
            }}
          />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 flex items-center justify-between">
                   <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Quick View</p>
                      <p className="text-sm font-bold text-slate-900">
                        Rs. {typeof item.price === 'object' ? JSON.stringify(item.price) : item.price || 'N/A'}
                      </p>
                   </div>
                   <div className="p-2 bg-slate-900 text-white rounded-xl">
                      <Eye size={18} />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-900 truncate tracking-tight">
            {item.name || "Unnamed Product"}
          </h3>
          <p className="text-slate-500 font-medium text-sm">
            {item.category || "Collection"}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setError } = useError();
  const [searchParams] = useSearchParams();

  const fetchProducts = useCallback(async (isRetry = false) => {
    if (!isRetry) setLoading(true);

    try {
      const q = searchParams.get('q') || '';
      const url = q ? `${import.meta.env.VITE_API_URL}/products?q=${encodeURIComponent(q)}` : `${import.meta.env.VITE_API_URL}/products`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Server status: ${res.status}`);

      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch failed:", err);

      if (!isRetry) {
          setError({
            message: err.message || "An unexpected error occurred",
            status: "Offline"
          });
      }
    } finally {
      setLoading(false);
    }
  }, [setError, searchParams]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((item) => (
              <GridItem key={item._id || Math.random()} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}