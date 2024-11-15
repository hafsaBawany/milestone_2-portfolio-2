'use client';

import Image from 'next/image';
import '../styles/hero.css'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-text">
          <Image
            src="/hack-pic.webp"
            alt="Hack Image"
            width={500}
            height={500}
            className="hero-image"
          />
          <h1 className="hero-title">HAFSA BAWANY</h1>
          <p className="hero-subtitle">
            A frontend developer. Scroll down to explore our projects and aspirations!
          </p>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
        </div>

        <div className="journey">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-text">
            From humble beginnings to now some incredible projects, my journey is defined by dedication and creativity.
          </p>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique lorem id elit viverra,
            eu auctor ex viverra.
          </p>
        </div>

        <div className="vision">
          <h2 className="section-title">Our Vision</h2>
          <p className="section-text">
            Looking to the future, we aim to develop solutions that make life easier, more connected, and more inspiring.
          </p>
          <p className="section-text">
            Quisque efficitur eros quis risus fermentum, vel vulputate est blandit. Integer ac ex ut erat tincidunt
            lacinia ac ac augue.
          </p>
        </div>

        <div className="projects">
          <h2 className="section-title">On Going Projects </h2>
          <p className="section-text">
            Here are some of the project that i'm currently working on :
          </p>
          <ul className="projects-list">
            <li className="project-item">
              <h3 className="project-title">Project 1</h3>
              <p>A web application for real-time collaboration and productivity.</p>
            </li>
            <li className="project-item">
              <h3 className="project-title">Project 2</h3>
              <p>An AI-powered tool for personalized recommendations and analytics.</p>
            </li>
            <li className="project-item">
              <h3 className="project-title">Project 3</h3>
              <p>A mobile app designed to simplify daily task management and scheduling.</p>
            </li>
          </ul>
        </div>
        

        <div className="contact">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-text">
            Interested in learning more about our work or collaborating with us? Contact us today!
          </p>
          <br />
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



