import React, { useState } from 'react';
import { ArrowUpRight, Globe, Github } from 'lucide-react';

const projects = [
  {
    title: 'FlowNexus',
    category: 'Infrastructure · DevOps',
    desc: 'An automated CI/CD pipeline engine designed for mission-critical ecosystems, prioritizing sub-second builds and immutable security.',
    tags: ['Rust', 'Docker', 'GitHub Actions', 'AWS'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    accent: '#10b981',
  },
  {
    title: 'Fidelity Pay',
    category: 'Fintech · Security',
    desc: 'High-fidelity payment gateway with military-grade encryption and a seamless, uncompromising checkout experience.',
    tags: ['Next.js', 'Go', 'Redis', 'PCI-DSS'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    accent: '#6366f1',
  },
  {
    title: 'Aesthetic Cloud',
    category: 'SaaS · UI/UX',
    desc: 'A cloud management dashboard that proves administrative tools can be beautiful, performant, and secure by design.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Azure'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #f43f5e 100%)',
    accent: '#f59e0b',
  },
  {
    title: 'SecureFlow OS',
    category: 'Cybersecurity · Systems',
    desc: 'An internal operating layer for distributed systems, ensuring zero-trust communication and automated threat response.',
    tags: ['Python', 'Kubernetes', 'eBPF', 'Linux'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    accent: '#a855f7',
  },
];

const Portfolio = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="portfolio" style={{ padding: '6.25rem 2.5rem', maxWidth: '75rem', margin: '0 auto' }}>
      <div style={{
        width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
        marginBottom: '6.25rem',
      }} />

      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <p style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.2rem', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          Our Work
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
          Projects we're <span className="text-gradient">proud of</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '28.75rem', margin: '0 auto', lineHeight: 1.7, fontSize: '0.9rem' }}>
          A curated selection of products and platforms we've built from scratch or helped scale.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(17.5rem, 1fr))',
        gap: '1.75rem',
      }}>
        {projects.map((project, i) => (
          <div
            key={project.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRadius: '1.5rem',
              overflow: 'hidden',
              background: 'var(--card-bg)',
              border: `1px solid ${hovered === i ? project.accent : 'var(--card-border)'}`,
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
              transform: hovered === i ? 'translateY(-0.375rem)' : 'translateY(0)',
              boxShadow: hovered === i ? `0 1.5rem 3rem -1.25rem ${project.accent}55` : 'none',
              cursor: 'default',
            }}
          >
            {/* Gradient banner */}
            <div style={{
              height: '6.25rem',
              background: project.gradient,
              position: 'relative',
              display: 'flex', alignItems: 'flex-end',
              padding: '0.75rem 1.25rem',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
              }} />
              <span style={{
                background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(0.5rem)',
                padding: '0.2rem 0.6rem', borderRadius: '3rem',
                fontSize: '0.65rem', fontWeight: 600, color: '#fff',
                letterSpacing: '0.06rem',
              }}>
                {project.category}
              </span>
            </div>

            <div style={{ padding: '1.25rem 1.25rem 1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{project.title}</h3>
                <ArrowUpRight size={18} style={{ color: hovered === i ? project.accent : 'var(--text-muted)', flexShrink: 0, transition: 'color 0.3s' }} />
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {project.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '0.25rem 0.75rem', borderRadius: '3rem',
                    background: `${project.accent}15`,
                    border: `1px solid ${project.accent}33`,
                    fontSize: '0.75rem', fontWeight: 600,
                    color: project.accent,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
