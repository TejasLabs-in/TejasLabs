import { Link } from 'react-router-dom';
import { Beaker, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-text-muted pt-20 pb-10 border-t border-border-app transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Beaker className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-text-app tracking-tighter">
                TEJAS LABS
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Empowering the next generation of engineers through hands-on, creative STEM kits that make learning physics and engineering fun.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-app border border-border-app flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-app border border-border-app flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-app border border-border-app flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-app font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-primary transition-colors">STEM Kits</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/for-schools" className="hover:text-primary transition-colors">For Schools</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/investors" className="hover:text-primary transition-colors font-medium text-secondary">Investors</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-text-app font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-app font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>24th Floor, Lodha Excelus, New Apollo Mills, Mumbai 400013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 2575619618</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@tejaslabs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-app flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© 2026 Tejas Labs Inc. All rights reserved.</p>
          <p>Designed for the future of STEM education.</p>
        </div>
      </div>
    </footer>
  );
}
