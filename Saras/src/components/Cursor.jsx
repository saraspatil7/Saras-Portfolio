import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.1,
        }}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-cyan-400 z-[9999] pointer-events-none"
      />

      {/* Glow */}
      <motion.div
        animate={{
          x: position.x - 80,
          y: position.y - 80,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.25,
        }}
        className="fixed top-0 left-0 w-40 h-40 rounded-full bg-cyan-400/20 blur-3xl z-[9998] pointer-events-none"
      />
    </>
  );
}

export default Cursor;