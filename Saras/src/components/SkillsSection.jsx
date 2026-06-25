import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const skills = [
    { name: "React", icon: <FaReact />, level: "90%", category: "Frontend", desc: "SPA Architecture" },
    { name: "JavaScript", icon: <FaJs />, level: "85%", category: "Frontend", desc: "ES6+ & Async Core" },
    { name: "HTML", icon: <FaHtml5 />, level: "95%", category: "Frontend", desc: "Semantic Structures" },
    { name: "CSS", icon: <FaCss3Alt />, level: "90%", category: "Frontend", desc: "Advanced Styling" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: "92%", category: "Frontend", desc: "Utility-First Design" },
    { name: "Node.js", icon: <FaNodeJs />, level: "70%", category: "Backend", desc: "RESTful APIs & Engine" },
    { name: "MongoDB", icon: <SiMongodb />, level: "75%", category: "Backend", desc: "NoSQL Architectures" },
    { name: "Firebase", icon: <SiFirebase />, level: "80%", category: "Backend", desc: "Realtime Systems" },
    { name: "Supabase", icon: <SiSupabase />, level: "78%", category: "Backend", desc: "PostgreSQL DB BaaS" },
    { name: "GitHub", icon: <FaGithub />, level: "85%", category: "Tools", desc: "Version Infrastructure" },
  ];

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* ─── AMBIENT RADIAL LIGHTNING BACKGROUNDS ─── */}
      <div className="absolute top-20 left-[-100px] w-[400px] h-[400px] bg-cyan-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-[400px] h-[400px] bg-purple-500/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── TYPOGRAPHY HEADER SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 font-mono tracking-widest text-sm uppercase mb-3">
            // Technical Stack
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Technologies I 
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text">
              {" "}Master
            </span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered with modern engineering frameworks, runtime environments, databases, and advanced fluid layout tools.
          </p>
        </motion.div>

        {/* ─── INTERACTIVE NEON CATEGORY FILTER SYSTEM ─── */}
        <div className="flex justify-center gap-3 mt-14 mb-16 flex-wrap">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden border ${
                activeTab === tab
                  ? "border-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                  : "border-white/10 text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* ─── FILTERABLE SKILLS GRID CANVAS ─── */}
        <motion.div 
          layout 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(34,211,238,0.15)",
                }}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-2xl hover:border-cyan-400/50 transition-colors duration-500 overflow-hidden"
              >
                {/* Micro Hover Flare effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Top Block Row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl text-cyan-400 bg-cyan-400/10 p-3.5 rounded-2xl border border-cyan-400/20 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-0.5 tracking-wider uppercase font-mono">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-cyan-400 font-black tracking-tighter text-lg">
                    {skill.level}
                  </span>
                </div>

                {/* Animated Smart Tech Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5 p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-white blur-[2px] opacity-70 animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ─── HORIZONTAL SCROLL DECORATIVE TECH FLOATS ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-wrap justify-center gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`float-${index}`}
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5 + (index % 3) * 0.4,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.2,
                borderColor: "rgba(34,211,238,0.5)",
                boxShadow: "0 0 25px rgba(34,211,238,0.2)",
              }}
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-3xl text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
            >
              {skill.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;