/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  GraduationCap, 
  User, 
  Cpu, 
  Globe,
  ChevronDown
} from "lucide-react";

const SectionTitle = ({ children, icon: Icon }: { children: ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-bold text-slate-800 tracking-tight">{children}</h2>
  </div>
);

const ProjectCard = ({ title, description, tags }: { title: string, description: string, tags: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
  >
    <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillBadge = ({ name }: { name: string, key?: string }) => (
  <span className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium shadow-sm hover:border-purple-300 hover:text-purple-600 transition-colors cursor-default">
    {name}
  </span>
);

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-200 selection:text-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            SANDHYA.
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-purple-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full">
              Aspiring AI Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
              Hi, I'm <span className="text-purple-600">Sandhya</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              BCA Student specializing in Artificial Intelligence. Passionate about building intelligent solutions and exploring the future of tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                View Projects <ChevronDown size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-purple-300 transition-all"
              >
                Let's Connect
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={User}>About Me</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a motivated BCA student with a deep-rooted interest in Artificial Intelligence, technology, and innovation. My journey in tech is driven by a constant curiosity to understand how things work and a desire to build tools that make a difference.
              </p>
              <p>
                Currently pursuing my Bachelor's degree, I focus on mastering the fundamentals of AI and Machine Learning while keeping up with the latest web development trends. I believe in a continuous learning mindset and aim to contribute to the evolving landscape of AI.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <GraduationCap className="text-purple-600" /> Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-slate-800">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-purple-700 font-medium">Specialization in AI</p>
                  <p className="text-slate-500 text-sm">Institution Name Placeholder • 2024 - Present</p>
                </div>
                <div className="pt-4 border-t border-purple-200">
                  <p className="text-sm text-slate-600 italic">"Focusing on data structures, algorithms, and AI foundations."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={Cpu}>Technical Skills</SectionTitle>
          <div className="grid gap-10">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'C', 'Java (Basic)', 'JavaScript'].map(skill => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">AI & Web Development</h3>
              <div className="flex flex-wrap gap-3">
                {['AI/ML Basics', 'HTML5', 'CSS3', 'React', 'Tailwind CSS'].map(skill => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'VS Code', 'GitHub', 'Problem Solving'].map(skill => <SkillBadge key={skill} name={skill} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={BrainCircuit}>Featured Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="AI Chatbot Assistant"
              description="A simple rule-based chatbot that can handle basic customer queries and provide information about services."
              tags={['Python', 'NLP Basics']}
            />
            <ProjectCard 
              title="Personal Portfolio Website"
              description="A modern, responsive portfolio built to showcase my skills and projects as a student."
              tags={['React', 'Tailwind CSS', 'Motion']}
            />
            <ProjectCard 
              title="Simple ML Model"
              description="A basic linear regression model to predict house prices based on area and location data."
              tags={['Python', 'Scikit-Learn', 'Pandas']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle icon={Mail}>Get In Touch</SectionTitle>
          <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="mailto:sandhyajangra2007@gmail.com" 
              className="flex items-center gap-3 text-lg font-bold text-slate-800 hover:text-purple-600 transition-colors"
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                <Mail size={24} />
              </div>
              sandhyajangra2007
            </a>
            <div className="flex gap-4">
              <a href="#" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-purple-300 transition-all text-slate-600 hover:text-purple-600">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-purple-300 transition-all text-slate-600 hover:text-purple-600">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Sandhya. Built with React & Tailwind.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <span className="flex items-center gap-2"><Globe size={14} /> Based in India</span>
            <span className="flex items-center gap-2"><Code2 size={14} /> AI Enthusiast</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
