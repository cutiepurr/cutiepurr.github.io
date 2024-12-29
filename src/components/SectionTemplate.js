/* eslint-disable react/prop-types */
import React from "react";

const SectionTemplate = ({icon="", heading, ...props}) => {
    return (
        <div className={`grid sm:grid-cols-12 gap-2 ${props.className ?? ""}`} {...props}>
            <div className="col-span-1 text-3xl sticky top-4 z-10">
                <div className="sticky top-4">{icon}</div>
            </div>
            <h2 className="col-span-3">
                <div className="sticky top-4">{heading}</div>
            </h2>
            <div className="col-span-8 mx-auto sm:mx-0">{props.children}</div>
        </div>
    );
};

export default SectionTemplate;