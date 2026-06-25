import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Writing scalable, clean and maintainable frontend code.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Modern UI",
      desc: "Creating premium interfaces with smooth animations.",
    },

    {
      icon: <FaRocket />,
      title: "Performance",
      desc: "Fast responsive websites optimized for user experience.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-purple-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 text-lg mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Passionate About
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {" "}Full Stack Developer
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            I’m a Full Stack developer focused on building modern,
            responsive and visually impressive websites using React,
            Tailwind CSS and animation libraries.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[320px] h-[320px] bg-cyan-500/20 blur-[120px]" />

            {/* Glass Image Card */}
            <div className="relative w-[320px] h-[420px] rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/10/About-Me-in-Resume-for-Freshers-1.jpg"
                alt="about"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Building Creative Digital
              <span className="text-cyan-400"> Experiences</span>
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              I enjoy creating advanced UI designs, animations and
              interactive web experiences that feel modern and premium.
              My goal is to make websites both beautiful and functional.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-lg">
                <h4 className="text-3xl font-bold text-cyan-400">
                  10+
                </h4>

                <p className="text-gray-400 mt-2 text-sm">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-lg">
                <h4 className="text-3xl font-bold text-cyan-400">
                  1+
                </h4>

                <p className="text-gray-400 mt-2 text-sm">
                  Years Learning
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-lg">
                <h4 className="text-3xl font-bold text-cyan-400">
                  100%
                </h4>

                <p className="text-gray-400 mt-2 text-sm">
                  Passion
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-4xl text-cyan-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
