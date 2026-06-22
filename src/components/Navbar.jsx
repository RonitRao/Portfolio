import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      /* 🔮 DETACHED FLOATING CORE: Lifts the bar off the top and turns it into a floating standalone panel */
      position: 'fixed',
      top: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 64px)',
      maxWidth: '1240px',
      boxSizing: 'border-box',
      
      /* Premium glassmorphism treatment layer matching lower console panels */
      backdropFilter: 'blur(20px) saturate(140%)',
      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      background: 'rgba(5, 4, 9, 0.75)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
      borderRadius: '14px',
      
      padding: '16px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 10000 /* Guarantees navigation safely floats above all cascading background code rain layers */
    }}>
      
      {/* 🌟 LOGO CHASSIS: Cyan and Blue arrow accents with premium text glowing structure */}
      <div style={{ 
        fontFamily: 'var(--mono)', 
        fontWeight: 'bold', 
        letterSpacing: '2px', 
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Left Arrow Bracket: Custom Cyan Glow */}
        <span style={{ color: '#00f3ff', textShadow: '0 0 10px rgba(0, 243, 255, 0.6)', marginRight: '6px' }}>&lt;</span>
        
        {/* Center Signature: High-Intensity Core Neon White Glow */}
        <span style={{ color: '#ffffff', textShadow: '0 0 15px rgba(255, 255, 255, 0.7), 0 0 25px rgba(255, 255, 255, 0.3)' }}>
          RONIT.AI
        </span>
        
        {/* Right Arrow Slash Bracket: Custom Tech Blue Glow */}
        <span style={{ color: '#2563eb', textShadow: '0 0 10px rgba(37, 99, 235, 0.6)', marginLeft: '6px' }}>/&gt;</span>
      </div>
      
      {/* 🌟 RE-MAPPED NAVIGATION HUB: Intuitive, descriptive path directories */}
      <div style={{ display: 'flex', gap: '28px', fontFamily: 'var(--mono)' }}>
        <a href="#hero" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', transition: 'all 0.3s ease' }} 
           onMouseEnter={(e) => { e.target.style.color = '#00ffa3'; e.target.style.textShadow = '0 0 8px rgba(0,255,163,0.4)'; }} 
           onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.textShadow = 'none'; }}>
          ./CORE
        </a>
        
        {/* Updated from ./MATRIX to transparent descriptor */}
        <a href="#arsenal" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', transition: 'all 0.3s ease' }} 
           onMouseEnter={(e) => { e.target.style.color = '#00f3ff'; e.target.style.textShadow = '0 0 8px rgba(0,243,255,0.4)'; }} 
           onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.textShadow = 'none'; }}>
          ./ARSENAL
        </a>
        
        {/* Updated from ./SYSTEMS to unambiguous project index string */}
        <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', transition: 'all 0.3s ease' }} 
           onMouseEnter={(e) => { e.target.style.color = '#a855f7'; e.target.style.textShadow = '0 0 8px rgba(168,85,247,0.4)'; }} 
           onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.textShadow = 'none'; }}>
          ./PROJECTS
        </a>
        
        {/* Updated from ./VECTORS to clear verification track identifier */}
        <a href="#certifications" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', transition: 'all 0.3s ease' }} 
           onMouseEnter={(e) => { e.target.style.color = '#ff9100'; e.target.style.textShadow = '0 0 8px rgba(255,145,0,0.4)'; }} 
           onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.textShadow = 'none'; }}>
          ./CREDENTIALS
        </a>
        
        <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', transition: 'all 0.3s ease' }} 
           onMouseEnter={(e) => { e.target.style.color = '#ffea00'; e.target.style.textShadow = '0 0 8px rgba(255,234,0,0.4)'; }} 
           onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.textShadow = 'none'; }}>
          ./ARCHITECT
        </a>
        
        <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', transition: 'all 0.3s ease' }} 
           onMouseEnter={(e) => { e.target.style.color = '#ff00aa'; e.target.style.textShadow = '0 0 8px rgba(255,0,170,0.4)'; }} 
           onMouseLeave={(e) => { e.target.style.color = '#94a3b8'; e.target.style.textShadow = 'none'; }}>
          ./CONNECT
        </a>
      </div>
    </nav>
  );
}