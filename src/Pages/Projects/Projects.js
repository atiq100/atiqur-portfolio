import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects,setProjects] = useState([]);
    
    //
    useEffect(()=>{
        fetch('https://my-portfolio-server-eight.vercel.app/atiqur-portfolio/projects')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[]);
    return (
        <div id='projects'>
            <h3 className='text-3xl text-white font-bold py-3'>Projects</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">
                    {
                    projects.map((project => <ProjectCard 
                        project={project} 
                        key={project?.id} 
                        
                       
                       >

                        </ProjectCard>))
                }
                    </div>
        </div>
    );
};

export default Projects;