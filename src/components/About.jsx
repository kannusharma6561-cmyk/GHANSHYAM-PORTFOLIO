import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section fade-in">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I am a full-stack developer dedicated to building scalable web applications using MongoDB, Express.js, React, and Node.js.
          </p>
          <p>
            My structural programming workflow emphasizes clean component separation, modular backend routing architecture, dynamic client-side state handling, and efficient database designs.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Check out my repositories:</span>
            <a 
              href="https://github.com/kannusharma6561-cmyk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '8px 16px', fontSize: '0.9rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;