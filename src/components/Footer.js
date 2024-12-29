import React from "react";
import { Divider } from "./Divider";
import { CONTACT } from "../shared/contact";

const Footer = () => {
    const contact = CONTACT;
    const contactList = contact.map(item => {
        return (
            <a className='' key={item.type}
                href={item.url} title={item.type} target='_blank' rel="noreferrer">
                <i className={item.icon}></i>
            </a>
        );
    });
    return (
        <div className=''>
            <h3>CONTACT</h3>
            <Divider/>
            <div>{contactList}</div>
            <p className=''><small>Created using React.js and hosted on GitHub</small></p>
        </div>
    );
};

export default Footer;