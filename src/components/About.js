import React from "react";
import { ABOUT } from "../shared/about";

const About = () => {
    const about = ABOUT;
    
    return (
        <div className="h-96 place-items-center flex">
            <div>
                <h1 className=''>{about.header}</h1>
                <div className=''>{about.description}</div>
            </div>
        </div>
    );
};

export default About;