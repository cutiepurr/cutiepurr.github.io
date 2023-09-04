import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { CardGroup, Card, CardBody, CardTitle, CardFooter } from 'reactstrap';
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
                <Card>
                    <CardBody>
                        <div className='project-icon'><i class={project.icon}></i></div>
                        <CardTitle>{project.name}</CardTitle>
                        <p className='text-muted'>{project.description}</p>
                    </CardBody>
                    <CardFooter>
                        <a href={project.github} className='icons' title="Github Repo"><i class="fa fa-github-square"></i></a>
                        {project.website!=="" &&
                            <a href={project.website} className='icons' title="Website"><i class="fa fa-code"></i></a>}
                    </CardFooter>
                </Card>
            );
        });

        return (
            <div className='container mx-auto text-center mt-5'>
                <h3>PERSONAL PROJECTS</h3>
                <Divider/>
                <CardGroup>{projects}</CardGroup>
            </div>
        );
    }
}