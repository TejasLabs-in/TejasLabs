import { motion } from 'motion/react';
import { ShoppingCart, Star, ArrowRight, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const products = [
  {
    id: 1,
    name: 'Entry Level Kit',
    category: 'Mechanics',
    price: '₹1,999',
    level: 'Beginner',
    img: 'EntryLevelKit.jpg',
    build: 'Rubber-band powered vehicle',
    learn: 'Energy storage, motion, and mechanical efficiency.',
    age: 'Ages 10-12',
    description: 'A perfect entry point into engineering. Build a vehicle that transforms potential energy into kinetic motion.'
  },
  {
    id: 2,
    name: 'Intermediate Kit',
    category: 'Fluid Mechanics',
    price: '₹3,499',
    level: 'Intermediate',
    img: 'IntermediateKit.jpg',
    build: '4-axis robotic arm',
    learn: 'Fluid mechanics and force transmission through hydraulic systems.',
    age: 'Ages 13-15',
    description: 'Master the power of water. Construct a functional arm that can lift and move objects using hydraulic pressure.'
  },
  {
    id: 3,
    name: 'Advanced Kit',
    category: 'Electronics',
    price: '₹6,999',
    level: 'Advanced',
    img: 'AdvancedKit.jpg',
    build: 'Automated circuit device',
    learn: 'Electronic circuits and control mechanisms.',
    age: 'Ages 16+',
    description: 'Our most advanced kit. Dive into the world of circuits, sensors, and automated control systems.'
  }
];

export default function Products() {
  const { openModal } = useAppContext();

  return (
    <div className="bg-bg-app min-h-screen pb-24 pt-20">
      <header className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight"
        >
          Engineering Kits.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-xl max-w-2xl mx-auto font-light"
        >
          Hands-on STEM kits designed for progressive learning. From basic mechanics to advanced automation.
        </motion.p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full apple-card p-4"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-bg-soft mb-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {product.level}
                </div>
              </div>
              
              <div className="flex-grow px-4 pb-8 space-y-6">
                <div>
                  <h3 className="font-display font-bold text-3xl mb-2">{product.name}</h3>
                  <p className="text-primary font-bold text-xl">{product.price}</p>
                </div>
                
                <div className="space-y-3 text-sm border-t border-border-app pt-6">
                  <p className="text-text-muted"><span className="font-bold text-text-app">Build:</span> {product.build}</p>
                  <p className="text-text-muted"><span className="font-bold text-text-app">Learn:</span> {product.learn}</p>
                </div>

                <p className="text-text-muted text-base leading-relaxed font-light">{product.description}</p>
              </div>
              
              <button 
                onClick={openModal}
                className="w-full bg-text-app text-bg-app py-5 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-xl group-hover:shadow-primary/20"
              >
                Buy Now <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <section className="mt-48 py-32 bg-bg-soft border-y border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-display font-bold mb-4">Choose your path.</h2>
            <p className="text-text-muted text-lg">Compare our kits to find the perfect fit for your learning journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="text-center p-8 border-r last:border-0 border-border-app">
                <h4 className="font-bold text-xl mb-4">{p.name}</h4>
                <div className="space-y-4 text-text-muted text-sm">
                  <p className="text-primary font-bold">{p.age}</p>
                  <p>15+ Components</p>
                  <p>Detailed Guidebook</p>
                  <p>Video Tutorials</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
