import React from 'react';
import { Github, Linkedin, Twitter, Terminal, Database, Cloud, Layers, Globe } from 'lucide-react';

const founders = [
  {
    name: 'Pelaiah',
    role: 'Security Architect & Full-Stack Engineer',
    bio: 'Specialist in backend systems, high-fidelity frontend, and automated cloud infrastructure. Dedicated to building secure, mission-critical digital ecosystems from the surface to the core.',
    skills: ['Node.js', 'React', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Rust', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
    glow: 'rgba(16,185,129,0.4)',
    icon: <Database size={36} />,
    socials: [
      { platform: 'github', url: 'https://github.com/Iampelaiah' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'portfolio', url: '#' }
    ]
  },
  {
    name: 'Claude',
    role: 'Full-Stack Logic & Systems Architect',
    bio: 'Expert in bridging the gap between legacy systems and modern high-fidelity interfaces. Specialist in complex data logic, database optimization, and scalable backend architectures.',
    skills: ['UX/UI Design', 'PostgreSQL', 'Python', 'JSON Schema', 'REST APIs', 'Legacy Migration', 'TypeScript', 'SQL'],
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
    glow: 'rgba(99,102,241,0.4)',
    icon: <Layers size={36} />,
    socials: [
      { platform: 'github', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
      { platform: 'portfolio', url: '#' }
    ]
  },
];

const Founders = () => {
  return (
    <section id="about" style={{ padding: '6.25rem 2.5rem', maxWidth: '75rem', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <p style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.2rem', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          The Founders
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
          Built by two engineers who{' '}
          <span className="text-gradient">care deeply</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '28.75rem', margin: '0 auto', lineHeight: 1.7, fontSize: '0.9rem' }}>
          We started SophiStic because we believe great software is a product of both technical mastery and thoughtful craftsmanship.
        </p>
      </div>

      {/* Founder Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(17.5rem, 1fr))', gap: '2rem' }}>
        {founders.map((founder) => (
          <div key={founder.name} className="glass-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute', top: '-3.75rem', right: '-3.75rem',
              width: '12.5rem', height: '12.5rem',
              background: `radial-gradient(circle, ${founder.glow} 0%, transparent 70%)`,
              pointerEvents: 'none',
            }} />

            {/* Avatar */}
            <div style={{
              width: '4.5rem', height: '4.5rem', borderRadius: '50%',
              background: founder.gradient,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.25rem', position: 'relative',
              boxShadow: `0 0 1.25rem ${founder.glow}`,
              fontSize: '1.4rem', fontWeight: 800, color: '#fff',
              fontFamily: 'var(--font-heading)',
            }}>
              {React.cloneElement(founder.icon, { size: 30 })}
            </div>

            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{founder.name}</h3>
            <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.85rem' }}>
              {founder.role}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              {founder.bio}
            </p>

            {/* Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
              {founder.skills.map(skill => (
                <span key={skill} style={{
                  padding: '0.2rem 0.6rem', borderRadius: '3rem',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '0.75rem', color: 'var(--text-muted)',
                  fontWeight: 500,
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.875rem' }}>
              {founder.socials.map((social, i) => {
                const Icon = {
                  github: Github,
                  linkedin: Linkedin,
                  twitter: Twitter,
                  portfolio: Globe
                }[social.platform];

                return (
                  <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                    width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', transition: 'var(--transition-smooth)',
                  }}
                    onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
