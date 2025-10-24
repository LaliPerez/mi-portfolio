
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans leading-relaxed tracking-wide antialiased">
      <Header />
      <main>
        <Hero />
        <div id="skills" className="py-24 sm:py-32">
          <Skills />
        </div>
        <div id="certifications" className="py-24 sm:py-32 bg-gray-900/50">
           <Certifications />
        </div>
        <div id="projects" className="py-24 sm:py-32">
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
