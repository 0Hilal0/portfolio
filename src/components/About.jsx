import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about section-spacing">
      <div className="about-container">
        <div className="about-left">
          <p className="section-label">About</p>
          <h2>About me</h2>

          <p className="about-lead">
            I am currently studying .NET Cloud Development with a focus on
            backend systems, cloud technologies, and DevOps.
          </p>

          <p>
            I enjoy learning how modern applications are built and deployed, and
            I like solving technical problems through hands-on projects.
          </p>

          <p>
            My goal is to keep improving step by step, build stronger technical
            skills, and create projects that show my progress over time.
          </p>
        </div>

        <div className="about-right">
          <div className="info-card">
            <h3>Skills</h3>
            <div className="tag-list">
              <span>C#</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>MongoDB</span>
              <span>Web development</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Currently learning</h3>
            <div className="tag-list">
              <span>Azure</span>
              <span>Agile methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;