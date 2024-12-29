import React from "react";
import moment from "moment";
import { EXP } from "../shared/exp";
import SectionTemplate from "./SectionTemplate";

const Exp = () => {
    const exp =  EXP.sort((a, b) => {
        return a.endDate > b.endDate ? -1 : 1;
    });

    const list = exp.map(item => {
        let endDate, duration;
        const startDate = item.startDate ? moment(item.startDate).format("MMM YYYY") : item.startDate;
        
        if (!item.endDate) endDate = item.endDate;
        else if (item.endDate === moment().format("YYYY-MM-DD")) endDate = "Present";
        else endDate = moment(item.endDate).format("MMM YYYY");
        
        if (item.startDate && item.endDate) {
            duration = moment(item.endDate).diff(moment(item.startDate), "months", true).toFixed(1);
        }
        return (
            <div key={(item.startDate, item.endDate)}
                className="relative border-s border-gray-300 p-5">
                <div>
                    <div className="absolute size-3 bg-gray-300 border border-white 
                        rounded-full -start-1.5 mt-1.5"></div>
                    <div>
                        {startDate && startDate} 
                        {startDate && endDate && <> &ndash; </>}
                        {endDate && endDate}
                        {duration && ` (${duration} months)`}
                    </div>
                </div>
                <div>
                    <h3 className="">{item.position}</h3>
                    <div>
                        <a href={item.company.url} target='_blank' rel="noreferrer" >
                            {item.company.name}
                        </a>
                    </div>
                    <div className="text-sm">{item.description}</div>
                </div>
            </div>
        );
    });

    return (
        <SectionTemplate heading="My Journey" icon="🚗">
            {list}
        </SectionTemplate>
    );
};

export default Exp;