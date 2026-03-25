import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-app text-text-app px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary">
          <AlertCircle size={48} />
        </div>
        
        <h1 className="mb-4 text-8xl font-display font-bold tracking-tighter text-primary">404</h1>
        <h2 className="mb-6 text-3xl font-display font-bold">Oops! Page not found</h2>
        
        <p className="mb-10 text-xl text-text-muted font-light leading-relaxed">
          The page you are looking for doesn't exist or has been moved to a different universe.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20"
        >
          <Home size={20} />
          Return to Home
        </Link>
      </motion.div>
      
      {/* Decorative Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
      </div>
    </div>
  );
};

export default NotFound;
