import React, {ReactNode} from "react";

type TabButtonType = {
    onSelect: any;
    children: ReactNode;
}

function TabButton({onSelect, children}: TabButtonType) {

    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}

export default TabButton;