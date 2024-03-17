import { MenuButton } from "./ui/menuButton";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import codeIcon from "../assets/code.svg";
import communityIcon from "../assets/community.svg";
import avatar from '../assets/Avatar.png'
import { useLocation } from "react-router-dom";

export function MobileMenu() {
    const location = useLocation().pathname
    const buttons= [
        { id: 1, icon: codeIcon, text: "Editor de código", link: "/",  selectedButton: location === '/' },
        { id: 2, icon: communityIcon, text: "Comunidade", link: "/comunidade", selectedButton: location === '/comunidade' }
    ]

    return (
        <DropdownMenu.Portal>
            <DropdownMenu.Content
                className="flex flex-col h-full p-6 gap-4 mt-4 mr-4 bg-slate-700 rounded-md shadow-alura will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
            >
                {buttons.map(button => (
                    <DropdownMenu.Item key={button.id}>
                        <MenuButton
                            id={button.id}
                            selected={button.selectedButton}
                            icon={button.icon}
                            text={button.text}
                            link={button.link}
                        />
                    </DropdownMenu.Item>
                ))}

                <DropdownMenu.Separator className="h-[1px] bg-slate-500 m-[5px]" />

                <DropdownMenu.Item className="flex items-center gap-2 ml-2">
                    <img
                        src={avatar}
                        alt=""
                    />
                    <p>Harry</p>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
    )
}