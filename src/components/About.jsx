import '../styles/about.css'

function AboutMe () {
    return(
        <>
        <div className='container'>
            <h2>
                About me
            </h2>
            <p>
                I am currently studying .NET Cloud Development with a 
                focus on backend systems, cloud technologies, and DevOps. 
                I enjoy learning how modern applications are built and 
                deployed, and I like solving technical problems through 
                hands-on projects.
                My goal is to become a DevOps engineer and work with cloud infrastructure, automation, and scalable systems.
            </p>
            <div className='skills'>
                <h3>
                    Skills
                </h3>
                <ul>
                    <li>
                        C#
                    </li>
                    <li>
                        Javascript
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        MongoDb
                    </li>
                    <li>
                        Web development
                    </li>
                </ul>
            </div>
            <div className='currently'>
                <h3>
                    Currently learning
                </h3>
                <ul>
                    <li>
                        Azure
                    </li>
                    <li>
                        Agile methods
                    </li>
                </ul>
            </div>

        </div>        
        </>
    )

}

export default AboutMe;