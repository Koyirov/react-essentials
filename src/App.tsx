import React, { useState } from 'react';
import './App.css';
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";

type SelectedTopicType = 'components' | 'jsx' | 'props' | 'state';

enum SELECTED_TOPIC {
    COMPONENTS = 'components',
    JSX = 'jsx',
    PROPS = 'props',
    STATE = 'state',
}

function App() {

    const [selectedTopic, setSelectedTopic] = useState<SelectedTopicType | null>(null);

    const handleSelect = (selectedButton: SelectedTopicType) => {
        console.log('Hello World - selected!')
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>;

    if(selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                   {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
            </div>
        )
    }

    // @ts-ignore
    return (
        <div className="App">
            <Header/>
            <main>
                <section id="core-concept"/>
                <h2>Core Concept</h2>
                <ul>
                    {CORE_CONCEPTS.map((item: any, index: number) => (
                        <CoreConcept key={index} {...item}/>
                    ))}
                </ul>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            onSelect={() => handleSelect(SELECTED_TOPIC.COMPONENTS)}
                            isSelected={selectedTopic === SELECTED_TOPIC.COMPONENTS}
                        >Components</TabButton>
                        <TabButton
                            onSelect={() => handleSelect(SELECTED_TOPIC.JSX)}
                            isSelected={selectedTopic === SELECTED_TOPIC.JSX}
                        >JSX</TabButton>
                        <TabButton
                            onSelect={() => handleSelect(SELECTED_TOPIC.PROPS)}
                            isSelected={selectedTopic === SELECTED_TOPIC.PROPS}
                        >Props</TabButton>
                        <TabButton
                            onSelect={() => handleSelect(SELECTED_TOPIC.STATE)}
                            isSelected={selectedTopic === SELECTED_TOPIC.STATE}
                        >State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
