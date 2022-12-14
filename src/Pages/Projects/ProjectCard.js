import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'
const ProjectCard = ({project}) => {
    const {project_name,image,details,live,id}=project
    return (
        <div className="max-w-sm rounded-md shadow-md  shadow-white bg-[#0F1624] text-gray-100 ">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide text-center">{project_name}</h2>
            <p className='line mx-auto'></p>
			<p className="text-gray-100">{details}</p>
		</div>
		<div className='flex items-center justify-center gap-2'>
        <Link to={`/atiqur-portfolio/project/${id}`} type="button" className=" w-2/5 p-3 font-semibold tracking-wide rounded-md btn text-white text-center">Details</Link>
		<a href={live} type="button" className="border-btn border rounded-md w-2/5 p-3 font-semibold tracking-wide text-white text-center">Live site</a>
        </div>
	</div>
</div>
    );
};

export default ProjectCard;