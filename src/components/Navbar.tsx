import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'For Schools', path: '/for-schools' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Investors', path: '/investors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isInvestorPage = location.pathname === '/investors';

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-white/80 backdrop-blur-md border-b border-slate-200",
      isInvestorPage && "bg-slate-900/90 text-white border-slate-800"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform overflow-hidden">
              <img src="logo.png" alt="Tejas Labs Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <span className={cn(
              "text-xl font-display font-bold tracking-tighter",
              isInvestorPage ? "text-white" : "text-slate-900"
            )}>
              TEJAS LABS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path 
                    ? "text-primary" 
                    : isInvestorPage ? "text-slate-300" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/products"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-lg",
                isInvestorPage ? "text-white hover:bg-slate-800" : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={cn(
          "md:hidden absolute top-20 left-0 right-0 border-b animate-in slide-in-from-top duration-300",
          isInvestorPage ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200"
        )}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-lg",
                  location.pathname === link.path
                    ? "text-primary bg-blue-50/10"
                    : isInvestorPage ? "text-slate-300 hover:bg-slate-800" : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
