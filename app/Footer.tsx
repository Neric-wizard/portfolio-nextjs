export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8 px-4 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg">
                NN
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                NericNigob
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              B-Tech Graduate from Cameroon passionate about building scalable applications with Java, Cloud technologies, and modern web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                About Me
              </a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Technical Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Featured Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:njeckneric507@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span>✉️</span>
                njeckneric507@gmail.com
              </a>
              <a href="https://linkedin.com/in/njeckneric" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span>💼</span>
                linkedin.com/in/njeckneric
              </a>
              <a href="https://github.com/Neric-wizard" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-2">
                <span>💻</span>
                github.com/Neric-wizard
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="mailto:njeckneric507@gmail.com"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
              >
                ✉️
              </a>
              <a href="https://linkedin.com/in/njeckneric" target="_blank"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
              >
                💼
              </a>
              <a href="https://github.com/Neric-wizard" target="_blank"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700"
              >
                💻
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 NericNigob. Built with Next.js, React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Neric Nigob</span>
          </p>
        </div>

      </div>
    </footer>
  );
}