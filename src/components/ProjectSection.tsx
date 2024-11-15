import Image from 'next/image';
import '../styles/project.css';
const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading"> Some Of My Past Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <Image src="/project1.jpg" alt="Project 1" width={500} height={300} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">Project 1</h3>
              <p className="project-description">A project that demonstrates my skills in front-end development.</p>
            </div>
          </div>
          <div className="project-card">
            <Image src="/project2.jpg" alt="Project 2" width={500} height={300} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">Project 2</h3>
              <p className="project-description">A full-stack application I built using React, Node.js, and MongoDB.</p>
            </div>
          </div>
          <div className="project-card">
            <Image src="/project3.webp" alt="Project 3" width={500} height={300} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">Project 3</h3>
              <p className="project-description">A mobile-friendly responsive website to showcase my work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
