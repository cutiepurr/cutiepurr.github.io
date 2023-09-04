import React from 'react';
import { Divider } from './Divider';

export default function Footer(props) {
    return (
        <div className='container footer text-center mt-5 mb-5'>
            <h3>CONTACT</h3>
            <Divider/>
            <a className='foot icons' href="mailto:linhtunguyen.1311@gmail.com"><i className="fa fa-envelope"></i></a>
            <a className='foot icons' href="http://www.linkedin.com/in/nguyen-thi-tu-linh"><i className="fa fa-linkedin"></i></a>
            <a className='foot icons' href="https://github.com/cutiepurr"><i className="fa fa-github"></i></a>
            <p className='text-muted mt-3'><small>Created using React.js and hosted on GitHub</small></p>
        </div>
    );
}