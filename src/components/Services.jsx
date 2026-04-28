import React, { useState } from 'react';
import { Code2, Server, Smartphone, Globe, Database, Palette, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Applications',
    desc: 'Full-featured, responsive web apps built with modern frameworks. From MVPs to enterprise-grade platforms.',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: <Server size={28} />,
    title: 'Backend & APIs',
    desc: 'Scalable REST and GraphQL APIs, microservices architecture, and robust data pipelines.',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Development',
    desc: 'Cross-platform mobile experiences using React Native that feel native on iOS and Android.',
    color: '#f43f5e',
    glow: 'rgba(244,63,94,0.3)',
  },
  {
    icon: <Database size={28} />,
    title: 'Database Design',
    desc: 'Optimized relational and NoSQL schemas, migrations, and data architecture for performance at scale.',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.3)',
  },
  {
    icon: <Palette size={28} />,
    title: 'UI/UX Design',
    desc: 'Design systems, wireframes, prototypes, and pixel-perfect implementations that delight users.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Secure Architecture',
    desc: 'Security is not an afterthought. We build secure-by-design systems with end-to-end encryption and robust access controls.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.3)',
  },
  {
    icon: <Zap size={28} />,
    title: 'High-Fidelity Engineering',
    desc: 'We deliver pixel-perfect interfaces and ultra-performant backends that maintain high fidelity from design to production.',
    color: '#eab308',
    glow: 'rgba(234,179,8,0.3)',
  },
  {
    icon: <Code2 size={28} />,
    title: 'Systems Consulting',
    desc: 'Deep-dive architectural reviews and technology strategy focused on long-term scalability and uncompromising security.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.3)',
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" style={{ padding: '6.25rem 2.5rem', maxWidth: '75rem', margin: '0 auto' }}>
      {/* Divider line */}
      <div style={{
        width: '100%', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
        marginBottom: '6.25rem',
      }} />

      <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <p style={{ color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.2rem', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
          What We Do
        </p>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', marginBottom: '0.75rem' }}>
          End-to-end <span className="text-gradient">engineering</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '28.75rem', margin: '0 auto', lineHeight: 1.7, fontSize: '0.9rem' }}>
          From early concept to production deployment, we handle every layer of the stack with the same level of care.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
        gap: '1.5rem',
      }}>
        {services.map((service, i) => (
          <div
            key={service.title}
            className="glass-card"
            style={{
              padding: '2rem',
              cursor: 'default',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              transform: hovered === i ? 'translateY(-0.375rem)' : 'translateY(0)',
              borderColor: hovered === i ? service.color : 'var(--card-border)',
              boxShadow: hovered === i ? `0 1.25rem 2.5rem -1.25rem ${service.glow}` : 'none',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{
              width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem',
              background: `${service.color}18`,
              border: `1px solid ${service.color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: service.color, marginBottom: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: hovered === i ? `0 0 1.25rem ${service.glow}` : 'none',
            }}>
              {React.cloneElement(service.icon, { size: 22 })}
            </div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.375rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
