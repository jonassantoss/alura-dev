import { useState } from "react";
import { MenuButton } from "./ui/menuButton";

import codeIcon from "../assets/code.svg";
import communityIcon from "../assets/community.svg";

export function Menu() {
    const [buttons, setButtons] = useState([
        { id: 1, icon: codeIcon, text: "Editor de código", selectedButton: false },
        { id: 2, icon: communityIcon, text: "Comunidade", selectedButton: true }
    ])

    function handleSelectedButton(id: number) {
        const newButtons = buttons.map(button => ({
            ...button,
            selectedButton: button.id === id,
        }));

        setButtons(newButtons);
    }

	return (
		<aside className="hidden lg:flex flex-col items-start w-[14%] h-full px-5 gap-4">
			<p className="sidebar-title uppercase">Menu</p>
			<div className="flex flex-col gap-4">
                {buttons.map(button => (
                    <MenuButton
                        key={button.id}
                        id={button.id}
                        selected={button.selectedButton}
                        icon={button.icon}
                        text={button.text}
                        onClick={() => handleSelectedButton(button.id)}
                    />
                ))}
                {/* <MenuButton
                    defaultValue={false}
                    icon={codeIcon}
                    text="Editor de Código"
                />

                <MenuButton 
                    defaultValue={true}
                    icon={communityIcon}
                    text="Comunidade"
                /> */}
			</div>
		</aside>
	);
}
