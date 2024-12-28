import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { Card, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { Divider } from './Divider';

export default class Exp extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {
        const projects = this.state.projects.map(project => {
            return (
                <Card className="col-md-4 mb-3" style={{padding: 0}} key={project.name}>
                    {project.thumbnail !=="" &&
                            <div style={{backgroundImage: `url(${project.thumbnail})`, backgroundSize: "cover", width: "100%", height: "200px"}}></div> }
                    <CardBody>
                        <CardTitle className='mt-4'>{project.name}</CardTitle>
                        <p className='text-muted'>{project.description}</p>
                    </CardBody>
                    <CardFooter>
                        <a href={project.github} className='icons green' title="Github Repo" target='_blank' rel="noreferrer"><i className="fa fa-github-square"></i></a>
                        {project.website!=="" &&
                            <a href={project.website} className='icons green' title="Website" target='_blank' rel="noreferrer"><i className="fa fa-globe"></i></a>}
                    </CardFooter>
                </Card>
            );
        });

        return (
            <div className='container mx-auto text-center mt-5'>
                <h3>PROJECTS</h3>
                <Divider/>
                <div className='container'>
                    <div className='row'>{projects}</div>
                </div>
            </div>
        );
    }
}