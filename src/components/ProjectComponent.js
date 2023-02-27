import React, { Component } from 'react';
import { PROJECTS } from '../shared/projects';
import { CardGroup, Card, CardBody, CardTitle } from 'reactstrap';
import { Divider } from './Divider';

export default class Project extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            projects: PROJECTS
        };
    }

    render() {
        const projects = this.state.projects.map(project => {
            return (
                <Card onClick={project.link}>
                    <CardBody>
                        <div className='project-icon'><i class={project.icon}></i></div>
                        <CardTitle>{project.name}</CardTitle>
                        <div className='text-center'>
                            <p className='text-muted'>{project.description}</p>
                            <a href={project.github} className='icons' title="Github Repo"><i class="fa fa-github-square"></i></a>
                            <a href={project.website} className='icons' title="Website"><i class="fa fa-code"></i></a>
                        </div>
                    </CardBody>
                </Card>
            );
        });

        return (
            <div className='container mx-auto text-center mt-5'>
                <h3>PROJECTS</h3>
                <Divider/>
                <CardGroup>{projects}</CardGroup>
            </div>
        );
    }
}