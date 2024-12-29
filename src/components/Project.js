import React from "react";
import { PROJECTS } from "../shared/projects";

const Project = () => {
    const projects = PROJECTS.map(project => 
        (
            <div key={project.name} 
                className="grid grid-cols-12 gap-5 h-32">
                <div className="bg-cover bg-center rounded-lg col-span-3 shadow-xl" 
                    style={{
                        backgroundImage: `url("${project.thumbnail}")`,
                    }}>
                </div>
                <div className="col-span-9 place-content-center">
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
        <div className="grid sm:grid-cols-12 w-full">
            <h2 className="col-span-3">Projects</h2>
            <div className="col-span-9">
                <div className="flex flex-col gap-5">
                    {projects}
                </div>
            </div>
        </div>
    );
};

export default Project;