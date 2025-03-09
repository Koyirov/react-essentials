import React from "react";
import './CoreConcepts.css';

type CoreConceptType = {
    image: any,
    title: string,
    description: string,
}

function CoreConcept({ image, title, description }: CoreConceptType) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept;