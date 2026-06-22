import React, { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 📡 SCROLL INTERSECTION DETECTOR
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        paddingBlock: '100px 80px',
        width: '100%',
        textAlign: 'left',
        position: 'relative',
        background: 'transparent'
      }}
    >
      {/* 🔮 LOOPING PIXEL SYNTHESIS ENGINE (Infinite Waveform Pattern) */}
      <style>{`
        @keyframes laserScan {
          0% { top: 0%; opacity: 0.4; }
          50% { top: 100%; opacity: 1; filter: drop-shadow(0 0 10px #ff5500); }
          100% { top: 0%; opacity: 0.4; }
        }
        
        /* 🌟 INFINITE PIXEL SHIMMER: Scales the digital mask grid density continuously up and down */
        @keyframes continuousPixelWave {
          0% {
            -webkit-mask-size: 3px 3px;
            mask-size: 3px 3px;
          }
          50% {
            -webkit-mask-size: 16px 16px;
            mask-size: 16px 16px;
          }
          100% {
            -webkit-mask-size: 3px 3px;
            mask-size: 3px 3px;
          }
        }
        
        .cyber-scanner-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, transparent, #ff5500, #ffaa00, #ff5500, transparent);
          box-shadow: 0 0 15px #ff5500, 0 0 25px rgba(255, 85, 0, 0.8);
          animation: laserScan 3.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          z-index: 5;
        }
        
        .looping-pixel-layer {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%) contrast(105%);
          background: #050409;
          
          /* Sharp custom data grid pattern mask string */
          -webkit-mask-image: linear-gradient(to right, #000 80%, transparent 80%), 
                              linear-gradient(to bottom, #000 80%, transparent 80%);
          mask-image: linear-gradient(to right, #000 80%, transparent 80%), 
                      linear-gradient(to bottom, #000 80%, transparent 80%);
          -webkit-mask-repeat: repeat;
          mask-repeat: repeat;
          
          /* 🌟 Infinite looping execution thread makes the effect persistent */
          animation: continuousPixelWave 7s infinite ease-in-out;
        }
      `}</style>

      {/* SECTION HEADER BLOCK */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: '#ffea00',
          letterSpacing: '3px',
          marginBottom: '10px',
          textShadow: '0 0 10px rgba(255, 234, 0, 0.4)'
        }}>
          /// BIOMETRIC_SCAN // TERMINAL_IDENTITY
        </div>
        <h2 style={{ 
          fontSize: '40px', 
          fontWeight: '900', 
          color: 'var(--text-primary)',
          letterSpacing: '-1px'
        }}>
          THE_ARCHITECT
        </h2>
      </div>

      {/* DUAL-COLUMN LAYOUT CONSOLE */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: '64px',
        alignItems: 'center',
        width: '100%',
        
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.98)',
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        
        {/* LEFT COLUMN: NEON YELLOW HOUSING WITH DYNAMIC PORTRAIT */}
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          
          {/* HIGH-GLOW NEON YELLOW BOUNDARY */}
          <div style={{
            position: 'relative',
            width: '340px',
            height: '340px',
            borderRadius: '16px',
            padding: '10px',
            background: 'rgba(5, 4, 9, 0.6)',
            border: '2px solid #ffea00',
            boxShadow: '0 0 25px rgba(255, 234, 0, 0.35), inset 0 0 15px rgba(255, 234, 0, 0.15), 0 30px 60px rgba(0,0,0,0.85)'
          }}>
            
            {/* Corner Bracket Accents */}
            <div style={{ position: 'absolute', top: '-3px', left: '-3px', width: '24px', height: '24px', borderTop: '3px solid #ffea00', borderLeft: '3px solid #ffea00', borderRadius: '6px 0 0 0' }} />
            <div style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '24px', height: '24px', borderBottom: '3px solid #ffea00', borderRight: '3px solid #ffea00', borderRadius: '0 0 6px 0' }} />

            {/* Core Image Canvas Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              
              {/* ORANGE LASER SCAN LINE */}
              <div className="cyber-scanner-line" />

              {/* Portrait Canvas Image Node with looping pixel animation */}
              <img 
                src="/profile.jpg" 
                alt="Ronit Rao Portrait" 
                className="looping-pixel-layer"
              />
            </div>

            {/* REBUILT FLOATING STATUS BADGE */}
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              right: '24px',
              background: '#050409',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.95)',
              letterSpacing: '0.5px'
            }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#00ffa3', borderRadius: '50%', boxShadow: '0 0 8px #00ffa3', marginRight: '8px' }}></span>
              
              <span style={{ color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.6)', marginRight: '4px' }}>
                TRACKING STATUS :
              </span>
              
              <span style={{ color: '#00ffa3', textShadow: '0 0 8px rgba(0, 255, 163, 0.8)', fontWeight: '800' }}>
                ONLINE
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: CORE SYSTEMS TERMINAL */}
        <div style={{
          background: 'rgba(5, 4, 9, 0.75)',
          backdropFilter: 'blur(12px) saturate(140%)',
          WebkitBackdropFilter: 'blur(12px) saturate(140%)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '16px',
          padding: '44px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)'
        }}>
          
          <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' }}>
            &gt; INITIATING BIO_DUMP...
          </div>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.75',
            color: 'var(--text-primary)',
            marginBottom: '40px',
            fontFamily: 'var(--sans)',
            letterSpacing: '0.2px'
          }}>
            "A natural-vibe developer specializing in Artificial Intelligence and Machine Learning, currently focused on architecting autonomous AI agents. Operating at the convergence of clean structural logic and high-fidelity UI/UX prototyping, I enjoy building scalable, real-world solutions from zero to one. My passion lies in engineering intelligent frontend nodes that act as an intuitive, sleek bridge between complex data pipelines and the users who interact with them."
          </p>

          {/* METRIC CARD ATTRIBUTES HUB */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '32px',
            marginBottom: '40px'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px', letterSpacing: '1px' }}>CURRENT_FOCUS</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '700', color: 'var(--c-cyan)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🤖 AI Agents
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '16px 20px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px', letterSpacing: '1px' }}>COORDINATES</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: '16px', fontWeight: '700', color: '#ffea00', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📍 Mumbai, India
              </div>
            </div>
          </div>

          {/* INTERACTIVE LINK UPLINKS GRID */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            
            <a 
              href="https://www.linkedin.com/in/ronit-rao-9454703a3/" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'rgba(37, 99, 235, 0.06)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                color: '#ffffff',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                cursor: 'none'
              }}
              onMouseEnter={(e) => { e.target.style.background = 'rgba(37, 99, 235, 0.2)'; e.target.style.borderColor = '#2563eb'; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(37, 99, 235, 0.06)'; e.target.style.borderColor = 'rgba(37, 99, 235, 0.3)'; }}
            >
              [ LINKEDIN_UPLINK ]
            </a>

            <a 
              href="https://github.com/RonitRao?tab=repositories" 
              target="_blank" 
              rel="noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                cursor: 'none'
              }}
              onMouseEnter={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.08)'; e.target.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.02)'; e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
            >
              [ GITHUB_REPO ]
            </a>

            <a 
              href="mailto:ronitrao136@gmail.com" 
              style={{
                background: 'rgba(0, 255, 163, 0.04)',
                border: '1px solid rgba(0, 255, 163, 0.2)',
                color: '#ffffff',
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                fontWeight: '600',
                textDecoration: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                cursor: 'none'
              }}
              onMouseEnter={(e) => { e.target.style.background = 'rgba(0, 255, 163, 0.15)'; e.target.style.borderColor = '#00ffa3'; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(0, 255, 163, 0.04)'; e.target.style.borderColor = 'rgba(0, 255, 163, 0.2)'; }}
            >
              [ TRANSMIT_MAIL ]
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}