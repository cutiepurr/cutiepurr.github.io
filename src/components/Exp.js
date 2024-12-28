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
            return (
                <div class="row mt-3">
                    <div class="col-sm-3" style={{"borderLeft": "3px solid lightgrey"}}>
                        <div><b>{item.endDate ? moment(item.endDate).format("MMM YYYY") : "Present"}</b></div>
                        <div><b>{moment(item.startDate).format("MMM YYYY")}</b></div>
                    </div>
                    <div class="col-sm-9">
                        <div><a href={item.companyURL} target='_blank'>{item.company}</a></div>
                        <div>{item.position}</div>
                    </div>
                </div>
            );
        });

        return (
            <div className='container mx-auto mt-5 row'>
                <h3 className="col-md-2 order-md-12">EXPERIENCE</h3>
                <div className="col-md-9 order-1" style={{"borderRight": "5px solid #ffc821"}}>{list}</div>        
            </div>
        );
    }
}