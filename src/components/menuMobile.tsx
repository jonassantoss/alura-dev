import { useState } from "react";
import { MenuButton } from "./ui/menuButton";


import codeIcon from "../assets/code.svg";
import communityIcon from "../assets/community.svg";

export function MobileMenu() {
    const [buttons, setButtons] = useState([
        { id: 1, icon: codeIcon, text: "Editor de código", selectedButton: true },
        { id: 2, icon: communityIcon, text: "Comunidade", selectedButton: false }
    ])
    
    function handleSelectedButton(id: number) {
        const newButtons = buttons.map(button => ({
            ...button,
            selectedButton: button.id === id,
        }));
    
        setButtons(newButtons);
    }

    return (
        <div className="flex flex-col items-end h-full px-2 gap-4">
            <h3 className="sidebar-title uppercase">Menu</h3>
			<div className="flex flex-col gap-4">
                {buttons.map(button => (
                    <MenuButton
                        key={button.id}
                        id={button.id}
                        selected={button.selectedButton}
                        icon={button.icon}
                        text={button.text}
                        mobile={true}
                        onClick={() => handleSelectedButton(button.id)}
                    />
                ))}
			</div>
        </div>
    )
}