import React, { ReactNode } from "react";


function Tabs({ buttons, buttonsContainer = "menu", children }: { buttons: ReactNode, buttonsContainer: any, children: ReactNode }) {

    const ButtonsContainer = buttonsContainer;

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}

export default Tabs;