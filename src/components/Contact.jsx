import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact section-spacing">
      <div className="contact-container">
        <p className="section-label">Contact</p>

        <h2>Get in touch</h2>

        <p className="contact-text">
          I am currently a student, but actively building and improving my skills. 
            Feel free to reach out if you want to connect or see what I am working on.
        </p>

        <div className="contact-links">
          <a href="mailto:Hilalozkan47@icloud.com">Hilalozkan47@icloud.com</a>

          <a
            href="https://github.com/0Hilal0"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hilal%C3%B6zkan/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        <p className="contact-footer">
          © {new Date().getFullYear()} Hilal Özkan
        </p>
      </div>
    </section>
  );
}

export default Contact;