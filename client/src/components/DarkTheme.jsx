import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

const DarkTheme = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={() => setDarkMode(!darkMode)}></input>
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default DarkTheme;
