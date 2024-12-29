import "./App.css";
import React from "react";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Exp from "./components/Exp";

const App = () => {
    return (
        <div className="App">
            <About />
            <Exp />
            <Project />
            <Footer />
        </div>
    );
};

export default App;
