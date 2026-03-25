import { motion } from 'motion/react';
import { Package, BookOpen, Settings, Rocket, CheckCircle2, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: <Package size={40} />,
    title: 'Choose Your Kit',
    description: 'Select from our range of engineering challenges based on age, interest, and difficulty level. Each kit is a gateway to a new world of discovery.',
    color: 'text-primary'
  },
  {
    icon: <BookOpen size={40} />,
    title: 'Unbox & Explore',
    description: 'Every kit comes with high-quality components, real tools, and a beautifully illustrated guide that speaks the language of makers.',
    color: 'text-secondary'
  },
  {
    icon: <Settings size={40} />,
    title: 'Build & Experiment',
    description: 'Follow the step-by-step instructions to build your project. Then, go beyond the manual with our expansion challenges.',
    color: 'text-accent'
  },
  {
    icon: <Rocket size={40} />,
    title: 'Master Engineering',
    description: 'Complete the challenges, learn the underlying physics, and unlock your next engineering level in our global community.',
    color: 'text-primary'
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-bg-app text-text-app min-h-screen pb-24 pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter leading-[0.9]">
            From Box to <br />
            <span className="text-primary">Breakthrough.</span>
          </h1>
          <p className="text-2xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
            We've simplified complex engineering concepts into a seamless, hands-on journey of creation.
          </p>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-24 text-text-muted"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Scroll Sequence Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-64">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-24`}
          >
            <div className="flex-1 space-y-8">
              <div className={`w-20 h-20 rounded-3xl bg-bg-soft flex items-center justify-center border border-border-app ${step.color}`}>
                {step.icon}
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                <span className="text-text-muted text-2xl block mb-4 font-mono">0{i + 1}.</span>
                {step.title}
              </h2>
              <p className="text-2xl text-text-muted font-light leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="apple-card aspect-video relative group overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/step-${i}/1200/800`}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Feature Section - The "What's Inside" */}
      <section className="py-48 bg-bg-soft border-y border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight">What's inside <br /> every kit?</h2>
              <p className="text-2xl text-text-muted font-light leading-relaxed">
                We don't just give you parts; we provide a complete, professional-grade engineering ecosystem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  'Durable components',
                  'Precision tools',
                  'Illustrated guides',
                  'Video masterclasses',
                  'Theory booklets',
                  'Maker community'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl font-light">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="apple-card p-4 bg-bg-soft border-border-app shadow-2xl">
                <img
                  src="https://picsum.photos/seed/kit-contents-apple/1000/800"
                  alt="Kit contents"
                  className="rounded-[2rem] w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating elements for depth */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
