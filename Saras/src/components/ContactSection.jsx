import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  // ─── STATE ARCHITECTURE FOR DYNAMIC HANDLING ───
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // ─── HANDLER METHOD DIRECTLY LINKED TO RESEND ENDPOINT ───
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      alert("Please fill in all layout blocks.");
      return;
    }

    setIsSending(true);

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Update the fetch line inside handleSubmit:
const response = await fetch("http://localhost:5005/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Message dispatched smoothly to Saras!");
        // Clear input tracking configurations
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Server processed error. Check console configurations.");
        console.error("Resend error context:", result.error);
      }
    } catch (error) {
      console.error("Network runtime crash:", error);
      alert("Failed connecting to Backend execution context on port 5000.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 text-lg mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Let’s Build Something
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              {" "}Amazing
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Have a project idea or want to collaborate?
            Feel free to contact me anytime.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 mt-20">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              Let’s Talk About Your
              <span className="text-cyan-400"> Next Project</span>
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              I love building modern and animated frontend experiences
              using React, Tailwind CSS and advanced UI libraries.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                <div className="w-14 h-14 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>
                  <p className="text-gray-400">
                    saraspatil237@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-10 text-2xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-400 hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl"
          >
            {/* Name Input */}
            <div className="mb-6">
              <label className="block mb-3 text-sm text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block mb-3 text-sm text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="saraspatil237@gmail.com"
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                required
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label className="block mb-3 text-sm text-gray-400">
                Message
              </label>
              <textarea
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300 resize-none"
                required
              />
            </div>

            {/* Reactive Submission Button */}
            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={!isSending ? { scale: 1.03 } : {}}
              whileTap={!isSending ? { scale: 0.98 } : {}}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? "Processing Transmission... ⏳" : "Send Message 🚀"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;