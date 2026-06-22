import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'rgba(5, 3, 10, 0.85)',
      backdropFilter: 'blur(16px) saturate(130%)',
      WebkitBackdropFilter: 'blur(16px) saturate(130%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '48px 40px',
      boxSizing: 'border-box',
      marginTop: '60px',
      position: 'relative',
      zIndex: 10
    }}>
      
      {/* UPPER PANEL: CONTROL STATUS AND CORE BRAND LOG */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '40px',
        width: '100%'
      }}>
        
        {/* Left Quadrant: Brand Signature Vectors */}
        <div style={{ textAlign: 'left' }}>
          <h4 style={{
            fontFamily: 'var(--sans)',
            fontSize: '24px',
            fontWeight: '900',
            color: '#ffffff',
            letterSpacing: '1px',
            margin: '0 0 6px 0'
          }}>
            RONIT.AI
          </h4>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.3)',
            letterSpacing: '1.5px'
          }}>
            SYSTEM VERSION 3.0 // BUILD_2026
          </div>
        </div>

        {/* Right Quadrant: Active Cockpit Terminal Feed */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: '#ff00aa',
          background: 'rgba(255, 0, 170, 0.03)',
          border: '1px solid rgba(255, 0, 170, 0.15)',
          padding: '8px 16px',
          borderRadius: '4px',
          letterSpacing: '1px',
          textShadow: '0 0 8px rgba(255, 0, 170, 0.3)'
        }}>
          [ MATRIX_STREAM // ENVIRONMENT_OPERATIONAL ]
        </div>

      </div>

      {/* HORIZONTAL TIMELINE DIVIDER */}
      <div style={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(to right, rgba(255,255,255,0.08) 70%, transparent)',
        marginBottom: '24px'
      }} />

      {/* LOWER PANEL: COPYRIGHT SUB-LEDGERS */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        width: '100%'
      }}>
        
        {/* Left Side: Consolidated Copyright Node */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'rgba(255, 255, 255, 0.3)',
          textAlign: 'left',
          letterSpacing: '0.5px'
        }}>
          © 2026 RONIT RAO. ALL CORE CHANNELS RESERVED.
        </div>

        {/* Right Side: Natural Vibe Coding Credit Disclaimer */}
        <div style={{
          fontFamily: 'var(--mono)',
          fontSize: '11px',
          color: 'rgba(255, 255, 255, 0.25)',
          textAlign: 'right',
          letterSpacing: '0.5px'
        }}>
          ENGINEERED WITH REACT & PURE DETERMINATION // NO TEMPLATES HARMED.
        </div>

      </div>

    </footer>
  );
}