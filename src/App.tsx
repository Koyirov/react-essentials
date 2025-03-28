import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";



function App() {

    // @ts-ignore
    return (
        <div className="App">
            <Header/>
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </div>
    );
}

export default App;
