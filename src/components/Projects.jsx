import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Book Library Application',
      description: 'Full-stack application engineered with React Router DOM for multi-tab UI navigation. Features custom server-side data models with array-of-objects structure, dynamic search filtering, JavaScript map methods, and dedicated API routing hooks.',
      tags: ['React', 'React Router DOM', 'JavaScript', 'Custom API', 'CSS Modules'],
      github: 'https://github.com/kannusharma6561-cmyk'
    }
  ];

  return (
    <section className="projects-section fade-in">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span className="tag" key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;