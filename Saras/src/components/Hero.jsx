import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28"
    >
      {/* ─── BACKGROUND AMBIENT GLOWS ─── */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-cyan-500/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-purple-500/20 blur-[130px] pointer-events-none" />

      {/* ─── TECHNICAL CYBER GRID BACKDROP ─── */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* ─── FLOATING DIGITAL PARTICLES (CRAZY DECORATIVE EFFECT) ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1.5 h-1.5 bg-cyan-400/50 rounded-full blur-[1px]"
            style={{
              top: `${20 + i * 12}%`,
              left: `${15 + i * 14}%`,
            }}
          />
        ))}
      </div>

      {/* ─── MAIN CONTENT ARCHITECTURE ─── */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT COLUMN: HERO INTRO TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Intro Badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-4"
          >
            // Welcome to my terminal_
          </motion.p>

          {/* Main Typography Header */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
          >
            Saras Patil
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
              Full Stack Developer
            </span>
          </motion.h1>

          {/* Core Biography / Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-lg mt-8 leading-relaxed max-w-2xl font-normal"
          >
            I am a passionate Full Stack Developer and AI Enthusiast from Saphale.
            I love building modern websites, AI-powered applications, and creative digital projects that solve real-world problems.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            {/* Primary Action */}
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] transition duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            {/* Secondary Action */}
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-400/30 transition duration-300 shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Interaction Anchors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-5 mt-12"
          >
            {[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -6,
                  borderColor: "rgba(34,211,238,0.4)",
                  boxShadow: "0 0 20px rgba(34,211,238,0.2)"
                }}
                className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-2xl text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: PREMIUM FLOATING CARD ELEMENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          {/* Behind-Card Radial Ambient Glow */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-400/20 blur-[120px] pointer-events-none" />

          {/* Floating Canvas Element */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.04,
              rotate: 1.5,
            }}
            className="relative w-[320px] md:w-[380px] h-[420px] md:h-[500px] rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group cursor-pointer"
          >
            {/* Visual Media Graphic */}
            <div className="w-full h-full absolute inset-0 z-0 overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Saras Patil Profile"
                className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-110"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              {/* Dynamic Scanner bar */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-cyan-400/70 shadow-[0_0_10px_#22d3ee] opacity-0 group-hover:opacity-100 group-hover:top-[100%] transition-all duration-[2500ms] ease-linear" />
            </div>

            {/* Absolute Text Metadata Overlay */}
            <div className="absolute bottom-8 left-6 z-10">
              <h2 className="text-3xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                Saras Patil
              </h2>
              <p className="text-gray-300 mt-2 text-sm font-medium tracking-wide">
               •JavaScript •Flask •React •Supabase  • AI Projects
              </p>
            </div>

            {/* Ambient System Badge Status */}
            <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/30 backdrop-blur-xl text-cyan-300 text-sm font-mono font-medium z-10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              ● Available For Work
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

export default Hero;