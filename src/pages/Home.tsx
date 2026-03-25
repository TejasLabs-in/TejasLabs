import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap, Beaker, Lightbulb, Target, Rocket, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import React from 'react';

export default function Home() {
  const { openModal, theme } = useAppContext();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="overflow-hidden bg-bg-app transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-soft border border-border-app text-primary text-sm font-bold mb-8"
          >
            <Zap size={16} />
            <span>The Future of STEM is Hands-On</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-9xl font-display font-bold leading-[1] mb-8 tracking-tighter"
          >
            Learning by <br />
            <span className="text-primary italic">Building.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-text-muted mb-12 leading-relaxed max-w-2xl mx-auto font-light"
          >
            We transform theoretical science into practical exploration through DIY engineering kits that teach real-world principles.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={openModal}
              className="group bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-2xl shadow-blue-500/20"
            >
              Shop Kits <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/for-schools"
              className="group text-text-app hover:text-primary transition-colors flex items-center gap-1 text-lg font-medium"
            >
              For Schools <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
      </section>

      {/* Product Showcase - Apple Style Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="apple-card col-span-2 h-[600px] relative group"
          >
            <img 
              src="AdvancedKit.jpg" 
              alt="Advanced Engineering Kit" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Professional Grade</span>
              <h2 className="text-5xl font-display font-bold mb-4">Advanced Robotics</h2>
              <p className="text-text-muted max-w-md mb-8 text-lg">Build complex autonomous systems with our flagship engineering kit.</p>
              <button onClick={openModal} className="w-fit bg-text-app text-bg-app px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-all">Learn More</button>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="apple-card h-[500px] relative group"
          >
            <img 
              src="IntermediateKit.jpg" 
              alt="Intermediate Kit" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-display font-bold mb-2">Smart Circuits</h3>
              <p className="text-text-muted mb-6">Master the flow of energy.</p>
              <button onClick={openModal} className="w-fit text-white font-bold flex items-center gap-1 hover:text-primary transition-colors">Shop Now <ChevronRight size={18} /></button>
            </div>
          </motion.div>

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="apple-card h-[500px] relative group"
          >
            <img 
              src="EntryLevelKit.jpg" 
              alt="Entry Level Kit" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-display font-bold mb-2">Basic Mechanics</h3>
              <p className="text-text-muted mb-6">Where every engineer starts.</p>
              <button onClick={openModal} className="w-fit text-white font-bold flex items-center gap-1 hover:text-primary transition-colors">Shop Now <ChevronRight size={18} /></button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 bg-bg-soft">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="text-4xl lg:text-6xl font-display font-bold mb-12 leading-tight"
          >
            "Traditional education is too theoretical. We bridge the gap with <span className="text-primary italic">real-world</span> application."
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-border-app">
            {[
              { label: 'Hands-on', val: '100%' },
              { label: 'Practical', val: 'Real' },
              { label: 'Kits', val: 'DIY' },
              { label: 'Growth', val: 'STEM' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.val}</div>
                <div className="text-text-muted text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Pathway */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-display font-bold mb-6 tracking-tight">The Learning Pathway</h2>
          <p className="text-text-muted text-xl font-light">Four steps to engineering mastery.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-16">
          {[
            { icon: <Beaker />, title: 'Choose', desc: 'Select a kit based on interest.' },
            { icon: <Rocket />, title: 'Build', desc: 'Assemble working models.' },
            { icon: <Lightbulb />, title: 'Learn', desc: 'Understand core principles.' },
            { icon: <Target />, title: 'Innovate', desc: 'Experiment and modify.' }
          ].map((step, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {step.icon}
              </div>
              <h3 className="font-bold text-2xl mb-4">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-6 -right-8 w-16 h-[1px] bg-border-app" />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
