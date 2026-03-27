import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  ArrowRight, 
  Download, 
  Mail, 
  BarChart3, 
  Building,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ScrollReveal from '../components/ScrollReveal';

const metrics = [
  { label: "Target Revenue (2030)", value: "₹24.6 Cr", sub: "across all channels" },
  { label: "Gross Margin", value: "60%", sub: "average across products" },
  { label: "School Partners (2030)", value: "50+", sub: "institutional contracts" },
  { label: "Unit Sales (2030)", value: "32,000+", sub: "kits annually" },
];

const marketStats = [
  { value: "$8.86B", label: "Indian educational toys market by 2030" },
  { value: "10.5%", label: "CAGR of Indian educational toy sector" },
  { value: "$1.6B", label: "Tech-enabled toy segment in India (2024)" },
  { value: "19.7%", label: "CAGR of K-12 STEM education in India" },
];

const revenueTrajectory = [
  { y: "2026", p: "₹0.82 Cr", s: "₹0.36 Cr", i: "₹0.75 Cr", t: "₹1.93 Cr" },
  { y: "2027", p: "₹1.71 Cr", s: "₹0.72 Cr", i: "₹1.20 Cr", t: "₹3.63 Cr" },
  { y: "2028", p: "₹3.18 Cr", s: "₹2.40 Cr", i: "₹1.80 Cr", t: "₹7.38 Cr" },
  { y: "2029", p: "₹5.76 Cr", s: "₹4.20 Cr", i: "₹3.00 Cr", t: "₹12.96 Cr" },
  { y: "2030", p: "₹9.90 Cr", s: "₹7.20 Cr", i: "₹7.50 Cr", t: "₹24.60 Cr" },
];

