import React, {ReactNode} from "react";

type SectionType = {
  id: string;
  title: string,
  children?: ReactNode,
};

function Section({ title, children, ...props }: SectionType) {

    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Section;