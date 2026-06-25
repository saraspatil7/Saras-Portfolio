import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-[99999]">
      
      <div className="flex flex-col items-center">
        
        {/* Animated Circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 rounded-full border-4 border-cyan-400 border-t-transparent"
        />

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: "reverse",
          }}
          className="mt-6 text-2xl font-bold tracking-widest"
        >
          LOADING...
        </motion.h1>
      </div>
    </div>
  );
}

export default Loader;