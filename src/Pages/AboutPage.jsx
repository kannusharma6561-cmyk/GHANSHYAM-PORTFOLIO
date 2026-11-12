import React from 'react';
import About from '../components/About';
import Skills from '../components/Skills';

const AboutPage = () => {
  return (
    <main style={{ minHeight: '80vh', paddingTop: '40px' }}>
      <About />
      <Skills />
    </main>
  );
};

export default AboutPage;