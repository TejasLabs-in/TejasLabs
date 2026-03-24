import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Beaker, Lightbulb, Target, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-bold mb-8">
                <Zap size={16} />
                <span>The Future of STEM is Hands-On</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-8">
                Learning by <span className="text-primary italic">Building</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                We transform traditional science learning into practical exploration through DIY engineering kits that teach real-world principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20"
                >
                  Shop Kits <ArrowRight size={20} />
                </Link>
                <Link
                  to="/for-schools"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  For Schools
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/tejas-hero/800/600"
                  alt="STEM Kit Construction"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-slate-900">The Problem</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Traditional education often emphasizes theoretical learning and examination performance. This creates a gap between conceptual understanding and real-world problem-solving skills.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-primary">Our Solution</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tejas Labs provides carefully designed engineering kits that allow students to experiment, construct, and explore scientific principles through hands-on building activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-16">The Learning Pathway</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Beaker />, title: 'Choose', desc: 'Select a kit based on interest.' },
              { icon: <Rocket />, title: 'Build', desc: 'Assemble working models.' },
              { icon: <Lightbulb />, title: 'Learn', desc: 'Understand core principles.' },
              { icon: <Target />, title: 'Innovate', desc: 'Experiment and modify.' }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-primary">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold">Why Hands-On?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
              <h3 className="text-xl font-bold mb-4">Experiential Learning</h3>
              <p className="text-slate-600">Gain practical exposure to engineering principles through construction activities.</p>
            </div>
            <div className="p-8 rounded-3xl bg-yellow-50 border border-yellow-100">
              <h3 className="text-xl font-bold mb-4">Structured Design</h3>
              <p className="text-slate-600">Detailed instructions and explanatory guides transform experimentation into meaning.</p>
            </div>
            <div className="p-8 rounded-3xl bg-red-50 border border-red-100">
              <h3 className="text-xl font-bold mb-4">Progressive Growth</h3>
              <p className="text-slate-600">Advance from beginner kits to sophisticated engineering projects as skills grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
