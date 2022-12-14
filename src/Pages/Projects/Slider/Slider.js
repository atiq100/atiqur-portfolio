import React from 'react';

const Slider = ({image}) => {
    return (
        

    
    <div className="relative h-28 overflow-hidden rounded-lg md:h-28">
        
        <div className=" ">
           
            <img src={image} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
       
    </div>
    
   

    );
};

export default Slider;