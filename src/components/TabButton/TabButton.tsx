import React, {ReactNode} from "react";

type TabButtonType = {
    onSelect: any;
    isSelected: boolean
    children: ReactNode;
}

function TabButton({onSelect, isSelected, children}: TabButtonType) {

    return (
        <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button></li>
    );
}

export default TabButton;