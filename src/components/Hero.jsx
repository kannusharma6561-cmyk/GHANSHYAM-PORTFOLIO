import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero-section fade-in">
      <div className="container hero-content">
        <span className="hero-tag">MERN Stack Developer</span>
        <h1 className="hero-title">Ghanshyam Sharma</h1>
        <p className="hero-description">
          Building high-performance web applications with modern backend microservices and responsive React interfaces using the <strong>MERN Stack</strong>.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;