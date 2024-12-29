import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Project from "./components/Project";
import Connect from "./components/Connect";
import Exp from "./components/Exp";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    };

    return (
        <>
            <main className="p-3 flex flex-col gap-10">
                <div>
                    <button onClick={toggleDarkMode} className="float-end">
                        {darkMode 
                            ? <><i className="fa-solid fa-sun text-xl mr-1"></i> Light</> 
                            : <><i className="fa-solid fa-moon text-xl mr-1"></i> Dark</>}
                    </button>
                </div>

                <About />
                <Exp />
                <Project />
                <Connect />
            </main>
            <footer className="p-3">
                <p>Created using React.js & Tailwind CSS. Hosted on GitHub</p>
            </footer>
        </>
    );
};

export default App;
