import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <div className="reveal">
          <Founders />
        </div>
        <div className="reveal">
          <Services />
        </div>
        <div className="reveal">
          <Portfolio />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
