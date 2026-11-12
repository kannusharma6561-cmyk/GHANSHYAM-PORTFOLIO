import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Ghanshyam Sharma. Built with React & MERN Stack.</p>
      </div>
    </footer>
  );
};

export default Footer;