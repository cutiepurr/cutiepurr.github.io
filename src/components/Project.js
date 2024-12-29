import React from "react";
import { PROJECTS } from "../shared/projects";
import { Divider } from "./Divider";

const Project = () => {
    const projects = PROJECTS.map(project => {
        return (
            <div className="" style={{padding: 0}} key={project.name}>
                {
                    project.thumbnail !=="" &&
                        <div style={{
                            backgroundImage: `url(${project.thumbnail})`, 
                            backgroundSize: "cover", width: "100%", height: "200px"
                        }}></div>
                }
                <div>
                    <div className='mt-4'>{project.name}</div>
                    <p className='text-muted'>{project.description}</p>
                </div>
                <div>
                    <a href={project.github} className='icons green' 
                        title="Github Repo" target='_blank' rel="noreferrer">
                        <i className="fa fa-github-square"></i>
                    </a>
                    {
                        project.website!=="" &&
                            <a href={project.website} className='icons green' 
                                title="Website" target='_blank' rel="noreferrer"><
                                    i className="fa fa-globe"></i>
                            </a>
                    }
                </div>
            </div>
        );
    });

    return (
        <div className=''>
            <h3>PROJECTS</h3>
            <Divider/>
            <div className=''>
                <div className=''>{projects}</div>
            </div>
        </div>
    );
};

export default Project;