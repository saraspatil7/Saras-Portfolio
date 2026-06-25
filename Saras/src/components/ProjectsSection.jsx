import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Aarogya Sahayak",
      desc: "Aarogya Sahayak is an AI-powered healthcare web application that provides symptom analysis, medicine guidance, and chatbot-based health assistance through a modern and user-friendly interface..",
      image:"https://www.designveloper.com/wp-content/uploads/2020/07/benefits-of-app-based-healthcare-services-bg-1024x576.png",
      github: "/",
      live: "/",
    },

    {
      title: "E-Commerce Website",
      desc: "A modern E-Commerce web application that allows users to browse products, manage carts, place orders, and experience a fast, responsive, and user-friendly shopping interface..",
      image:
        "https://franticpro.com/resource/newHeader/images/mobile-app-development.png",
      github: "/",
      live: "/",
    },

    {
      title: "Nexus Academy",
      desc: "Nexus Academy is a modern educational web platform designed to provide interactive learning, course management, and a smooth user experience for students and learners.Interactive skill learning platform with modern dashboard UI and.",
      image:
        "https://i0.wp.com/airdropalert.com/wp-content/uploads/2025/02/Nexus-Network-Devnet.png?fit=2048%2C1301&quality=50&ssl=1",
      github: "/",
      live: "/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[140px]" />

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
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {" "}Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects built using React,
            Tailwind CSS and modern frontend technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[260px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-5">
                  
                  <a
                    href={project.github}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-xl hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm">
                    JavaScript
                  </span>

                  <span className="px-4 py-2 rounded-full bg-pink-400/10 border border-pink-400/20 text-pink-400 text-sm">
                    Supabase
                  </span>
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-cyan-400/30 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;