export default function Investors() {
  const { openInvestorModal } = useAppContext();

  return (
    <div className="bg-bg-app text-text-app min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
              <TrendingUp size={16} />
              <span>Investor Relations</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-10 leading-[0.9] tracking-tighter">
              Building the future of <br />
              <span className="text-primary italic">STEM Education.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-12 max-w-2xl font-light">
              Tejas Labs makes hands-on engineering education accessible through affordable, structured DIY kits and school partnerships. Currently bootstrapped and building for scale.
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
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* Market Opportunity */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Market Opportunity</h2>
            <p className="text-text-muted text-xl max-w-2xl mx-auto font-light">
              India's STEM education market is booming, driven by NEP 2020, a rising middle class, and growing demand for experiential learning.
            </p>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((m, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="apple-card p-10 text-center hover:border-primary/50 transition-colors h-full flex flex-col justify-center">
                  <p className="text-4xl font-display font-bold text-primary mb-4 tracking-tighter">{m.value}</p>
                  <p className="text-text-muted text-sm font-medium leading-relaxed uppercase tracking-wider">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-32 bg-bg-soft border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Business Model</h2>
            <p className="text-text-muted text-xl font-light">A robust, multi-layered approach to education technology.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="text-primary" />,
                title: 'Product Sales',
                desc: 'Tiered kits from ₹1,999 to ₹6,999 sold through our website and marketplaces. 60% gross margin.'
              },
              {
                icon: <BarChart3 className="text-primary" />,
                title: 'Subscriptions',
                desc: 'Monthly STEM experiment box at ₹999/mo. Builds recurring revenue and deepens engagement.'
              },
              {
                icon: <Building className="text-primary" />,
                title: 'Institutional Sales',
                desc: 'STEM lab setups, bulk orders, and teacher training for schools. Higher order values and long-term contracts.'
              }
            ].map((model, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="apple-card p-12 h-full hover:border-primary transition-all group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {model.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                  <p className="text-text-muted text-lg leading-relaxed font-light">{model.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Projections */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Growth Projections</h2>
            <p className="text-text-muted text-xl font-light">Scaling to become a leader in the Indian STEM ecosystem.</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {metrics.map((m, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="apple-card p-10 text-center hover:shadow-2xl hover:shadow-primary/5 transition-all">
                  <p className="text-5xl font-display font-bold text-primary mb-2 tracking-tighter">{m.value}</p>
                  <p className="text-lg font-bold mb-2">{m.label}</p>
                  <p className="text-text-muted text-sm font-light">{m.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="apple-card overflow-hidden">
              <div className="p-8 border-b border-border-app bg-bg-soft">
                <h3 className="text-2xl font-display font-bold">5-Year Revenue Trajectory</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-bg-soft/50 text-text-muted text-sm uppercase tracking-widest">
                      <th className="p-8 font-bold">Year</th>
                      <th className="p-8 font-bold text-right">Products</th>
                      <th className="p-8 font-bold text-right">Subscriptions</th>
                      <th className="p-8 font-bold text-right">Schools</th>
                      <th className="p-8 font-bold text-right text-primary">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-app">
                    {revenueTrajectory.map((row, i) => (
                      <tr key={i} className="hover:bg-primary/5 transition-colors">
                        <td className="p-8 font-bold text-lg">{row.y}</td>
                        <td className="p-8 text-right text-text-muted">{row.p}</td>
                        <td className="p-8 text-right text-text-muted">{row.s}</td>
                        <td className="p-8 text-right text-text-muted">{row.i}</td>
                        <td className="p-8 text-right font-bold text-xl text-primary">{row.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-32 bg-bg-soft border-b border-border-app">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Why Tejas Labs Wins</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {[
                "Hands-on engineering — not toys. Students build real working systems.",
                "Affordable for Indian market — kits from ₹1,999 vs ₹5,000+ competitors.",
                "Progressive learning ecosystem — beginner to advanced pathways.",
                "Digital + physical — online tutorials complement hands-on building.",
                "Government tailwinds — NEP 2020, Atal Innovation Mission, Make in India.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-6 apple-card p-8 hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" size={24} />
                  <p className="text-xl font-light leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-32 border-b border-border-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Founding Team</h2>
            <p className="text-text-muted text-xl font-light">Led by visionaries with a passion for engineering.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="apple-card p-12 text-center group">
                <div className="w-48 h-48 rounded-[3rem] overflow-hidden mx-auto mb-8 border-2 border-border-app group-hover:border-primary transition-colors grayscale group-hover:grayscale-0 duration-700">
                  <img src="DevVora.png" alt="Dev Vora" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Dev Vora</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6">CEO — Strategy & Product</p>
                <p className="text-text-muted text-lg font-light leading-relaxed">
                  Drives product innovation, business strategy, and institutional partnerships. Background in technology and analytics.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="apple-card p-12 text-center group">
                <div className="w-48 h-48 rounded-[3rem] overflow-hidden mx-auto mb-8 border-2 border-border-app group-hover:border-secondary transition-colors grayscale group-hover:grayscale-0 duration-700">
                  <img src="SiddharthVaddepalli.jpg" alt="Siddharth Vaddepalli" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Siddharth Vaddepalli</h3>
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">CFO — Finance & Operations</p>
                <p className="text-text-muted text-lg font-light leading-relaxed">
                  Leads financial planning, cost optimization, and operational scalability. Ensures sustainable growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Funding Status */}
      <section className="py-32 bg-bg-soft border-b border-border-app">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-8 uppercase tracking-widest">
              Current Status
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tight">Bootstrapped & Building</h2>
            <p className="text-2xl text-text-muted font-light leading-relaxed mb-8">
              ₹30 lakh initial capital from founders. Full ownership and strategic control.
            </p>
            <p className="text-xl text-text-muted font-light">
              Open to angel investors, startup incubators, and educational innovation grants for the next growth phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 tracking-tighter">
              Interested in <br />
              <span className="text-primary italic">Partnering?</span>
            </h2>
            <p className="text-2xl text-text-muted max-w-2xl mx-auto mb-16 font-light">
              We're looking for partners who share our vision of transforming STEM education in India.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button 
                onClick={openInvestorModal}
                className="bg-primary text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-3 shadow-2xl shadow-blue-500/20"
              >
                Download Pitch Deck <ArrowUpRight size={24} />
              </button>
              <button 
                onClick={openInvestorModal}
                className="bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-3 shadow-2xl shadow-white/5"
              >
                investors@tejaslabs.com <Mail size={24} />
              </button>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] opacity-30 pointer-events-none" />
      </section>
    </div>
  );
}

