import { AllHTMLAttributes } from "react";
import { MenuButton } from "./ui/menuButton";


import codeIcon from "../assets/code.svg";
import communityIcon from "../assets/community.svg";
import { useLocation } from "react-router-dom";

interface MenuProps extends AllHTMLAttributes<HTMLElement> {

}

export function Menu(props: MenuProps) {
    const location = useLocation().pathname;
    const buttons = [
        { id: 1, icon: codeIcon, text: "Editor de código", link: "/",  selectedButton: location === '/' },
        { id: 2, icon: communityIcon, text: "Comunidade", link: "/comunidade", selectedButton: location === '/comunidade' }
    ]

	return (
		<div 
            {...props}
            className="hidden lg:flex flex-col w-[22%] items-start gap-4"
        >
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
                    />
                ))}
			</div>
		</div>
	);
}