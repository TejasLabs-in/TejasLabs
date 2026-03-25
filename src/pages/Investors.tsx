import { motion } from 'motion/react';
import { TrendingUp, Globe, Briefcase, BarChart3, Download, Mail, ArrowUpRight, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Investors() {
  const { openInvestorModal } = useAppContext();

  return (
    <div className="bg-bg-app text-text-app min-h-screen pb-24 pt-20">
      {/* Hero - Bold & Minimal */}
      <section className="pt-32 pb-48 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8"
            >
              <TrendingUp size={16} />
              <span>Investment Opportunity</span>
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-display font-bold mb-12 leading-[0.9] tracking-tighter">
              Scaling the <br />
              <span className="text-primary">Future.</span>
            </h1>
            <p className="text-2xl text-text-muted leading-relaxed mb-16 max-w-2xl font-light">
              Tejas Labs is a manufacturing-focused ed-tech startup bridging the gap between theory and practice. We are building a scalable ecosystem for hands-on engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={openInvestorModal}
                className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/20"
              >
                Request Pitch Deck <Download size={20} />
              </button>
              <button 
                onClick={openInvestorModal}
                className="bg-bg-soft text-text-app border border-border-app px-10 py-5 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Contact Relations <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity - Data Visualization Style */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-display font-bold tracking-tight">The Opportunity.</h2>
              <div className="space-y-12">
                {[
                  { icon: <Globe />, title: '$8.8B Indian STEM Market', desc: 'The Indian STEM education market is projected to reach $8.8 billion by 2028, driven by the National Education Policy (NEP) 2020.' },
                  { icon: <Briefcase />, title: 'Omnichannel Revenue', desc: 'Diversified revenue through D2C kit sales, B2B school partnerships, and institutional STEM lab setups.' },
                  { icon: <BarChart3 />, title: 'Scalable Manufacturing', desc: 'In-house design and manufacturing capabilities allow for high gross margins and rapid product iteration.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8"
                  >
                    <div className="w-14 h-14 bg-bg-soft rounded-2xl flex items-center justify-center shrink-0 text-primary border border-border-app">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-text-muted text-lg font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="apple-card p-16 space-y-16">
              {[
                { label: 'Growth Target', val: '300% YoY', color: 'text-primary', sub: 'Projected year-over-year growth.' },
                { label: 'Revenue Target', val: '₹24.6 Cr', color: 'text-secondary', sub: 'Target revenue for FY 2026-27.' },
                { label: 'Market Reach', val: '50+ Schools', color: 'text-accent', sub: 'Institutional partnerships target.' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-text-muted text-xs font-bold uppercase tracking-[0.2em] mb-4">{stat.label}</div>
                  <div className={`text-6xl font-display font-bold ${stat.color} tracking-tighter`}>{stat.val}</div>
                  <p className="text-text-muted mt-4 text-base font-light">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Model - Minimalist Bento */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tight">Our Business Model</h2>
            <p className="text-text-muted text-xl font-light">A robust, multi-layered approach to education technology.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'D2C Kit Sales',
                desc: 'One-time kit sales directly to parents and students via our e-commerce platform and retail partners.'
              },
              {
                title: 'B2B School Partnerships',
                desc: 'Bulk sales, STEM lab installations, and curriculum integration for K-12 schools.'
              },
              {
                title: 'Subscription Model',
                desc: 'Monthly STEM kit subscriptions providing progressive learning paths for long-term engagement.'
              }
            ].map((model, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                className="apple-card p-12 hover:border-primary transition-colors group"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary group-hover:translate-x-1 transition-transform">{model.title}</h3>
                <p className="text-text-muted text-lg leading-relaxed font-light">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Recap - Immersive Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="bg-bg-soft rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-24 border border-border-app shadow-2xl"
          >
            <div className="flex-grow">
              <h2 className="text-5xl font-display font-bold mb-8 tracking-tight">Led by Visionaries.</h2>
              <p className="text-2xl text-text-muted mb-16 font-light leading-relaxed">
                Our founding team combines expertise in technology, analytics, and finance to revolutionize engineering education.
              </p>
              <div className="flex flex-wrap gap-12">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden border border-border-app grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="DevVora.png" alt="Dev Vora" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Dev Vora</div>
                    <div className="text-sm text-text-muted uppercase tracking-widest mt-1">CEO & Co-Founder</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-3xl overflow-hidden border border-border-app grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="SiddharthVaddepalli.jpg" alt="Siddharth Vaddepalli" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Siddharth Vaddepalli</div>
                    <div className="text-sm text-text-muted uppercase tracking-widest mt-1">CFO & Co-Founder</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <button 
                onClick={openInvestorModal}
                className="bg-text-app text-bg-app px-12 py-6 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-3 shadow-2xl shadow-white/5"
              >
                Invest Now <ArrowUpRight size={28} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
