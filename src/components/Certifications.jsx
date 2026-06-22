import React, { useEffect, useState, useRef } from 'react';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 📡 SCROLL DETECTOR NODE: Handles smooth staggered entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 📋 YOUR EXACT VALIDATED CREDENTIAL MATRIX
  const certList = [
    {
      title: "Intro to AI Agents and Agentic AI",
      issuer: "Udemy // 365 Careers",
      domain: "Agentic AI Architectures",
      tag: "UDEMY_NODE",
      accent: "#00f3ff" // Cyan
    },
    {
      title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
      issuer: "Udemy // 365 Careers",
      domain: "Full-Stack AI Deployment",
      tag: "UDEMY_NODE",
      accent: "#a855f7" // Purple
    },
    {
      title: "Zero to Hero in Cybersecurity and Ethical Hacking",
      issuer: "Udemy // Start-Tech Academy",
      domain: "Vulnerability Assessment & Pentesting",
      tag: "UDEMY_NODE",
      accent: "#00ffa3" // Green
    },
    {
      title: "EV Training Program Certification",
      issuer: "Standard Chartered [In-Person Institutional Node]",
      domain: "Electric Vehicle Systems & Tech Integration",
      tag: "INSTITUTIONAL_NODE",
      accent: "#2563eb" // Blue
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        paddingBlock: '100px 80px',
        width: '100%',
        textAlign: 'left',
        position: 'relative',
        background: 'transparent' /* Transparent layer lets global matrix rain stream cleanly */
      }}
    >
      
      {/* SECTION HEADER BLOCK */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--c-cyan)',
          letterSpacing: '3px',
          marginBottom: '10px',
          textShadow: '0 0 10px rgba(0, 243, 255, 0.4)'
        }}>
          04 // ARCHIVE_VALIDATION
        </div>
        <h2 style={{ 
          fontSize: '40px', 
          fontWeight: '900', 
          color: 'var(--text-primary)',
          letterSpacing: '-1px'
        }}>
          VALIDATED_CREDENTIALS
        </h2>
      </div>

      {/* SYMMETRICAL DUAL-COLUMN ACCOMPLISHMENT GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        width: '100%'
      }}>
        {certList.map((cert, index) => (
          <div 
            key={index}
            style={{
              /* 🔮 Frosted glassmorphism layer keeps text highly readable */
              background: 'rgba(5, 4, 9, 0.75)',
              backdropFilter: 'blur(12px) saturate(140%)',
              WebkitBackdropFilter: 'blur(12px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '14px',
              padding: '36px 40px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '180px',
              cursor: 'none',

              /* 🎬 Smooth Staggered Slide Pop-up Transitions */
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.97)',
              transition: `opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, 
                           transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, 
                           border-color 0.3s ease, box-shadow 0.3s ease`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cert.accent;
              e.currentTarget.style.boxShadow = `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 25px ${cert.accent}20`;
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              {/* SYSTEM TAG INDEX BADGE */}
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                fontWeight: '700',
                color: cert.accent,
                background: 'rgba(3, 2, 6, 0.8)',
                border: `1px solid ${cert.accent}30`,
                padding: '4px 10px',
                borderRadius: '4px',
                letterSpacing: '1.5px',
                marginBottom: '20px'
              }}>
                {cert.tag}
              </div>

              {/* CREDENTIAL COMPONENT TYPOGRAPHY */}
              <h3 style={{
                fontSize: '22px',
                fontWeight: '800',
                color: 'var(--text-primary)',
                fontFamily: 'var(--mono)',
                lineHeight: '1.3',
                marginBottom: '10px',
                letterSpacing: '-0.5px',
                textShadow: `0 0 10px ${cert.accent}30`
              }}>
                {cert.title}
              </h3>

              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: '15px',
                color: 'var(--text-secondary)',
                lineHeight: '1.5'
              }}>
                {cert.issuer}
              </div>
            </div>

            {/* DOMAIN METRIC VECTOR FOOTER */}
            <div style={{ 
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.04)',
              fontFamily: 'var(--mono)',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: cert.accent }}>//</span> FOCUS: {cert.domain}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}