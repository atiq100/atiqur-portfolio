import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import TypeWriterEffect from 'react-typewriter-effect';
import pc from '../../../assets/images/pc.png'
import {Link} from 'react-scroll'
export const Hero = () => {
    return (
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
             
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-4">
                Atiqur Rahman
                
              </h2>
              <span>
              <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="coral"
        multiText={[
          'Engineer',
          'Learner',
          'Junior Front-end Developer',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
           </span>   
            </div>
            <div className="flex items-center space-x-3" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <a href="/" className=" transition duration-300 hover:shadow-lg">
                <FaFacebook className="text-[#928A97] text-2xl transition duration-300 hover:text-[#1877F2]"></FaFacebook>
              </a>
              <a href="/" className=" transition duration-300 hover:shadow-lg">
                <FaGithub className="text-[#928A97] text-2xl hover:text-purple-600"></FaGithub>
              </a>
              <a href="/" className=" transition duration-300 hover:shadow-lg">
                <FaLinkedin className="text-[#928A97] text-2xl hover:text-blue-600"></FaLinkedin>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-3/5"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <img className="object-cover" src={pc} alt="" />
            </div>
            
          </div>
        </div>
        <Link
          to="contact" spy={true} smooth={true} offset={50} duration={500}
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </Link>
      </div>
    );
  };