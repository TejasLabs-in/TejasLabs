import { motion } from 'motion/react';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Mechanical Motion Kit',
    category: 'Mechanics',
    price: '₹1,999',
    level: 'Beginner',
    img: 'https://picsum.photos/seed/motion/600/600',
    build: 'Rubber-band powered vehicle',
    learn: 'Energy storage, motion, and mechanical efficiency.',
    description: 'A perfect entry point into engineering. Build a vehicle that transforms potential energy into kinetic motion.'
  },
  {
    id: 2,
    name: 'Hydraulic Robotic Arm Kit',
    category: 'Fluid Mechanics',
    price: '₹3,499',
    level: 'Intermediate',
    img: 'https://picsum.photos/seed/hydraulic/600/600',
    build: '4-axis robotic arm',
    learn: 'Fluid mechanics and force transmission through hydraulic systems.',
    description: 'Master the power of water. Construct a functional arm that can lift and move objects using hydraulic pressure.'
  },
  {
    id: 3,
    name: 'Renewable Energy Kit',
    category: 'Sustainable Tech',
    price: '₹3,499',
    level: 'Intermediate',
    img: 'https://picsum.photos/seed/energy/600/600',
    build: 'Wind turbine or solar system',
    learn: 'Sustainable energy generation and power conversion.',
    description: 'Explore the future of power. Build systems that harness natural resources to generate clean electricity.'
  },
  {
    id: 4,
    name: 'Automation & Electronics Kit',
    category: 'Electronics',
    price: '₹6,999',
    level: 'Advanced',
    img: 'https://picsum.photos/seed/automation/600/600',
    build: 'Automated circuit device',
    learn: 'Electronic circuits and control mechanisms.',
    description: 'Our most advanced kit. Dive into the world of circuits, sensors, and automated control systems.'
  }
];

export default function Products() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <header className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Engineering Kits</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Hands-on STEM kits designed for progressive learning. From basic mechanics to advanced automation.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                  {product.level}
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-primary font-bold text-lg mt-1">{product.price}</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-slate-500"><span className="font-bold text-slate-900">Build:</span> {product.build}</p>
                  <p className="text-slate-500"><span className="font-bold text-slate-900">Learn:</span> {product.learn}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
              </div>
              
              <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-primary transition-all flex items-center justify-center gap-2">
                Buy Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
