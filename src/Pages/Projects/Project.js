import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Features from './Features';
import Slider from './Slider/Slider';

const Project = () => {
    const project = useLoaderData();
    const {project_name,image,details,live,client,server,feature} = project;
    return (
        <div className='md:flex block justify-between gap-3'>
            
            <div className="max-w-xl mt-12 py-4 mb-32  rounded-md shadow-md  shadow-white bg-[#0F1624] text-gray-100 ">
           <div className='grid grid-cols-3 gap-3'>
           {
                image.map((img,idx)=><Slider key={idx} image={img}></Slider>)
            }
           </div>
        {/* <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /> */}
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide text-center">{project_name}</h2>
                <p className='line mx-auto'></p>
                <p className="text-gray-100">{details}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
            <Link to={client} type="button" className=" w-2/5 p-3 font-semibold tracking-wide rounded-md btn text-white text-center">Client</Link>
            <Link to={server} type="button" className=" w-2/5 p-3 font-semibold tracking-wide rounded-md btn text-white text-center">Server</Link>
            <a href={live} type="button" className="border-btn border rounded-md w-2/5 p-3 font-semibold tracking-wide text-white text-center">Live site</a>
            </div>
        </div>
    </div>
    <div>
    <h2 className='text-2xl font-semibold text-white my-2'>Project Features</h2>
           {
                feature.map((fea,idx)=><Features key={idx} feature={fea}></Features>)
            }
    </div>
        </div>
    );
};

export default Project;