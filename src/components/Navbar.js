"use client";

import React from 'react';
import { Layers } from 'lucide-react';
import Link from 'next/link';

const navLinkStyle = {
  color: 'var(--text-muted)',
  fontSize: '0.95rem',
  fontWeight: 500,
  transition: 'color 0.3s ease',
  position: 'relative',
};

const Navbar = ({ scrolled }) => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled
        ? 'rgba(10, 10, 15, 0.92)'
        : 'rgba(10, 10, 15, 0.4)',
      backdropFilter: 'blur(1rem)',
      WebkitBackdropFilter: 'blur(1rem)',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.08)'
        : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      {/* Logo */}
      <Link href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <Layers size={28} color="#6366f1" />
        <span style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          letterSpacing: '-1px',
          color: 'var(--text-main)',
        }}>
          SOPHI<span className="animate-flow" style={{ 
            background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--primary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>STIC</span>
        </span>
      </Link>

      {/* Links */}
      <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { href: '#hero', label: 'Home' },
          { href: '#about', label: 'Founders' },
          { href: '#services', label: 'Services' },
          { href: '#portfolio', label: 'Work' },
        ].map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              style={navLinkStyle}
              onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#contact"
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 1.2rem rgba(99,102,241,0.3)',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 1.8rem rgba(99,102,241,0.5)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 1.2rem rgba(99,102,241,0.3)'; }}
          >
            Let&apos;s Talk
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
