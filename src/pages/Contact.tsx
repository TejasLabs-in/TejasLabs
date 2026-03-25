import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Twitter, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-bg-app text-text-app min-h-screen pt-20 pb-24">
      {/* Hero */}
      <section className="py-32 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter leading-[0.9]"
        >
          Let's <span className="text-primary">Talk.</span>
        </motion.h1>
        <p className="text-2xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
          Have a question or a project in mind? We're here to help you build the future.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold tracking-tight">Connect with us.</h2>
              <p className="text-xl text-text-muted font-light leading-relaxed">
                Whether you're a student, a teacher, or a potential partner, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-12">
              {[
                { icon: <Mail />, label: 'Email', val: 'hello@tejaslabs.com' },
                { icon: <Phone />, label: 'Phone', val: '+91 2575619618' },
                { icon: <MapPin />, label: 'Studio', val: '24th Floor, Lodha Excelus, New Apollo Mills, Mumbai 400013' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-bg-soft rounded-2xl flex items-center justify-center text-primary border border-border-app group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{item.label}</div>
                    <div className="text-xl font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-border-app">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Social Channels</div>
              <div className="flex gap-6">
                {[<Twitter />, <Github />, <Linkedin />, <Globe />].map((icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-bg-soft rounded-xl flex items-center justify-center text-text-muted hover:text-primary hover:bg-white/10 transition-all border border-border-app">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side Glass Card */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-form p-12 md:p-16 rounded-[3rem]"
            >
              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" id="fname" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl" placeholder=" " />
                    <label htmlFor="fname" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">First Name</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="lname" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl" placeholder=" " />
                    <label htmlFor="lname" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Last Name</label>
                  </div>
                </div>

                <div className="relative group">
                  <input type="email" id="email" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl" placeholder=" " />
                  <label htmlFor="email" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Email Address</label>
                </div>

                <div className="relative group">
                  <select id="subject" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl appearance-none">
                    <option className="bg-bg-app">Product Question</option>
                    <option className="bg-bg-app">School Partnership</option>
                    <option className="bg-bg-app">Order Support</option>
                    <option className="bg-bg-app">Other</option>
                  </select>
                  <label htmlFor="subject" className="absolute left-0 -top-4 text-sm text-primary">Subject</label>
                </div>

                <div className="relative group">
                  <textarea id="message" rows={4} className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl resize-none" placeholder=" "></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Message</label>
                </div>

                <div className="pt-8">
                  <button className="w-full bg-primary text-white py-6 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 text-xl shadow-2xl shadow-blue-500/20">
                    Send Message <Send size={24} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
