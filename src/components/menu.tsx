import { useState } from "react";
import { MenuButton } from "./ui/menuButton";


import codeIcon from "../assets/code.svg";
import communityIcon from "../assets/community.svg";
import { useLocation } from "react-router-dom";

export function Menu() {
    const location = useLocation().pathname;
    const [buttons, setButtons] = useState([
        { id: 1, icon: codeIcon, text: "Editor de código", link: "/",  selectedButton: location === '/' },
        { id: 2, icon: communityIcon, text: "Comunidade", link: "/comunidade", selectedButton: location === '/comunidade' }
    ])
    
    function handleSelectedButton(id: number) {
        const newButtons = buttons.map(button => ({
            ...button,
            selectedButton: button.id === id,
        }));
    
        setButtons(newButtons);
    }

	return (
		<div className="hidden lg:flex flex-col w-[30%] items-start gap-4">
			<h3 className="sidebar-title uppercase">Menu</h3>
			<div className="flex flex-col gap-4">
                {buttons.map(button => (
                    <MenuButton
                        key={button.id}
                        id={button.id}
                        selected={button.selectedButton}
                        icon={button.icon}
                        text={button.text}
                        link={button.link}
                        onClick={() => handleSelectedButton(button.id)}
                    />
                ))}
			</div>
		</div>
	);
}