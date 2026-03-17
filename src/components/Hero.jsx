import '../styles/hero.css'

function Hero () {
    return(
        <>
        <div className='hero-div'>

            <h1>
                Hilal Özkan
            </h1>
            <p>
                .NET Cloud Developer Student
            </p>
            
            <p>
                .NET Cloud Developer student with a strong interest 
                in backend development, cloud infrastructure, and 
                DevOps. I enjoy building projects and continuously 
                improving my technical skills.
            </p>
            <div className='btn-hero'>
                <button className='hero-btn'>
                    View projects
                </button>
                <button className='hero-btn'>
                    Contact
                </button>
            </div>

        </div>
        
        </>
    )

}

export default Hero;