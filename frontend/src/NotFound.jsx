import { Link } from "react-router-dom";
import { MoveLeft, HelpCircle } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-xl w-full text-center">
          
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white rounded-3xl shadow-sm border border-slate-100 text-slate-400">
              <HelpCircle size={48} strokeWidth={1.5} />
            </div>
          </div>

          <p className="text-sm font-black text-blue-600 uppercase tracking-[0.2em]">
            Error 404
          </p>
          
          <h1 className="mt-4 text-5xl font-black text-slate-900 tracking-tight sm:text-7xl">
            Lost in space.
          </h1>
          
          <p className="mt-6 text-lg font-medium text-slate-500 leading-relaxed">
            Oops! It looks like the page you are looking for has been moved or doesn't exist anymore.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MoveLeft size={18} />
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}