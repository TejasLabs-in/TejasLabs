import { motion } from 'motion/react';
import { Package, BookOpen, Settings, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Package size={32} className="text-primary" />,
    title: 'Choose Your Kit',
    description: 'Select from our range of engineering challenges based on age, interest, and difficulty level.'
  },
  {
    icon: <BookOpen size={32} className="text-primary" />,
    title: 'Unbox & Explore',
    description: 'Every kit comes with high-quality components, real tools, and a beautifully illustrated guide.'
  },
  {
    icon: <Settings size={32} className="text-primary" />,
    title: 'Build & Experiment',
    description: 'Follow the step-by-step instructions to build your project. Then, experiment with modifications.'
  },
  {
    icon: <Rocket size={32} className="text-primary" />,
    title: 'Master Engineering',
    description: 'Complete the challenges, learn the underlying physics, and unlock your next engineering level.'
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">How It Works</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We've simplified complex engineering concepts into fun, hands-on projects that anyone can build.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-2 border-primary rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-2 border-secondary rounded-full" />
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-slate-100 -translate-x-10 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">What's inside every kit?</h2>
              <p className="text-lg text-slate-600">
                We don't just give you parts; we give you a complete learning experience.
              </p>
              <ul className="space-y-4">
                {[
                  'High-quality, durable components',
                  'Real tools (screwdrivers, wrenches, etc.)',
                  'Step-by-step illustrated guides',
                  'Video tutorials for every project',
                  'Physics & Engineering theory booklets',
                  'Access to our online maker community'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/kit-contents/800/600"
                alt="Kit contents"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
