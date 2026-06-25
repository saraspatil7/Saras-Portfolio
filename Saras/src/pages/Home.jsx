import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Terminal, Database, Server, Globe } from "lucide-react";

// Only import the components needed for the main dashboard interface
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  // Framer Motion layout animations
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden flex flex-col justify-between">
      
      <div>
        {/* ─── AMBIENT DESIGN BACKGROUNDS ─── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

        {/* ─── HERO SECTION ─── */}
        <Hero />

        {/* ─── INTERACTIVE BENTO GRID ZONE ─── */}
        <section className="max-w-6xl mx-auto px-6 py-12 relative z-10 pb-24">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-900/50">
              System Architecture
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-3">
              End-to-End Application Engineering
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Main Full-Stack Console Card (Spans 2 columns) */}
            <motion.div 
              variants={cardVariants}
              className="md:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300 group"
            >
              <div>
                <div className="flex gap-1.5 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-500/40" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <span className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
                  <Terminal size={14} /> fullstack_system.sh
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white max-w-xl leading-snug">
                  Engineering scalable backends, REST/GraphQL APIs, and relational databases seamlessly integrated with high-fidelity client interfaces.
                </h3>
              </div>
              <a href="/about" className="inline-flex items-center gap-1 text-sm text-slate-400 group-hover:text-cyan-400 mt-8 transition-colors">
                Explore Core Background <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Backend / Database Module */}
            <motion.div 
              variants={cardVariants}
              className="bg-slate-900/50 border border-slate-800/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500/30 transition-colors duration-300 group"
            >
              <div>
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl w-fit mb-6">
                  <Database size={22} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Backend Hub</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Designing robust server logic, authentication workflows, secure API routers, and optimized queries.
                </p>
              </div>
              <a href="/skills" className="inline-flex items-center gap-1 text-sm text-slate-400 group-hover:text-purple-400 mt-6 transition-colors">
                Inspect Systems <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Application Lab Module */}
            <motion.div 
              variants={cardVariants}
              className="bg-slate-900/50 border border-slate-800/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between hover:border-fuchsia-500/30 transition-colors duration-300 group"
            >
              <div>
                <div className="p-3 bg-fuchsia-500/10 text-fuchsia-400 rounded-2xl w-fit mb-6">
                  <Server size={22} />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Production Lab</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Live applications highlighting complete state hydration, secure database integrations, and dynamic routing architectures.
                </p>
              </div>
              <a href="/projects" className="inline-flex items-center gap-1 text-sm text-slate-400 group-hover:text-fuchsia-400 mt-6 transition-colors">
                Launch Applications <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Availability Card (Spans 2 columns) */}
            <motion.div 
              variants={cardVariants}
              className="md:col-span-2 bg-gradient-to-r from-slate-900/40 via-slate-900/70 to-purple-950/20 border border-slate-800/80 backdrop-blur-md p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-slate-700 transition-colors duration-300 group gap-6"
            >
              <div className="max-w-md">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                  <Globe size={14} className="animate-pulse" /> Status: Architecture Online
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  Let's scope an end-to-end production build.
                </h3>
              </div>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-cyan-400 text-slate-950 font-medium px-6 py-3.5 rounded-2xl transition-all shadow-lg active:scale-95"
              >
                Initialize Connection <MessageSquare size={16} />
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* ─── GLOBAL FOOTER ─── */}
      <Footer />
    </main>
  );
}

export default Home;