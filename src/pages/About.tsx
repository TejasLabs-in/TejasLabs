import { motion } from 'motion/react';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">Inspiring the Next Generation.</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Tejas Labs is an educational manufacturing startup focused on transforming traditional science learning into an engaging, practical experience.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Our mission is to bridge the gap between conceptual understanding and real-world problem-solving. We believe in "Learning by Building"—enabling students to physically assemble working systems to understand the world around them.
            </p>
          </motion.div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/tejas-lab/800/800"
              alt="Tejas Labs Innovation"
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="p-12 rounded-[3rem] bg-slate-800 border border-slate-700">
              <h2 className="text-3xl font-display font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To transform traditional science learning into an engaging and practical experience by enabling students to build functional engineering systems through structured DIY kits.
              </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-slate-800 border border-slate-700">
              <h2 className="text-3xl font-display font-bold mb-6 text-secondary">Our Vision</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                To establish Tejas Labs as a leading provider of affordable and innovative engineering learning kits, scaling across major urban and semi-urban markets over the next five years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold mb-4">Leadership Team</h2>
          <p className="text-slate-600">Technology enthusiasts with a passion for innovation and education.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {[
            {
              name: 'Dev Vora',
              role: 'CEO & Co-Founder',
              bio: 'Responsible for strategic vision and overall direction. Background in technology and analytics, focusing on integrating engineering with modern educational methods.',
              img: '/Dev Vora.png'
            },
            {
              name: 'Siddharth Vaddepalli',
              role: 'CFO & Co-Founder',
              bio: 'Leads financial and operational management. Ensures financial sustainability while expanding manufacturing and distribution capabilities.',
              img: '/Siddharth Vaddepalli.jpg'
            }
          ].map((member, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 group hover:border-primary transition-all text-center">
              <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">{member.role}</p>
              <p className="text-slate-600 leading-relaxed text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
