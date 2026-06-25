import { motion } from "framer-motion";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    {
      icon: <FaHome />,
      link: "/home",
    },

    {
      icon: <FaUser />,
      link: "/about",
    },

    {
      icon: <FaCode />,
      link: "/skills",
    },

    {
      icon: <FaProjectDiagram />,
      link: "/projects",
    },

    {
      icon: <FaEnvelope />,
      link: "/contact",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999]"
    >
      {/* Dock */}
      <div className="flex items-center gap-4 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              to={item.link}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition duration-300 border ${
                location.pathname === item.link
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "bg-white/5 border-white/10 text-white hover:bg-cyan-400 hover:text-black"
              }`}
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;