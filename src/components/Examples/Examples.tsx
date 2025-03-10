import TabButton from "../TabButton/TabButton";
import React, {useState} from "react";
import {EXAMPLES} from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs";


type SelectedTopicType = 'components' | 'jsx' | 'props' | 'state';

enum SELECTED_TOPIC {
    COMPONENTS = 'components',
    JSX = 'jsx',
    PROPS = 'props',
    STATE = 'state',
}

function Examples() {

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

    return (
        <Section id="examples" title={"Examples"}>
            <h2>Examples</h2>
            <Tabs buttons={
                    <>
                        <TabButton
                            onClick={() => handleSelect(SELECTED_TOPIC.COMPONENTS)}
                            isSelected={selectedTopic === SELECTED_TOPIC.COMPONENTS}
                        >Components</TabButton>
                        <TabButton
                            onClick={() => handleSelect(SELECTED_TOPIC.JSX)}
                            isSelected={selectedTopic === SELECTED_TOPIC.JSX}
                        >JSX</TabButton>
                        <TabButton
                            onClick={() => handleSelect(SELECTED_TOPIC.PROPS)}
                            isSelected={selectedTopic === SELECTED_TOPIC.PROPS}
                        >Props</TabButton>
                        <TabButton
                            onClick={() => handleSelect(SELECTED_TOPIC.STATE)}
                            isSelected={selectedTopic === SELECTED_TOPIC.STATE}
                        >State</TabButton>
                    </>
            }
            buttonsContainer="menu"
            >{tabContent}</Tabs>
        </Section>
    );
}

export default Examples;