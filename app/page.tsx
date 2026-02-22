export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Njeck Neric</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            B-Tech Graduate | Java Developer | Cloud Engineer
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Passionate about building scalable applications with Java, Spring Boot, and Cloud technologies.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <p className="text-lg mb-4">
            I'm a B-Tech graduate from Cameroon with a strong passion for software development, 
            specializing in Java, Cloud technologies, and modern web development.
          </p>
          <p className="text-lg mb-4">
            My journey in tech has equipped me with hands-on experience in building full-stack 
            applications, implementing DevOps practices with Docker, and creating scalable solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard title="Languages" skills={["Java", "JavaScript", "TypeScript", "PHP", "SQL"]} />
            <SkillCard title="Frameworks" skills={["Spring Boot", "React", "Next.js", "Node.js"]} />
            <SkillCard title="Databases" skills={["MySQL", "PostgreSQL", "MongoDB", "Firebase"]} />
            <SkillCard title="DevOps" skills={["Docker", "AWS", "Azure", "Git"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <ContactLink href="mailto:njeckneric507@gmail.com" icon="✉️" label="Email" />
            <ContactLink href="https://linkedin.com/in/njeckneric" icon="💼" label="LinkedIn" />
            <ContactLink href="https://github.com/Neric-wizard" icon="💻" label="GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}

// Skill Card Component
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-4 text-blue-600">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-gray-200 px-2 py-1 rounded text-sm">{t}</span>
          ))}
        </div>
        {comingSoon ? (
          <span className="text-green-600 font-semibold">🚧 Coming Soon</span>
        ) : github ? (
          <a 
            href={github} 
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
    <a 
      href={href} 
      target="_blank"
      className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold">{label}</span>
    </a>
  );
}