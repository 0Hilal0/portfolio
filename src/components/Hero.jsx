import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="hero-kicker">Portfolio / CV</p>

        <h1>Hilal Özkan</h1>

        <h2>
          .NET Cloud student building backend and cloud applications
        </h2>

        <p className="hero-description">
          I am currently studying .NET Cloud Development and enjoy building
          projects while improving my technical skills. This website is a way
          to document my progress, showcase what I have built, and keep growing
          over time.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;