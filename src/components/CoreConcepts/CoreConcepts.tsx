import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import React from "react";
import Section from "../Section/Section";


function CoreConcepts() {

    return (
        <Section id="core-concept" title={"Core Concept"}>
            <ul>
                {CORE_CONCEPTS.map((item: any, index: number) => (
                    <CoreConcept key={index} {...item}/>
                ))}
            </ul>
        </Section>
    );
}

export default CoreConcepts;