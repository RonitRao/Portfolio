import React, { useEffect, useState, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 📡 OPTIMIZED SCROLL TRACKER
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.05, 
        rootMargin: "0px 0px -40px 0px" 
      }
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

  const projectList = [
    {
      title: "S-RAY",
      status: "DEPLOYED // OPTIMIZING",
      description: "Advanced computational system leveraging Python and real-time computer vision processing arrays to trace, parse, and analyze dynamic spatial densities natively.",
      techStack: ["Python", "Computer Vision", "Real-Time Systems"],
      link: "https://sray.netlify.app/",
      accentColor: "#00ffa3"
    },
    {
      title: "AURA",
      status: "DEVELOPMENT // IN_PROGRESS",
      description: "High-fidelity digital e-commerce storefront structure engineered using a modular architecture concept, optimized for ultra-smooth layout responses and clean user shells.",
      techStack: ["React.js", "Vite", "UI/UX Prototyping"],
      link: "https://auraecomm.vercel.app/",
      accentColor: "#00f3ff"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      style={{
        paddingBlock: '120px 80px',
        width: '100%',
        textAlign: 'left',
        position: 'relative',
        background: 'transparent'
      }}
    >
      
      {/* HEADER SECTION LAYOUT */}
      <div style={{ marginBottom: '56px' }}>
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'var(--c-purple)',
          letterSpacing: '3px',
          marginBottom: '10px',
          textShadow: '0 0 10px rgba(168, 85, 247, 0.4)'
        }}>
          03 // SUB_SYSTEMS_GRID
        </div>
        <h2 style={{ 
          fontSize: '40px', 
          fontWeight: '900', 
          color: 'var(--text-primary)',
          letterSpacing: '-1px'
        }}>
          PROJECTS_LOG
        </h2>
      </div>

      {/* SYMMETRICAL PROJECT COCKPIT GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        width: '100%'
      }}>
        {projectList.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              
              /* 🔮 FROSTED GLASSMORPHISM PANELS */
              background: 'rgba(5, 4, 9, 0.75)',            
              backdropFilter: 'blur(12px) saturate(140%)',   
              WebkitBackdropFilter: 'blur(12px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',  
              borderRadius: '14px',
              padding: '40px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)',
              
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '290px',
              cursor: 'none',

              /* SLOW SLIDING POP-UP ENTRY SEQUENCE */
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.97)',
              transition: `opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s, 
                           transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s, 
                           border-color 0.3s ease, box-shadow 0.3s ease`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = project.accentColor;
              e.currentTarget.style.boxShadow = `0 30px 65px rgba(0, 0, 0, 0.85), 0 0 25px ${project.accentColor}25`;
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.65)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              {/* SYSTEM METRIC CHIP BADGE */}
              <div style={{
                display: 'inline-block',
                fontFamily: 'var(--mono)',
                fontSize: '10px',
                fontWeight: '700',
                color: project.accentColor,
                background: 'rgba(3, 2, 6, 0.9)',
                border: `1px solid ${project.accentColor}40`,
                padding: '4px 10px',
                borderRadius: '4px',
                letterSpacing: '1.5px',
                marginBottom: '24px'
              }}>
                {project.status}
              </div>

              {/* CRYSTAL READABLE GLOWING HEADLINES */}
              <h3 style={{
                fontSize: '30px',
                fontWeight: '800',
                color: 'var(--text-primary)',
                fontFamily: 'var(--mono)',
                marginBottom: '16px',
                letterSpacing: '-0.5px',
                textShadow: `0 0 12px ${project.accentColor}, 0 0 30px rgba(255, 255, 255, 0.2)`
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '15px',
                lineHeight: '1.65',
                color: 'var(--text-secondary)'
              }}>
                {project.description}
              </p>
            </div>

            {/* PLATFORM HARDWARE CODES */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '32px' }}>
              {/* 🌟 FIX: Correctly maps over the specific project's techStack array now */}
              {project.techStack.map((tech, tIdx) => (
                <span 
                  key={tIdx} 
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    background: 'rgba(3, 2, 6, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

          </a>
        ))}
      </div>
    </section>
  );
}