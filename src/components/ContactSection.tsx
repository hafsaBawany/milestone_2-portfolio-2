import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-description">
          Feel free to reach out to me via the contact form below.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="email" placeholder="Your Email" className="contact-input" />
          <textarea placeholder="Your Message" className="contact-textarea"></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

