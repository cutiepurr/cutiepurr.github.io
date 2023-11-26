import React, { Component } from 'react';
import { Divider } from './Divider';
import { CONTACT } from "../shared/contact"

export default class Footer extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            contact: CONTACT
        }
    }
    render(){
        const contactList = this.state.contact.map(item => {
            return (
                <a className='foot icons green' href={item.url} title={item.type} target='_blank'>
                    <i className={item.icon}></i>
                </a>
            );
        });
        return (
            <div className='container footer text-center mt-5 mb-5'>
                <h3>CONTACT</h3>
                <Divider/>
                <div>{contactList}</div>
                <p className='text-muted mt-3'><small>Created using React.js and hosted on GitHub</small></p>
            </div>
        );
    }
}