import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <header className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our kits or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-lg font-medium text-slate-900">hello@tejaslabs.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-lg font-medium text-slate-900">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-lg font-medium text-slate-900">123 Innovation Way, Tech Valley, CA 94025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary p-10 rounded-3xl text-white">
              <MessageSquare size={40} className="mb-6 opacity-50" />
              <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
              <p className="text-blue-100 mb-6">Need immediate help? Our support team is available Mon-Fri, 9am-6pm PST.</p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-secondary hover:text-slate-900 transition-all">
                Start Chatting
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500">First Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Smith" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-500">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="jane@example.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-500">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all">
                    <option>Product Question</option>
                    <option>School Partnership</option>
                    <option>Order Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-500">Message</label>
                  <textarea rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-slate-900/10">
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
