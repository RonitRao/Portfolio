import React, { useEffect, useRef, useState } from 'react';

const FULL_LOG_SEQUENCE = [
  "> INITIALIZING PROFILE SYSTEM...",
  "> LOADING PARAMETERS: RONIT_RAO.JSON",
  "> INSTANTIATING OBJECT: RE-INTERFACE",
  "> SUBJECT: RONIT RAO",
  "> ACADEMICS: VARTAK POLYTECHNIC [VASAI]",
  "> WORKSPACE ENVIRONMENT: FRONTEND_CORE",
  "> ACTIVE ENGINE FOCUS: AI AGENTS",
  "> STATUS: NODE_OPERATIONAL // OPEN_TO_BUILD"
];

export default function Hero() {
  const terminalRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [terminalLines, setTerminalLines] = useState([]);

  // 📟 SYNCHRONIZED TIMED SEQUENCE INJECTOR
  useEffect(() => {
    let currentLineIndex = 0;
    let typeInterval;

    // ⏱️ 1.8-Second delay buffer lets the main overlay drop completely before rendering text
    const syncTimeout = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (currentLineIndex < FULL_LOG_SEQUENCE.length) {
          const nextLine = FULL_LOG_SEQUENCE[currentLineIndex];
          setTerminalLines(prev => [...prev, nextLine]);
          currentLineIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 850);
    }, 1800);

    return () => {
      clearTimeout(syncTimeout);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, []);

  // 🕹️ REAL-TIME 3D PERSPECTIVE SPATIAL PARALLAX TILT
  const handleMouseMove = (e) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setTilt({
      x: (y / (rect.height / 2)) * -10,
      y: (x / (rect.width / 2)) * 10
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',     
      gap: '54px',                         
      alignItems: 'center',
      paddingBlock: '40px 60px',          
      minHeight: '75vh',
      perspective: '1000px',
      width: '100%'
    }}>

      {/* 🔮 CORE CYBER GLITCH & GLOW STYLE MATRIX */}
      <style>{`
        @keyframes cyberTextGlitch {
          0% { text-shadow: 0 0 15px rgba(255,255,255,0.6), 2px -1px 0 rgba(0,243,255,0.3), -2px 1px 0 rgba(255,0,170,0.3); }
          14% { text-shadow: 0 0 15px rgba(255,255,255,0.6), 2px -1px 0 rgba(0,243,255,0.3), -2px 1px 0 rgba(255,0,170,0.3); }
          15% { text-shadow: 2px 2px 0 rgba(0,243,255,0.7), -3px -2px 0 rgba(255,0,170,0.7), 0 0 20px rgba(255,255,255,0.8); }
          16% { text-shadow: -2px -1px 0 rgba(0,243,255,0.5), 2px 3px 0 rgba(255,0,170,0.5); }
          17% { text-shadow: 0 0 15px rgba(255,255,255,0.6); }
          55% { text-shadow: 0 0 15px rgba(255,255,255,0.6), 1px -2px 0 rgba(0,243,255,0.2), -1px 2px 0 rgba(255,0,170,0.2); }
          56% { transform: skew(3deg); text-shadow: -3px 0 0 #00f3ff, 3px 0 0 #ff00aa; }
          57% { transform: skew(-2deg); }
          58% { transform: skew(0deg); text-shadow: 0 0 15px rgba(255,255,255,0.6); }
          100% { text-shadow: 0 0 15px rgba(255,255,255,0.6), 2px -1px 0 rgba(0,243,255,0.3), -2px 1px 0 rgba(255,0,170,0.3); }
        }
        
        .glitch-glow-headline {
          font-size: '76px';
          font-weight: '900';
          line-height: '0.95';
          letter-spacing: '-3px';
          color: var(--text-primary);
          margin-bottom: '28px';
          animation: cyberTextGlitch 4.5s infinite linear;
        }
      `}</style>

      {/* LEFT PORT: BALANCED HUD TYPOGRAPHY */}
      <div style={{ textAlign: 'left', width: '100%' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(0, 243, 255, 0.04)',
          border: '1px solid rgba(0, 243, 255, 0.25)',
          padding: '8px 16px',
          borderRadius: '30px',
          fontSize: '11px',
          fontFamily: 'var(--mono)',
          color: 'var(--c-cyan)',
          letterSpacing: '1.5px',
          marginBottom: '28px'
        }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--c-cyan)', borderRadius: '50%', boxShadow: '0 0 10px var(--c-cyan)' }}></span> 
          SYSTEM ONLINE // 2026
        </div>

        {/* 🌟 UPGRADED CORE HEADLINE: Features active signal breakdown and ambient white aura glow */}
        <h1 className="glitch-glow-headline" style={{ fontSize: '76px', fontWeight: '900', lineHeight: '0.95', letterSpacing: '-3px', color: '#ffffff', marginBottom: '28px' }}>
          RONIT <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.85)', filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>RAO</span>
        </h1>

        <p style={{ 
          fontSize: '20px', 
          lineHeight: '1.6', 
          color: 'var(--text-secondary)', 
          marginBottom: '44px', 
          width: '100%',
          textShadow: '0 0 12px rgba(148, 163, 184, 0.35)' 
        }}>
          Architecting sleek, interactive gateways for autonomous systems. Developing at the convergence of spatial data tracking and intelligent frontend nodes.
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#projects" style={{
            background: 'var(--text-primary)', color: '#030206', textDecoration: 'none',
            padding: '16px 32px', borderRadius: '6px', fontWeight: '600', fontSize: '13px',
            letterSpacing: '0.5px', transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0,243,255,0.15)'
          }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
            INIT_PROJECTS →
          </a>
          <a href="#contact" style={{
            background: 'rgba(0, 243, 255, 0.02)', color: 'var(--text-primary)', border: '1px solid rgba(0, 243, 255, 0.25)',
            textDecoration: 'none', padding: '16px 32px', borderRadius: '6px', fontWeight: '600', fontSize: '13px',
            letterSpacing: '0.5px', transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => { e.target.style.background = 'rgba(0, 243, 255, 0.1)'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.target.style.background = 'rgba(0, 243, 255, 0.02)'; e.target.style.transform = 'scale(1)'; }}>
            SYSTEMS_LOG
          </a>
        </div>
      </div>

      {/* RIGHT PORT: SPATIAL TERMINAL NODE */}
      <div 
        ref={terminalRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: '#050409',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          borderRadius: '10px',
          padding: '28px',
          boxShadow: '0 30px 70px rgba(0,0,0,0.95), 0 0 35px rgba(168, 85, 247, 0.2)',
          minHeight: '340px',
          fontFamily: 'var(--mono)',
          textAlign: 'left',
          position: 'relative',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
          width: '100%',
          maxWidth: '560px',        
          justifySelf: 'end'        
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '14px', marginBottom: '18px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }}></span>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#00ffa3' }}></span>
          </div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>
            user@ronit-ai:~
          </div>
        </div>

        <div style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-primary)' }}>
          {terminalLines.map((line, idx) => {
            if (!line || typeof line !== 'string') return null;

            let currentLineColor = 'var(--text-primary)';
            if (line.includes('VARTAK')) currentLineColor = 'var(--c-blue)';
            if (line.includes('AI AGENTS')) currentLineColor = 'var(--c-cyan)';
            if (line.includes('NODE_OPERATIONAL')) currentLineColor = 'var(--c-green)';
            
            return (
              <div key={idx} style={{ color: currentLineColor, letterSpacing: '0.5px' }}>
                {line}
              </div>
            );
          })}
          <span className="terminal-caret"></span>
        </div>
      </div>

    </section>
  );
}