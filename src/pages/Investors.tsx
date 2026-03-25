import { motion } from 'motion/react';
import { TrendingUp, Globe, Briefcase, BarChart3, Download, Mail, ArrowUpRight } from 'lucide-react';

export default function Investors() {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-24">
      {/* Hero */}
      <section className="pt-32 pb-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8"
            >
              <TrendingUp size={16} />
              <span>Investment Opportunity</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Scaling the Future of <span className="text-primary">STEM Learning</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              Tejas Labs is a manufacturing-focused ed-tech startup bridging the gap between theory and practice. We are building a scalable ecosystem for hands-on engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                Request Pitch Deck <Download size={20} />
              </button>
              <button className="bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                Contact Investor Relations <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">The Opportunity</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">$8.8B Indian STEM Market</h3>
                    <p className="text-slate-400">The Indian STEM education market is projected to reach $8.8 billion by 2028, driven by the National Education Policy (NEP) 2020.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    <Briefcase className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Omnichannel Revenue</h3>
                    <p className="text-slate-400">Diversified revenue through D2C kit sales, B2B school partnerships, and institutional STEM lab setups.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shrink-0">
                    <BarChart3 className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scalable Manufacturing</h3>
                    <p className="text-slate-400">In-house design and manufacturing capabilities allow for high gross margins and rapid product iteration.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-12 rounded-[3rem] border border-slate-700">
              <div className="space-y-12">
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Growth Target</div>
                  <div className="text-5xl font-display font-bold text-primary">300% YoY</div>
                  <p className="text-slate-500 mt-2 text-sm">Projected year-over-year growth as we expand into Tier 1 and Tier 2 cities.</p>
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Revenue Target</div>
                  <div className="text-5xl font-display font-bold text-secondary">₹24.6 Cr</div>
                  <p className="text-slate-500 mt-2 text-sm">Target revenue for FY 2026-27 through aggressive market penetration.</p>
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Market Reach</div>
                  <div className="text-5xl font-display font-bold text-accent">50+ Schools</div>
                  <p className="text-slate-500 mt-2 text-sm">Targeting institutional partnerships with leading K-12 schools in the first phase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4">Our Business Model</h2>
            <p className="text-slate-400">A robust, multi-layered approach to education technology.</p>
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
              <div key={i} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-4 text-primary">{model.title}</h3>
                <p className="text-slate-400 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Recap */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-grow">
              <h2 className="text-4xl font-display font-bold mb-8">Led by Visionaries</h2>
              <p className="text-xl text-slate-400 mb-12">
                Our founding team combines expertise in technology, analytics, and finance to revolutionize engineering education.
              </p>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto">
                    <img src="Dev Vora.png" alt="Dev Vora" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="font-bold">Dev Vora</div>
                  <div className="text-xs text-slate-500">CEO & Co-Founder</div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto">
                    <img src="Siddharth Vaddepalli.jpg" alt="Siddharth Vaddepalli" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="font-bold">Siddharth Vaddepalli</div>
                  <div className="text-xs text-slate-500">CFO & Co-Founder</div>
                </div>
              </div>
            </div>
            <div className="shrink-0">
              <button className="bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-3">
                Invest in Tejas Labs <ArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
