import { motion } from 'motion/react';
import { GraduationCap, Building2, Users, ArrowRight, CheckCircle2, Mail, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function ForSchools() {
  return (
    <div className="bg-bg-app text-text-app min-h-screen pt-20">
      {/* Hero - Professional & Bold */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20"
          >
            <ShieldCheck size={16} />
            <span>Trusted by 200+ Institutions</span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-12 tracking-tighter leading-[0.9]">
            Future-Proof Your <br />
            <span className="text-primary">Curriculum.</span>
          </h1>
          <p className="text-2xl text-text-muted max-w-3xl mx-auto mb-16 font-light leading-relaxed">
            Empower your students with hands-on engineering kits designed for classroom excellence and curriculum integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#inquiry" className="bg-primary text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20">
              Partner With Us
            </a>
            <a href="#" className="bg-bg-soft border border-border-app text-text-app px-12 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
              Download Institutional Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Value Propositions - Clean Grids */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={32} />,
              title: 'Rapid Deployment',
              desc: 'Ready-to-use classroom sets with comprehensive teacher guides for immediate implementation.'
            },
            {
              icon: <Users size={32} />,
              title: 'Expert Support',
              desc: 'Dedicated STEM coordinators to help you align our kits with your specific learning objectives.'
            },
            {
              icon: <Globe size={32} />,
              title: 'Global Standards',
              desc: 'Curriculum designed to meet international engineering and science education benchmarks.'
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="apple-card p-12 border-border-app"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
              <p className="text-xl text-text-muted leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats / Trust Signals */}
      <section className="py-32 bg-bg-soft border-y border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Students Impacted', val: '50k+' },
              { label: 'Partner Schools', val: '200+' },
              { label: 'Countries', val: '15+' },
              { label: 'Lab Setups', val: '85' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-display font-bold text-primary mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-text-muted uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form - Modern Utility */}
      <section id="inquiry" className="py-48">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-form p-12 md:p-20 rounded-[3rem]">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display font-bold mb-6 tracking-tight">Institutional Inquiry</h2>
              <p className="text-xl text-text-muted font-light">Let's discuss how we can elevate your STEM program.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input type="text" id="name" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl" placeholder=" " />
                <label htmlFor="name" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Full Name</label>
              </div>
              <div className="relative group">
                <input type="email" id="email" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl" placeholder=" " />
                <label htmlFor="email" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">School Email</label>
              </div>
              <div className="relative group">
                <input type="text" id="school" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl" placeholder=" " />
                <label htmlFor="school" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">School Name</label>
              </div>
              <div className="relative group">
                <select id="role" className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl appearance-none">
                  <option className="bg-bg-app">Teacher</option>
                  <option className="bg-bg-app">Principal</option>
                  <option className="bg-bg-app">STEM Coordinator</option>
                  <option className="bg-bg-app">District Admin</option>
                </select>
                <label htmlFor="role" className="absolute left-0 -top-4 text-sm text-primary">Role</label>
              </div>
              <div className="md:col-span-2 relative group">
                <textarea id="message" rows={4} className="w-full bg-transparent border-b border-border-app py-4 outline-none focus:border-primary transition-colors peer text-xl resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-text-muted transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Message</label>
              </div>
              <div className="md:col-span-2 pt-8">
                <button className="w-full bg-primary text-white py-6 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 text-xl shadow-2xl shadow-blue-500/20">
                  Send Inquiry <ArrowRight size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
