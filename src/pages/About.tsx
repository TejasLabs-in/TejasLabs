import { motion } from 'motion/react';
import { Target, Eye, Users, Award, Rocket, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-bg-app text-text-app min-h-screen pb-24 pt-20">
      {/* Hero - Storytelling Entry */}
      <section className="pt-32 pb-48 border-b border-border-app overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold mb-12 leading-[0.85] tracking-tighter">
              We build for the <br />
              <span className="text-primary">Makers.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-text-muted leading-relaxed font-light max-w-2xl">
              Tejas Labs was born from a simple observation: the best way to learn engineering is to actually engineer.
            </p>
          </motion.div>
          
          {/* Abstract background element */}
          <div className="absolute -right-24 top-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        </div>
      </section>

      {/* Mission & Vision - Minimalist Cards */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="apple-card p-16 space-y-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold tracking-tight">Our Mission</h2>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                To democratize high-end engineering education by providing accessible, professional-grade hardware kits and a curriculum that emphasizes creation over consumption.
              </p>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              viewport={{ once: true }}
              className="apple-card p-16 space-y-8"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                <Eye size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold tracking-tight">Our Vision</h2>
              <p className="text-xl text-text-muted leading-relaxed font-light">
                A world where every student has the tools and confidence to build the next generation of technology, bridging the gap between imagination and reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Grid */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-display font-bold tracking-tight">What drives us.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <Award />, title: 'Quality First', desc: 'We don\'t compromise on components. Our kits use industry-standard parts.' },
              { icon: <Rocket />, title: 'Innovation', desc: 'Constantly iterating on our curriculum to stay ahead of the tech curve.' },
              { icon: <Heart />, title: 'Community', desc: 'Building a global network of young engineers who support and inspire each other.' }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-12 h-12 bg-bg-soft rounded-xl flex items-center justify-center mx-auto text-primary border border-border-app">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-text-muted text-lg font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - High Fidelity Portraits */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-display font-bold tracking-tight">The Team.</h2>
            <p className="text-xl text-text-muted mt-4 font-light">The minds behind the movement.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-border-app grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="DevVora.png" 
                  alt="Dev Vora" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">Dev Vora</h3>
              <p className="text-primary font-medium tracking-widest uppercase text-sm">CEO & Co-Founder</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-border-app grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img 
                  src="SiddharthVaddepalli.jpg" 
                  alt="Siddharth Vaddepalli" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">Siddharth Vaddepalli</h3>
              <p className="text-secondary font-medium tracking-widest uppercase text-sm">CFO & Co-Founder</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
