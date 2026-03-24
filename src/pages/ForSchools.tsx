import { motion } from 'motion/react';
import { GraduationCap, Building2, Users, ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export default function ForSchools() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-8"
          >
            <GraduationCap size={16} />
            <span>Trusted by 200+ Schools Worldwide</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">Transform Your STEM Lab</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Bring hands-on engineering to your classroom with our bulk kits, curriculum integration, and teacher workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry" className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary hover:text-slate-900 transition-all">
              Request a Quote
            </a>
            <a href="#" className="bg-primary border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Building2 size={32} className="text-primary" />,
              title: 'Bulk Orders',
              desc: 'Special pricing for classroom sets. We provide everything you need for a class of 30+ students.'
            },
            {
              icon: <Users size={32} className="text-primary" />,
              title: 'Teacher Workshops',
              desc: 'Professional development sessions to help educators integrate our kits into their existing curriculum.'
            },
            {
              icon: <CheckCircle2 size={32} className="text-primary" />,
              title: 'STEM Lab Setup',
              desc: 'From furniture to equipment, we help you design and build a state-of-the-art maker space.'
            }
          ].map((service, i) => (
            <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">School Inquiry Form</h2>
            <p className="text-slate-400">Tell us about your school's needs and we'll get back to you within 24 hours.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300">Full Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300">School Email</label>
              <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="john@school.edu" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300">School Name</label>
              <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Innovation High" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300">Role</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none">
                <option>Teacher</option>
                <option>Principal</option>
                <option>STEM Coordinator</option>
                <option>District Admin</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-slate-300">Message</label>
              <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                Send Inquiry <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
