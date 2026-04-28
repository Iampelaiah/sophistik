"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Founders from '../components/Founders';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        
        <ScrollReveal>
          <Founders />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
