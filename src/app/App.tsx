import { useState } from 'react';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { MouseFollower } from './components/MouseFollower';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <MouseFollower />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills" className="py-32">
          <Skills />
        </section>
        
        <section id="projects" className="py-32">
          <Projects />
        </section>
        
        <section id="certifications" className="py-32">
          <Certifications />
        </section>
        
        <section id="education" className="py-32">
          <Education />
        </section>
        
        <section id="contact" className="py-32">
          <Contact />
        </section>
      </main>
      
      <footer className="relative z-10 border-t border-zinc-800/50 backdrop-blur-sm py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-500">
          <p>© 2026 포트폴리오. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
}