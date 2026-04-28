import React, { useEffect, useRef } from 'react';
import { ArrowDown, Zap, Code2, Globe } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const count = 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.7 + 0.2,
      });
    }

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 1.25rem',
      maxWidth: '100%',
    }}>
      {/* Animated canvas background */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%', zIndex: 0,
      }} />

      {/* Radial glows */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '44rem', height: '44rem',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: '25rem', height: '25rem',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '54rem' }}>
        {/* Badge */}
        <div className="glass animate-float" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.4rem 1rem', borderRadius: '3rem',
          marginBottom: '1.5rem', fontSize: '0.75rem', fontWeight: 600,
          color: 'var(--secondary)', border: '1px solid rgba(6,182,212,0.3)',
        }}>
          <Zap size={12} fill="currentColor" />
          Fullstack Engineering · Design · Innovation
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          lineHeight: 1.1,
          marginBottom: '1.25rem',
          fontFamily: 'var(--font-heading)',
        }}>
          Secure by <span className="text-gradient">Design.</span><br />
          High-Fidelity by <span className="text-gradient">Nature.</span>
        </h1>

        <p style={{
          fontSize: '1rem', color: 'var(--text-muted)',
          maxWidth: '38rem', margin: '0 auto 2.25rem',
          lineHeight: 1.7, fontWeight: 400,
          letterSpacing: '0.01em'
        }}>
          SophiStic: A boutique studio engineering the next era of digital ecosystems.
          We bridge the gap between <strong>ironclad DevOps security</strong> and
          <strong>high-fidelity full-stack development</strong> to build robust,
          future-proof software from the surface to the core.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#portfolio" style={{
            padding: '0.8rem 2.25rem',
            borderRadius: '3rem',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            color: '#fff', fontWeight: 700, fontSize: '1rem',
            boxShadow: '0 0 1.8rem rgba(99,102,241,0.4)',
            transition: 'var(--transition-smooth)',
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            View Our Work
          </a>
          <a href="#about" className="glass" style={{
            padding: '0.8rem 2.25rem', borderRadius: '3rem',
            fontWeight: 600, fontSize: '1rem',
            border: '1px solid var(--glass-border)',
            transition: 'var(--transition-smooth)',
          }}
            onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseOut={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
          >
            Meet the Team
          </a>
        </div>

        {/* Floating badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '4rem', flexWrap: 'wrap' }}>
          {[
            { icon: <Code2 size={18} />, label: '50+ Projects' },
            { icon: <Globe size={18} />, label: 'Global Clients' },
            { icon: <Zap size={18} />, label: '5★ Delivery' },
          ].map(({ icon, label }) => (
            <div key={label} className="glass" style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.6rem 1.25rem', borderRadius: '3rem',
              fontSize: '0.9rem', color: 'var(--text-muted)',
            }}>
              <span style={{ color: 'var(--primary)' }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          marginTop: '3.75rem', display: 'flex', justifyContent: 'center',
          animation: 'float 2.5s ease-in-out infinite',
        }}>
          <a href="#about" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
