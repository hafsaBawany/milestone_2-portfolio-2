import '../styles/service.css';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-heading">My Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">Building fast and responsive websites using modern technologies.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">Creating clean and intuitive user interfaces for better user experience.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Consulting</h3>
            <p className="service-description">Providing advice and strategies to help improve your business online.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
