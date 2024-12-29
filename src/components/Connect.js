import React from "react";
import { CONTACT } from "../shared/contact";

const Connect = () => {
    const contactList = CONTACT.map(item => {
        return (
            <a className="text-3xl" key={item.type}
                href={item.url} title={item.type} target='_blank' rel="noreferrer">
                <i className={item.icon}></i>
            </a>
        );
    });
    return (
        <div className="grid grid-cols-12">
            <h2 className="col-span-3">Connect with me</h2>
            <div className="col-span-9 flex gap-10">{contactList}</div>
        </div>
    );
};

export default Connect;