import React, {ReactNode} from "react";

type TabButtonType = {
    onClick: any;
    isSelected: boolean
    children: ReactNode;
}

function TabButton({isSelected, children, ...props}: TabButtonType) {

    return (
        <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>
    );
}

export default TabButton;