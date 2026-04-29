"use client";

import React from 'react';
import { Layers, Terminal, Briefcase, X } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Company: ['About Us', 'Our Process', 'Careers', 'Blog'],
    Services: ['Web Apps', 'Mobile Dev', 'APIs & Backend', 'DevOps'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '5rem 2.5rem 2.5rem',
      maxWidth: '100%',
      background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.04))',
    }}>
      <div style={{ maxWidth: '75rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(3, 1fr)', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <Layers size={28} color="#6366f1" />
              <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-1px' }}>
                SOPHI<span style={{ color: '#6366f1' }}>STIC</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.9rem', maxWidth: '17.5rem', marginBottom: '1.75rem' }}>
              A boutique software studio built by two engineers who care about craft, performance, and the details that matter.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[Terminal, Briefcase, X].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: '2.375rem', height: '2.375rem', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', transition: 'all 0.3s ease',
                }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.125rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                {group}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {items.map(item => (
                  <li key={item}>
                    <Link href="#" style={{
                      color: 'var(--text-muted)', fontSize: '0.9rem',
                      transition: 'color 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                    }}
                      onMouseOver={e => e.currentTarget.style.color = 'var(--text-main)'}
                      onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--card-border)',
          paddingTop: '2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {year} SophiStic. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            Built with care · Cape Town, ZA
            <span style={{
              display: 'inline-block', width: '0.5rem', height: '0.5rem', borderRadius: '50%',
              background: '#10b981', marginLeft: '0.25rem',
              animation: 'pulse-glow 2s infinite',
            }} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
