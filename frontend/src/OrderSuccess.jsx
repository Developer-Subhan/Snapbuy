import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Package } from 'lucide-react';
import Navbar from './Navbar'; 
import Footer from './Footer';

export default function OrderSuccess() {
  const location = useLocation();
  const orderId = location.state?.orderId; 

  return (
    <> 
      <Navbar /> 
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
        
        <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-xl shadow-slate-200 p-8 md:p-12 text-center border border-slate-100">
          
          <div className="relative z-10">
            
            <div className="mb-8 flex justify-center">
              <div className="bg-green-500 text-white p-5 rounded-full shadow-lg shadow-green-200">
                <CheckCircle size={40} strokeWidth={2.5} />
              </div>
            </div>

            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
              Order Placed Successfully!
            </h1>
            
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm mx-auto mb-10">
              Thank you for your purchase. The order will be delivered to your desired location.
            </p>

            
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 mb-10">
              <div className="flex items-center justify-center gap-2 text-slate-400 mb-2">
                <Package size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Your Order ID</span>
              </div>
              
              {orderId ? (
                <p className="text-2xl font-mono font-bold text-slate-800 break-all">
                  #{orderId}
                </p>
              ) : (
                <p className="text-sm text-slate-600 font-medium">
                  Confirmation successful, but Order ID was not provided. Please check your email.
                </p>
              )}
            </div>

            
            <div className="flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 py-4 px-10 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-200"
              >
                Continue Shopping <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}