import "./App.css";
import React from "react";
import About from "./components/About";
import Project from "./components/Project";
import Connect from "./components/Connect";
import Exp from "./components/Exp";

const App = () => {
    return (
        <div className="container mx-auto p-3 flex flex-col gap-10">
            <About />
            <Exp />
            <Project />
            <Connect />
            <footer>
                <p className=''><small>Created using React.js and hosted on GitHub</small></p>
            </footer>
        </div>
    );
};

export default App;
