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

  // 📟 BOOT STATE ENGINE: Stays active across browser mount cycles
  const [bootState, setBootState] = useState('intro');
  const [bootProgress, setBootProgress] = useState(0);
  const [sparks, setSparks] = useState([]);

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
          setBootState('ready'); // Triggers the fading phase
          return 100;
        }
        const nextStep = prev + Math.floor(Math.random() * 12) + 5;
        return nextStep > 100 ? 100 : nextStep;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [bootState]);

  // 🕹️ HIGH-PERFORMANCE MOUSE MOTION & SPARK GENERATION TRACKER
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const newSparks = Array.from({ length: 3 }).map(() => {
        const isYellow = Math.random() > 0.4;
        return {
          id: Math.random() + e.clientX + e.clientY,
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 7,
          vy: (Math.random() - 0.5) * 7 - (Math.random() * 2), 
          size: Math.random() * 7 + 4, 
          color: isYellow 
            ? `rgba(${230 + Math.floor(Math.random() * 25)}, ${215 + Math.floor(Math.random() * 40)}, ${50 + Math.floor(Math.random() * 50)}, ${Math.random() * 0.4 + 0.6})`
            : `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 20
        };
      });

      setSparks((prev) => [...prev, ...newSparks].slice(-45)); 
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

  // ⚡ SPARK PHYSICS FRAME LOOP
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setSparks((prev) =>
        prev
          .map((spark) => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy,
            vy: spark.vy + 0.15, 
            size: spark.size * 0.88, 
            rotation: spark.rotation + spark.rotationSpeed
          }))
          .filter((spark) => spark.size > 0.8) 
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [sparks]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
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
          line-height: 1.1;
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
        .ai-wave-orbit {
          position: absolute;
          top: 50%; left: 50%;
          border-radius: 50%;
          border: 1px dashed rgba(168, 85, 247, 0.3);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        body, html, a, button, select, input {
          cursor: none !important;
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

      {/* THE ELECTRIC FIELD LAYER */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1000001 }}>
        {sparks.map((spark) => (
          <div
            key={spark.id}
            style={{
              position: 'absolute',
              left: `${spark.x}px`,
              top: `${spark.y}px`,
              width: `${spark.size}px`,
              height: `${spark.size}px`,
              background: spark.color,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              transform: `translate(-50%, -50%) rotate(${spark.rotation}deg)`,
              filter: 'drop-shadow(0 0 6px rgba(255,245,150,0.8))',
              opacity: spark.size > 2 ? 1 : spark.size
            }}
          />
        ))}
      </div>

      {/* 🎯 CORE NEAT MOUSE POINTER DOT */}
      <div 
        style={{ 
          position: 'fixed',
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '10px' : '6px', 
          height: isHovered ? '10px' : '6px', 
          backgroundColor: isHovered ? '#ffffff' : '#fffb00',
          boxShadow: isHovered ? '0 0 15px #ffffff, 0 0 25px #00f3ff' : '0 0 10px #ffea00, 0 0 20px #ffffff',
          borderRadius: '50%',
          zIndex: 1000002,
          pointerEvents: 'none',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s'
        }} 
      />

      {/* 📟 INITIALIZATION OVERLAY - Retains pointerEvents matching active state configs */}
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
        
        <div className="ai-wave-orbit" style={{ width: '450px', height: '450px', animation: 'aiWaveRotate 25s infinite linear' }} />
        <div className="ai-wave-orbit" style={{ width: '650px', height: '650px', border: '1px solid rgba(0, 243, 255, 0.1)', strokeDasharray: '4 12', animation: 'aiWaveRotate 40s infinite linear reverse' }} />
        <div className="ai-wave-orbit" style={{ width: '550px', height: '550px', border: '1px solid rgba(255, 0, 170, 0.08)', animation: 'aiPulseExpand 6s infinite cubic-bezier(0.215, 0.610, 0.355, 1)' }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center',
          zIndex: 10,
          marginBottom: '56px'
        }}>
          <h1 className="boot-header-title">RONIT RAO</h1>
          <div className="boot-subtitle">- AI & ML Engineer -</div>
        </div>

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

      {/* 🌟 MAIN PORTFOLIO LAYER */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%',
        opacity: bootState === 'ready' ? 1 : 0,
        transform: bootState === 'ready' ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
      }}>
        
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          zIndex: 9999, 
          pointerEvents: 'auto'
        }}>
          <Navbar />
        </div>

        <div style={{ paddingTop: '120px', width: '100%' }}>
          {/* We pass the current bootState down as a prop so the Hero knows exactly when to start typing */}
          <div id="hero"><Hero bootState={bootState} /></div>
          <div id="arsenal"><Arsenal /></div> 
          <div id="projects"><Projects /></div>
          <div id="certifications"><Certifications /></div>
          <div id="about"><About /></div> 
          <div id="contact"><Contact /></div>
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;