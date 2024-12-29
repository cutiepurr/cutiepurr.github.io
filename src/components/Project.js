import React from "react";
import { PROJECTS } from "../shared/projects";
import SectionTemplate from "./SectionTemplate";

const Project = () => {
    const projects = PROJECTS.map(project => 
        (
            <div key={project.name} 
                className="grid grid-cols-12 gap-5 h-32">
                <div className="sm:col-span-3 col-span-5 bg-cover bg-center rounded-lg shadow-xl" 
                    style={{
                        backgroundImage: `url("${project.thumbnail}")`,
                    }}>
                </div>
                <div className="sm:col-span-9 col-span-7 place-content-center">
                    <h3>{project.name}</h3>
                    <p className="text-sm">{project.description}</p>
                    <div className="flex gap-3">
                        <a href={project.github} className='text-2xl' 
                            title="Github Repo" target='_blank' rel="noreferrer">
                            <i className="fa fa-github-square"></i>
                        </a>
                        {
                            project.website!=="" &&
                        <a href={project.website} className='text-2xl' 
                            title="Website" target='_blank' rel="noreferrer">
                            <i className="fa fa-globe"></i>
                        </a>
                        }
                    </div>
                </div>
            </div>
        )
    );

    return (
        <SectionTemplate heading="Projects" icon="📽️">
            <div className="flex flex-col gap-5">
                {projects}
            </div>
        </SectionTemplate>
    );
};

export default Project;