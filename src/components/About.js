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
            <div>
                <div className='container text-center mt-5'>
                    <img src={about.image} alt="avatar" id="avatar" className='mt-5' />
                    <h1 className='mt-3 mb-5 green'>{about.name}</h1>
                </div>
                <div className="container row m-auto">
                    <h3 className='mt-3 col-md-3'>ABOUT ME</h3>
                    <div className='lead col-md-9' style={{"borderLeft": "5px solid #ffc821"}}>{about.description}</div>
                </div>
            </div>
        );
    }
}