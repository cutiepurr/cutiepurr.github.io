import React, { Component } from 'react';
import { ABOUT } from '../shared/about';

export default class About extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            info: ABOUT
        };
    }
    render() {
        const about = this.state.info;
        return (
            <div className='container text-center mt-5'>
                <img src={about.image} alt="avatar" id="avatar" />
                <h1 className='mt-3'>{about.name}</h1>
                <div>{about.description}</div>
            </div>
        );
    }
}