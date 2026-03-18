import "../styles/projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section-spacing">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              <p className="project-tools">{project.tools}</p>

              <a href={project.link} target="_blank">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;