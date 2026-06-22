import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Arsenal from './components/Arsenal.jsx'; 
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import About from './components/About.jsx'; 
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef(null);

  // 📟 TERMINAL BOOTUP CONTROL STATE ENGINE
  const [bootState, setBootState] = useState('intro');
  const [bootProgress, setBootProgress] = useState(0);

  // 🌊 GLOBAL MATRIX DIGITAL CODE STREAM ENGINE
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>//[]{}--++==";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const matrixColors = ['#2563eb', '#a855f7', '#00ffa3', '#00f3ff'];

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(3, 2, 6, 0.08)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + "px 'JetBrains Mono', monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillStyle = matrixColors[i % matrixColors.length];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(drawMatrix);
    };
    drawMatrix();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // 📟 CORE DATA LOADOUT SCHEDULER
  useEffect(() => {
    if (bootState !== 'booting') return;

    const interval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setBootState('ready');
          setTimeout(() => setBootState('complete'), 1500);
          return 100;
        }
        const nextStep = prev + Math.floor(Math.random() * 12) + 4;
        return nextStep > 100 ? 100 : nextStep;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [bootState]);

  // 🕹️ CUSTOM MOUSE POINTER TRACKING DYNAMICS
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.interactive-target')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* 🔮 ADVANCED LOADOUT CYBER STYLES PANEL */}
      <style>{`
        @keyframes cyberPowerFlash {
          0% { opacity: 0.15; text-shadow: 0 0 2px rgba(255,255,255,0.1); }
          5% { opacity: 0.8; text-shadow: 0 0 12px rgba(255,255,255,0.5); }
          10% { opacity: 0.4; }
          12% { opacity: 1; text-shadow: 0 0 18px rgba(0,243,255,0.8); }
          15% { opacity: 0.6; }
          22% { opacity: 1; text-shadow: 0 0 20px rgba(0,243,255,0.6); }
          78% { opacity: 1; }
          80% { opacity: 0.5; }
          82% { opacity: 1; }
          85% { opacity: 0.3; }
          88% { opacity: 1; }
        }
        
        /* 🌟 ROTATING COGNITIVE WAVES ANIMATION KEYS */
        @keyframes aiWaveRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 0.08; }
          50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.12); opacity: 0.18; }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 0.08; }
        }
        @keyframes aiPulseExpand {
          0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0.2; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }

        .boot-header-title {
          font-family: 'var(--sans)', sans-serif;
          font-size: 80px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -2px;
          line-height: 1.1; /* Explicit block boundary to eliminate compression */
          margin: 0;
          animation: cyberPowerFlash 5s infinite linear;
        }
        .boot-subtitle {
          font-family: 'var(--mono)', monospace;
          font-size: 16px;
          font-weight: 700;
          color: #00f3ff;
          letter-spacing: 5px;
          text-transform: uppercase;
          line-height: 1.2;
          margin: 0;
          animation: cyberPowerFlash 5s infinite linear;
          animation-delay: 0.15s;
        }
        
        /* Ambient Waves Structural Vectors */
        .ai-wave-orbit {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          border: 1px dashed rgba(168, 85, 247, 0.3); /* Purple ambient rim */
          pointer-events: none;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* SOLID LAYER 1: Background Canvas Matrix */}
      <canvas ref={canvasRef} style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* 🌟 POINTER CHASSIS - Escalated to zIndex 1000000 so you can see your cursor on the loader screen */}
      <div 
        className="custom-cursor" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          backgroundColor: isHovered ? '#a855f7' : '#00f3ff',
          boxShadow: isHovered ? '0 0 20px #a855f7' : '0 0 15px #00f3ff',
          zIndex: 1000000 
        }} 
      />
      <div 
        className="custom-cursor-ring" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.4 : 1})`,
          borderColor: isHovered ? '#00ffa3' : 'rgba(0, 243, 255, 0.4)',
          zIndex: 999999 
        }} 
      />

      {/* 📟 INITIALIZATION SYSTEM OVERLAY INTERFACE */}
      {bootState !== 'complete' && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          background: '#030206',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          pointerEvents: bootState === 'ready' ? 'none' : 'auto',
          opacity: bootState === 'ready' ? 0 : 1,
          transition: 'opacity 1.2s cubic-bezier(0.7, 0, 0.3, 1)'
        }}>
          
          {/* 🌟 FLOATING ROTATING AI WAVE RIGS - Fills empty background space */}
          <div className="ai-wave-orbit" style={{ width: '450px', height: '450px', animation: 'aiWaveRotate 25s infinite linear' }} />
          <div className="ai-wave-orbit" style={{ width: '650px', height: '650px', border: '1px solid rgba(0, 243, 255, 0.1)', strokeDasharray: '4 12', animation: 'aiWaveRotate 40s infinite linear reverse' }} />
          <div className="ai-wave-orbit" style={{ width: '550px', height: '550px', border: '1px solid rgba(255, 0, 170, 0.08)', animation: 'aiPulseExpand 6s infinite cubic-bezier(0.215, 0.610, 0.355, 1)' }} />

          {/* 🌟 UN-CONGESTED VERBATIM COLUMN CONTAINER */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px', /* Enforces safe, un-collapsible structural layout space */
            textAlign: 'center',
            zIndex: 10,
            marginBottom: '56px'
          }}>
            <h1 className="boot-header-title">RONIT RAO</h1>
            <div className="boot-subtitle">- AI & ML Engineer -</div>
          </div>

          {/* SYSTEM BUTTON ACTION SLOT */}
          <div style={{ zIndex: 10 }}>
            {bootState === 'intro' ? (
              <button
                onClick={() => setBootState('booting')}
                style={{
                  background: 'rgba(0, 243, 255, 0.02)',
                  border: '1px solid #00f3ff',
                  color: '#00f3ff',
                  fontFamily: 'var(--mono)',
                  fontSize: '13px',
                  fontWeight: '700',
                  padding: '18px 38px',
                  borderRadius: '6px',
                  letterSpacing: '2px',
                  cursor: 'none',
                  boxShadow: '0 0 20px rgba(0, 243, 255, 0.15)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 243, 255, 0.12)';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 243, 255, 0.4)';
                  e.target.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 243, 255, 0.02)';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.15)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                [ INITIALIZE_SYSTEM ]
              </button>
            ) : (
              /* TELEMETRY LOADING GRID MODULE */
              <div style={{ width: '300px', textAlign: 'center' }}>
                <div style={{
                  width: '100%',
                  height: '4px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${bootProgress}%`,
                    background: 'linear-gradient(90deg, #2563eb, #00f3ff)',
                    boxShadow: '0 0 12px #00f3ff',
                    transition: 'width 0.15s ease-out'
                  }} />
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: '#94a3b8', letterSpacing: '1px' }}>
                  DOWNLOADING_CORE_UPLINKS... <span style={{ color: '#00f3ff', fontWeight: 'bold' }}>{bootProgress}%</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 🌟 SOLID LAYER 2: Foreground Main Portfolio Channels */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%',
        paddingTop: '120px',
        opacity: (bootState === 'ready' || bootState === 'complete') ? 1 : 0,
        transform: (bootState === 'ready' || bootState === 'complete') ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 1s'
      }}>
        <Navbar />
        <div id="hero"><Hero /></div>
        <div id="arsenal"><Arsenal /></div> 
        <div id="projects"><Projects /></div>
        <div id="certifications"><Certifications /></div>
        <div id="about"><About /></div> 
        <div id="contact"><Contact /></div>
        <Footer />
      </div>

    </div>
  );
}

export default App;