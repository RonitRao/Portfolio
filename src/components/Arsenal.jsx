import React, { useEffect, useState, useRef } from 'react';

export default function Arsenal() {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [eduVisible, setEduVisible] = useState(false);
  
  const skillsRef = useRef(null);
  const eduRef = useRef(null);

  // 📡 INDEPENDENT SCROLL DETECTORS
  useEffect(() => {
    const config = { threshold: 0.05, rootMargin: "0px 0px -40px 0px" };

    const skillsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSkillsVisible(true);
    }, config);

    const eduObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setEduVisible(true);
    }, config);

    if (skillsRef.current) skillsObserver.observe(skillsRef.current);
    if (eduRef.current) eduObserver.observe(eduRef.current);

    return () => {
      if (skillsRef.current) skillsObserver.unobserve(skillsRef.current);
      if (eduRef.current) eduObserver.unobserve(eduRef.current);
    };
  }, []);

  // 🛠️ INTEL CHANNELS DATA CORE
  const skillCategories = [
    {
      category: "PROGRAMMING_LANGUAGES",
      skills: ["Python", "Java", "JavaScript", "C Language", "SQL"],
      color: "#00ffa3"
    },
    {
      category: "WEB_TECHNOLOGIES",
      skills: ["React.js", "Node.js", "REST API", "Supabase"],
      color: "#00f3ff"
    },
    {
      category: "DATABASES",
      skills: ["MySQL", "PostgreSQL", "Firebase"],
      color: "#2563eb"
    },
    {
      category: "DATA_ANALYTICS",
      skills: ["Matplotlib", "R Language", "Pandas", "NumPy", "Data Visualisation"],
      color: "#a855f7"
    }
  ];

  return (
    <div style={{ width: '100%', background: 'transparent' }}>
      
      {/* 🧭 PART 1: THE CAPABILITIES MATRIX */}
      <section 
        ref={skillsRef}
        style={{
          paddingBlock: '100px 60px',
          width: '100%',
          textAlign: 'left',
          background: 'transparent'
        }}
      >
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--c-cyan)', letterSpacing: '3px', marginBottom: '10px', textShadow: '0 0 10px rgba(0, 243, 255, 0.4)' }}>
            02 // COMPONENT_MATRIX
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
            INTELLIGENCE_HARDWARE
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px', 
          width: '100%' 
        }}>
          {skillCategories.map((cat, index) => (
            <div 
              key={index}
              style={{
                background: 'rgba(5, 4, 9, 0.75)',
                backdropFilter: 'blur(12px) saturate(140%)',
                WebkitBackdropFilter: 'blur(12px) saturate(140%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '32px 28px',
                boxShadow: '0 25px 55px rgba(0, 0, 0, 0.65)',
                minHeight: '250px',
                cursor: 'none',

                /* Smooth Staged Entry Dynamics */
                opacity: skillsVisible ? 1 : 0,
                transform: skillsVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.97)',
                transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${index * 0.12}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.boxShadow = `0 30px 60px rgba(0, 0, 0, 0.85), 0 0 25px ${cat.color}25`;
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = '0 25px 55px rgba(0, 0, 0, 0.65)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--mono)', marginBottom: '24px', letterSpacing: '0.5px', textShadow: `0 0 10px ${cat.color}40` }}>
                &gt; {cat.category}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ fontSize: '15px', color: 'var(--text-secondary)', fontFamily: 'var(--sans)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: cat.color, fontFamily: 'var(--mono)', fontSize: '11px' }}>■</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎓 PART 2: THE ACADEMIC LEDGER (🌟 Custom Yellow & Orange Highlights System) */}
      <section 
        ref={eduRef}
        style={{
          paddingBlock: '60px 120px',
          width: '100%',
          textAlign: 'left',
          background: 'transparent'
        }}
      >
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
            SCHOLASTIC_LEDGER
          </h2>
        </div>

        {/* INTERACTIVE TIMELINE CONTAINER STACK */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
          
          {/* NODE 01: DIPLOMA TRACK MATRIX */}
          <div 
            style={{
              background: 'rgba(5, 4, 9, 0.75)',
              backdropFilter: 'blur(12px) saturate(140%)',
              WebkitBackdropFilter: 'blur(12px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '44px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)',
              width: '100%',
              boxSizing: 'border-box',
              position: 'relative',
              cursor: 'none',
              
              opacity: eduVisible ? 1 : 0,
              transform: eduVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff9100'; e.currentTarget.style.boxShadow = '0 30px 65px rgba(0,0,0,0.85), 0 0 30px rgba(255,145,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.65)'; }}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '15px', fontWeight: '700', color: '#ff9100', background: 'rgba(255, 145, 0, 0.04)', border: '1px solid rgba(255, 145, 0, 0.25)', padding: '10px 20px', borderRadius: '6px', whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
                2024 - PRESENT
              </div>

              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                  Diploma in Artificial Intelligence & Machine Learning
                </h3>
                {/* 🌟 Bright Yellow School Variable mapping */}
                <div style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: '#ffea00', marginBottom: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>
                  📍 Vidyavardhini's Bhausaheb Vartak Polytechnic [Vasai West]
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '28px', maxWidth: '900px' }}>
                  Deepening technical knowledge in computational engineering streams, low-level architecture mapping, and responsive system design solutions. Active across core startup initiatives and full-stack prototyping frameworks.
                </p>

                {/* DUAL SEGMENT PARAMETERS BREAKDOWN (FY & SY Segment Nodes) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '750px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px 20px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px', letterSpacing: '1px' }}>FY_DIPLOMA // 2024 - 2025</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ fontSize: '22px', fontWeight: '800', color: '#ff9100', fontFamily: 'var(--mono)' }}>82%</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#ffea00', background: 'rgba(255,234,0,0.06)', border: '1px solid rgba(255,234,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>[ STABLE_EXCELLENCE ]</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px 20px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px', letterSpacing: '1px' }}>SY_DIPLOMA // 2025 - 2026</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ fontSize: '22px', fontWeight: '800', color: '#ff9100', fontFamily: 'var(--mono)' }}>82%</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#ffea00', background: 'rgba(255,234,0,0.06)', border: '1px solid rgba(255,234,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>[ STABLE_EXCELLENCE ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NODE 02: SECONDARY SCHOOL MATRIC CORE */}
          <div 
            style={{
              background: 'rgba(5, 4, 9, 0.75)',
              backdropFilter: 'blur(12px) saturate(140%)',
              WebkitBackdropFilter: 'blur(12px) saturate(140%)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '44px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)',
              width: '100%',
              boxSizing: 'border-box',
              position: 'relative',
              cursor: 'none',
              
              opacity: eduVisible ? 1 : 0,
              transform: eduVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0.15s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff9100'; e.currentTarget.style.boxShadow = '0 30px 65px rgba(0,0,0,0.85), 0 0 30px rgba(255,145,0,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'; e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.65)'; }}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '15px', fontWeight: '700', color: '#ff9100', background: 'rgba(255, 145, 0, 0.04)', border: '1px solid rgba(255, 145, 0, 0.25)', padding: '10px 20px', borderRadius: '6px', whiteSpace: 'nowrap', letterSpacing: '0.5px' }}>
                2023 - 2024
              </div>

              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                  Secondary School Certificate (SSC)
                </h3>
                {/* 🌟 Bright Yellow School Variable mapping */}
                <div style={{ fontFamily: 'var(--mono)', fontSize: '14px', color: '#ffea00', marginBottom: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>
                  📍 St. Augustine's High School [Vasai West]
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '28px', maxWidth: '900px' }}>
                  Building foundational knowledge in core sciences, analytical mathematics, and multilingual communication frameworks. Active across co-curricular athletic initiatives, community service programs, and collaborative team environments.
                </p>

                {/* SCORE SUMMARY CHIP */}
                <div style={{ maxWidth: '360px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '16px 20px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px', letterSpacing: '1px' }}>CLASS_X_BOARD_MATRIX</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '24px', fontWeight: '900', color: '#ff9100', fontFamily: 'var(--mono)' }}>90%</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: '#00ffa3', background: 'rgba(0,255,163,0.05)', border: '1px solid rgba(0,255,163,0.2)', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                      🌟 [ EXCEPTIONAL_MATRIX ]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}