import logo from "../../logo.svg";
import React from "react";
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomIndex(max: number) {
    return Math.floor(Math.random() * max);
}

function Header(){

    const description = reactDescriptions[genRandomIndex(2)];
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any
                app you are going to build!
            </p>
        </header>
    );
}

export default Header;
