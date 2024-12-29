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
            <div className="" key={(item.startDate, item.endDate)}>
                <div className="">
                    <div>{endDate}</div>
                    <div>{startDate}</div>
                </div>
                <div className="">
                    <div className="">{item.position}</div>
                    <div>
                        <a href={item.companyURL} target='_blank' rel="noreferrer" >
                            {item.company}
                        </a>
                    </div>
                    <div className="">{item.tech}</div>
                </div>
            </div>
        );
    });

    return (
        <div className=''>
            <h3 className="">My Journey</h3>
            <div className="">{list}</div>        
        </div>
    );
};

export default Exp;