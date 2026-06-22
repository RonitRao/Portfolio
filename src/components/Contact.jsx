import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 📡 SCROLL TRACKER
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ronitrao136@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      style={{
        paddingBlock: '100px 140px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        background: 'transparent'
      }}
    >
      
      {/* CORE LABELS ROW - Calibrated to Cyber Neon Pink */}
      <div style={{ marginBottom: '44px', textAlign: 'left' }}>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: '#ff00aa',
          letterSpacing: '3px',
          marginBottom: '10px',
          textShadow: '0 0 10px rgba(255, 0, 170, 0.4)'
        }}>
          05 // CONNECT_PROTOCOL // LINK_ESTABLISHMENT
        </div>
        <h2 style={{ 
          fontSize: '40px', 
          fontWeight: '900', 
          color: 'var(--text-primary)',
          letterSpacing: '-1px'
        }}>
          TERMINAL_UPLINK
        </h2>
      </div>

      {/* CENTRAL CONTACT PANEL HUB */}
      <div style={{
        background: 'rgba(5, 4, 9, 0.75)',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
        border: '1px solid rgba(255, 0, 170, 0.15)',
        borderRadius: '16px',
        padding: '64px 40px',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 0, 170, 0.03)',
        maxWidth: '850px',
        margin: '0 auto',
        boxSizing: 'border-box',
        
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.98)',
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        
        <h3 style={{
          fontSize: '36px',
          fontWeight: '900',
          color: '#ffffff',
          letterSpacing: '-0.5px',
          marginBottom: '18px',
          fontFamily: 'var(--sans)'
        }}>
          Ready to Build the Autonomous Next?
        </h3>

        <p style={{
          fontSize: '16px',
          lineHeight: '1.75',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 44px auto',
          fontFamily: 'var(--sans)'
        }}>
          Whether it's training modular AI models, fine-tuning agent loops, or engineering responsive front-end nodes—my pipeline is open. Let's synchronize scripts and build something legendary.
        </p>

        {/* INTERACTIVE ACTIONS AREA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
          
          {/* 🔴 ACTION BUTTON: Calibrated to Cyber Red with updated natural phrasing */}
          <button 
            onClick={handleCopyEmail}
            style={{
              background: copied ? 'rgba(0, 255, 163, 0.05)' : 'rgba(255, 51, 51, 0.03)',
              border: copied ? '1px solid #00ffa3' : '1px solid #ff3333',
              color: copied ? '#00ffa3' : '#ff3333',
              fontFamily: 'var(--mono)',
              fontSize: '13px',
              fontWeight: '700',
              padding: '18px 36px',
              borderRadius: '8px',
              letterSpacing: '1px',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: copied ? '0 0 30px rgba(0, 255, 163, 0.2)' : '0 0 20px rgba(255, 51, 51, 0.15)',
              cursor: 'none'
            }}
            onMouseEnter={(e) => {
              if(!copied) {
                e.target.style.background = 'rgba(255, 51, 51, 0.15)';
                e.target.style.boxShadow = '0 0 30px rgba(255, 51, 51, 0.4)';
                e.target.style.transform = 'scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              if(!copied) {
                e.target.style.background = 'rgba(255, 51, 51, 0.03)';
                e.target.style.boxShadow = '0 0 20px rgba(255, 51, 51, 0.15)';
                e.target.style.transform = 'scale(1)';
              }
            }}
          >
            {copied ? 'EMAIL COPIED! 📋' : '[ ESTABLISH_CONTACT ]'}
          </button>

          {/* VECTOR NETWORKS GRID */}
          <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            width: '100%'
          }}>
            
            {/* VECTOR NODE 01: GITHUB */}
            <a 
              href="https://github.com/RonitRao?tab=repositories" 
              target="_blank" 
              rel="noreferrer"
              aria-label="GitHub Repository Stream"
              style={{ display: 'inline-block', transition: 'all 0.3s ease', cursor: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.querySelector('svg').style.filter = 'drop-shadow(0 0 8px #ff00aa)'; e.currentTarget.querySelector('path').style.stroke = '#ff00aa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.querySelector('svg').style.filter = 'none'; e.currentTarget.querySelector('path').style.stroke = 'rgba(255,255,255,0.4)'; }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* VECTOR NODE 02: LINKEDIN */}
            <a 
              href="https://www.linkedin.com/in/ronit-rao-9454703a3/" 
              target="_blank" 
              rel="noreferrer"
              aria-label="LinkedIn Profile Uplink"
              style={{ display: 'inline-block', transition: 'all 0.3s ease', cursor: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.querySelector('svg').style.filter = 'drop-shadow(0 0 8px #ff00aa)'; e.currentTarget.querySelectorAll('path, circle').forEach(el => el.style.stroke = '#ff00aa'); }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.querySelector('svg').style.filter = 'none'; e.currentTarget.querySelectorAll('path, circle').forEach(el => el.style.stroke = 'rgba(255,255,255,0.4)'); }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9h4v12H2z" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* VECTOR NODE 03: MAIL */}
            <a 
              href="mailto:ronitrao136@gmail.com" 
              aria-label="Direct Mail Transmission"
              style={{ display: 'inline-block', transition: 'all 0.3s ease', cursor: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.querySelector('svg').style.filter = 'drop-shadow(0 0 8px #ff00aa)'; e.currentTarget.querySelector('path').style.stroke = '#ff00aa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.querySelector('svg').style.filter = 'none'; e.currentTarget.querySelector('path').style.stroke = 'rgba(255,255,255,0.4)'; }}
            >
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}