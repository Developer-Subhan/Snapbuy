import { useRouteError, useNavigate } from "react-router-dom";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ErrorPage({ error: componentError, resetError }) {
  const navigate = useNavigate();
  const routeError = useRouteError();
  const error = componentError || routeError;

  const handleBackHome = () => {
    if (resetError) resetError();
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full text-center">
          <div className="relative flex justify-center mb-10">
            <div className="p-6 bg-slate-100 rounded-[2.5rem] border border-slate-100">
              <AlertTriangle
                size={48}
                className="text-slate-900"
                strokeWidth={1.5}
              />
            </div>
            <div className="absolute top-0 right-[42%] w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>

          <p className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">
            System Alert
          </p>

          <h1 className="text-5xl font-black text-slate-900 tracking-tight sm:text-6xl mb-6">
            Unexpected error.
          </h1>

          <p className="text-lg font-medium text-slate-500 max-w-md mx-auto leading-relaxed mb-10">
            We encountered a technical issue while processing your request. Our
            team has been notified.
          </p>

          <div className="mb-12 p-6 bg-slate-100 rounded-3xl border border-slate-100 inline-block text-left max-w-full">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              Diagnostic Message
            </p>
            <code className="text-sm font-mono font-bold text-slate-700 break-all">
              {error?.statusText || error?.message || "Unknown Application Error"}
              {error?.status && ` (Code: ${error.status})`}
            </code>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all active:scale-[0.98]"
            >
              <RefreshCw size={18} />
              Try Again
            </button>

            <button
              onClick={handleBackHome}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <Home size={18} />
              Back to Home
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}