import React from "react";
import moment from "moment";
import { EXP } from "../shared/exp";

const Exp = () => {
    const exp =  EXP.sort((a, b) => {
        return a.startDate > b.startDate ? -1 : 1;
    });

    const list = exp.map(item => {
        const startDate = moment(item.startDate).format("MMM YYYY");
        const endDate = item.endDate ? moment(item.endDate).format("MMM YYYY") : "Present";
        return (
            <div key={(item.startDate, item.endDate)}
                className="relative border-s border-gray-300 p-5">
                <div>
                    <div className="absolute size-3 bg-gray-300 border border-white 
                        rounded-full -start-1.5 mt-1.5"></div>
                    <div>{startDate} - {endDate}</div>
                </div>
                <div>
                    <h3 className="">{item.position}</h3>
                    <div>
                        <a href={item.companyURL} target='_blank' rel="noreferrer" >
                            {item.company}
                        </a>
                    </div>
                    <div className="text-sm">{item.tech}</div>
                </div>
            </div>
        );
    });

    return (
        <div className="grid sm:grid-cols-12">
            <h2 className="col-span-3">My Journey</h2>
            <div className="col-span-9">{list}</div>        
        </div>
    );
};

export default Exp;