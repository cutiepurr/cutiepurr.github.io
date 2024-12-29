import React from "react";
import { ABOUT } from "../shared/about";

const About = () => {
    const about = ABOUT;
    
    return (
        <div>
            <div className='text-center m-auto'>
                <img src={about.image} alt="avatar" className='size-64 rounded-full' />
                <h1 className='green fw-semibold'>{about.name}</h1>
            </div>
            <div className="m-auto">
                <h3 className='col-span-1'>About Me</h3>
                <div className='col-span-4'>{about.description}</div>
            </div>
        </div>
    );
};

export default About;