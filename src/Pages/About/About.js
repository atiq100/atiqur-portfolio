import React from 'react';
import profile from '../../assets/images/profile.png'

const About = () => {
    return (
        <div id='about'>
            <h2 className='text-3xl text-white font-bold py-3'>About Me</h2>
            <div className="p-6 sm:p-12 dark:bg-gray-900 text-gray-100">
	<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
		<img src={profile} alt="" className="self-center flex-shrink-0 w-28 h-28 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
		<div className="flex flex-col" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
			<h4 className="text-lg font-semibold text-center md:text-left">Hi! This is <br/><span className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Atiqur Rahman</span></h4>
			<p className="text-gray-400">I am a person who is positive about every aspect of life.Currently, I studied at the department of "Computer science and Engineering" at North East University Bangladesh, Sylhet.I am passionate about programming.Everyday I learn new technologies for updated myself in this tech world.
            With my enthusiastic experience as a Front-end Developer, I have designed and developed, highly
responsive websites using <span className='font-bold'>HTML, CSS, JavaScript, React.js, Express.js, Node.js MongoDB</span>. I have also
hands-on skills in extensive software and tools.
I consider myself as a responsible, disciplined, self motivated, quick learner and especially maintain
deadline. I can work under pressure and solve problems in a critical situation.</p>
		</div>
	</div>
	
</div>
        </div>
    );
};

export default About;