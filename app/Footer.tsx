export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg">
              NN
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NericNigob
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition font-medium">About</a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition font-medium">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition font-medium">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition font-medium">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            
             <a href="mailto:njeckneric507@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ✉️
            </a>
            
             <a href="https://linkedin.com/in/njeckneric"
              target="_blank"
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              💼
            </a>
            
              <a href="https://github.com/Neric-wizard"
              target="_blank"
              className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              💻
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 NericNigob. Built with Next.js, React & Tailwind CSS.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Developed by <span className="text-blue-400 font-semibold">Neric Nigob</span>
          </p>
        </div>

      </div>
    </footer>
  );
}