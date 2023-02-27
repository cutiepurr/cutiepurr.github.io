import React, { Component } from 'react';
import { ABOUT } from '../shared/about';
import { Divider } from './Divider';

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
                <img src={about.image} alt="avatar" id="avatar" className='mt-5' />
                <h1 className='mt-3 mb-5' style={{"color": "#074F57"}}>{about.name}</h1>
                <h3 className='mt-3'>ABOUT ME</h3>
                <Divider/>
                <div className='lead'>{about.description}</div>
            </div>
        );
    }
}