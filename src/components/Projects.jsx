import '../styles/projects.css'
import projects from '../data/projects';

function Projects () {
    return(
        <>
        <div className='project'>

            <h3>
                Projects
            </h3>
            <div className='project-div'>
                {projects.map(project => (
                <div key={project.title} className='projectCard'>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <p>{project.tools}</p>
                    <a href={project.link} target='_blank'>Github</a>
                </div>
            ))}
            </div>            
        </div>
        </>
    )
}

export default Projects;