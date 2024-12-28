import React, { Component } from 'react';
import moment from 'moment';
import { EXP } from '../shared/exp';

export default class Exp extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            exp: EXP.sort((a, b) => {
                return a.startDate > b.startDate ? -1 : 1;
            })
        };
    }

    render() {
        const list = this.state.exp.map(item => {
            const startDate = moment(item.startDate).format("MMM YYYY");
            const endDate = item.endDate ? moment(item.endDate).format("MMM YYYY") : "Present";
            return (
                <div className="row mt-3" key={(item.startDate, item.endDate)}>
                    <div className="col-sm-4 fw-semibold d-flex flex-column justify-content-between" style={{"borderLeft": "2px solid lightgrey"}}>
                        <div>{endDate}</div>
                        <div>{startDate}</div>
                    </div>
                    <div className="col-sm-8">
                        <div className="fs-5">{item.position}</div>
                        <div><a href={item.companyURL} target='_blank' rel="noreferrer" className="text-decoration-none">{item.company}</a></div>
                        <div className="text-muted fw-light">{item.tech}</div>
                    </div>
                </div>
            );
        });

        return (
            <div className='container mx-auto mt-5 row'>
                <h3 className="col-md-3 order-md-2">EXPERIENCE</h3>
                <div className="col-md-9 order-1" style={{"borderRight": "5px solid #ffc821"}}>{list}</div>        
            </div>
        );
    }
}