import React, { Component } from 'react';
import { EXP } from '../shared/exp';

export default class Exp extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            exp: EXP.sort((a, b) => {
                return a.start > b.start ? -1 : 1;
            })
        };
    }

    render() {
        const list = this.state.exp.map(item => {
            let startDate = item.start.toLocaleDateString("en-au" , {month: "short", year: "numeric"});
            let endDate;
            if (item.end) endDate = item.end.toLocaleDateString("en-au" , {month: "short", year: "numeric"});
            return (
                <div class="row mt-3">
                    <div class="col-sm-3" style={{"borderLeft": "3px solid lightgrey"}}>
                        <div><b>{endDate}</b></div>
                        {endDate && <br></br>}
                        <div><b>{startDate}</b></div>
                    </div>
                    <div class="col-sm-9">
                        <div><a href={item.companyURL}>{item.company}</a></div>
                        <div>{item.start > new Date() && "(expected)"} {item.position}</div>
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