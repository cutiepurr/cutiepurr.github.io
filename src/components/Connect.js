import React from "react";
import { CONTACT } from "../shared/contact";
import SectionTemplate from "./SectionTemplate";

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
        <SectionTemplate heading="Connect with me" icon="👋">
            <div className="flex gap-10 place-items-center size-full">{contactList}</div>
        </SectionTemplate>
    );
};

export default Connect;