"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        
        {/* Background glowing blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <motion.div
          className="text-center px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300">Neric Nigob</span>
          </h1>
          <FadeText />
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Passionate about building scalable applications with Java, Spring Boot, and Cloud technologies.
          </p>
          <div className="flex gap-4 justify-center">
            
             <a href="#projects"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View My Work
            </a>
            
              <a href="#contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a B-Tech graduate from Cameroon with a strong passion for software development,
                specializing in Java, Cloud technologies, and modern web development.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech has equipped me with hands-on experience in building full-stack
                applications, implementing DevOps practices with Docker, and creating scalable solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl text-center border border-blue-100 dark:border-gray-700">
                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">2+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Built</p>
              </div>
              <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-2xl text-center border border-purple-100 dark:border-gray-700">
                <p className="text-3xl font-black text-purple-600 dark:text-purple-400">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies</p>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-800 p-4 rounded-2xl text-center border border-indigo-100 dark:border-gray-700">
                <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400">B-Tech</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Degree</p>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-2xl text-center border border-blue-100 dark:border-gray-700">
                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">🇨🇲</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Cameroon</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Languages" emoji="💻" skills={["Java", "JavaScript", "TypeScript", "PHP", "SQL", "Python"]} />
            <SkillCard title="Frameworks" emoji="⚡" skills={["Spring Boot", "React", "Next.js", "Node.js"]} />
            <SkillCard title="Databases" emoji="🗄️" skills={["MySQL", "PostgreSQL", "MongoDB", "Firebase"]} />
            <SkillCard title="DevOps" emoji="🚀" skills={["Docker", "AWS", "Azure", "Git"]} />
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-4 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Course Registration System"
              description="Full-stack web application with Docker containerization, secure authentication, and real-time course management."
              tech={["PHP", "MySQL", "Docker", "JavaScript"]}
              github="https://github.com/Neric-wizard/course-registration-system"
            />
            <ProjectCard
              title="Java Spring Boot API"
              description="RESTful API with JWT authentication, Swagger documentation, and MySQL database integration."
              tech={["Java", "Spring Boot", "MySQL", "JWT"]}
              comingSoon
            />
            <ProjectCard
              title="Cloud Deployment"
              description="Microservices deployment on AWS with CI/CD pipeline and monitoring."
              tech={["AWS", "Docker", "Kubernetes", "CI/CD"]}
              comingSoon
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg mb-8 dark:text-gray-300">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="max-w-lg mx-auto text-left"
          >
            <input type="hidden" name="access_key" value="e68415fb-4717-4653-a792-1e290301e04c" />

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 border border-gray-200 dark:border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Send Message 🚀
            </button>
          </form>

          {/* Social Links */}
          <div className="flex gap-6 justify-center flex-wrap mt-10">
            <ContactLink href="mailto:njeckneric507@gmail.com" icon="✉️" label="Email" />
            <ContactLink href="https://linkedin.com/in/njeckneric" icon="💼" label="LinkedIn" />
            <ContactLink href="https://github.com/Neric-wizard" icon="💻" label="GitHub" />
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}

// Fade Text Component
function FadeText() {
  const titles = [
    "B-Tech Graduate 🎓",
    "Java Developer ☕",
    "Cloud Engineer ☁️",
    "Full Stack Developer 💻",
  ];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="text-xl md:text-2xl mb-6 font-medium text-blue-100 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {titles[index]}
    </p>
  );
}

// Skill Card Component
function SkillCard({ title, emoji, skills }: { title: string; emoji: string; skills: string[] }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{emoji}</span>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  title,
  description,
  tech,
  github,
  comingSoon
}: {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  comingSoon?: boolean;
}) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-8xl font-black">{title.charAt(0)}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-gray-200 dark:bg-gray-600 dark:text-gray-200 px-2 py-1 rounded text-sm">{t}</span>
          ))}
        </div>
        {comingSoon ? (
          <span className="text-green-600 font-semibold">🚧 Coming Soon</span>
        ) : github ? (
          
           <a href={github}
            target="_blank"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Code →
          </a>
        ) : null}
      </div>
    </div>
  );
}

// Contact Link Component
function ContactLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    
      <a href={href}
      target="_blank"
      className="flex items-center gap-2 bg-white dark:bg-gray-700 dark:text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold">{label}</span>
    </a>
  );
}