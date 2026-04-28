"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder submit
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.875rem',
    padding: '0.875rem 1.125rem',
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ padding: '6.25rem 2.5rem', maxWidth: '75rem', margin: '0 auto' }}>
      <div style={{
        width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
        marginBottom: '6.25rem',
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18.75rem, 1fr))', gap: '3.75rem', alignItems: 'center' }}>
        {/* Left: Info */}
        <div>
          <p style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.2rem', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
            Get In Touch
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
            Let's define the <span className="text-gradient">future of flow</span> together
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.875rem', fontSize: '0.9rem' }}>
            Whether you have a project in mind, want to explore a collaboration, or just want to talk tech — our inbox is always open.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: <Mail size={20} />, label: 'hello@sophistic.dev' },
              { icon: <MapPin size={20} />, label: 'Cape Town, South Africa · Remote Worldwide' },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)', flexShrink: 0,
                }}>
                  {icon}
                </div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
            marginTop: '2.5rem', padding: '0.75rem 1.5rem', borderRadius: '3rem',
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
          }}>
            <span style={{
              width: '0.5rem', height: '0.5rem', borderRadius: '50%',
              background: '#10b981',
              animation: 'pulse-glow 2s infinite',
              display: 'inline-block',
            }} />
            <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>
              Available for new projects
            </span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
              <Sparkles size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Message sent!</h3>
              <p style={{ color: 'var(--text-muted)' }}>We'll be in touch very soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '7.5rem' }}
                  onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <button
                type="submit"
                id="contact-submit"
                style={{
                  padding: '0.95rem 2rem',
                  borderRadius: '0.875rem',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  color: '#fff', fontWeight: 700, fontSize: '1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem',
                  boxShadow: '0 0 1.875rem rgba(99,102,241,0.3)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 0 2.5rem rgba(99,102,241,0.5)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 1.875rem rgba(99,102,241,0.3)'; }}
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
