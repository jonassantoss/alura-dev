import { MobileMenu } from './mobileMenu';
import { SearchBar } from './ui/searchBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"


import logo from '../assets/Logo.png'
import X from '../assets/close.png';
import menuIcon from '../assets/menu.svg'
import searchIcon from '../assets/search.svg'
import avatar from '../assets/Avatar.png'

export function Header() {
    const [menuIconState, setMenuIconState] = useState(menuIcon);
    const [searchIconState, setSearchIconState] = useState(searchIcon);

    function handleMenuOpenChange(open: boolean) {
        setMenuIconState(open ? X : menuIcon)
    }

    function handleSearchButtonClick() {
        setSearchIconState(prevState => prevState === searchIcon ? X : searchIcon);
    }

    return (
        <div className="w-full flex justify-between items-center gap-8">
            <div className="relative flex items-center w-[33%]">
                {searchIconState === X && (
                    <SearchBar
                        className={`absolute top-1/2 transform -translate-y-1/2 ${searchIconState === X ? 'block' : 'hidden'}`}
                        placeholder="Busque por algo"
                    />
                )}
                <Link to={"/"}>
                    <img
                        className={`h-1/2 ${searchIconState === X ? 'hidden' : 'block'}`}
                        src={logo}
                        alt=""
                    />
                </Link>
            </div>

            <div className="hidden md:inline-flex w-[69%]">
                <SearchBar
                    placeholder="Busque por algo"
                />
            </div>

            <div className="flex justify-center">
                <div className="md:hidden">
                    <img
                        className="size-11"
                        src={searchIconState}
                        alt=""
                        onClick={handleSearchButtonClick}
                    />
                </div>

                <DropdownMenu.Root onOpenChange={handleMenuOpenChange}>
                    <DropdownMenu.Trigger
                        asChild
                        className="min-w-10 rounded-lg duration-100 ease-linear hover:bg-blue-300/[8%] active:bg-blue-300/15"
                    >
                        <img
                            className="size-11 lg:hidden"
                            src={menuIconState}
                            alt=""
                        />
                    </DropdownMenu.Trigger>

                    <MobileMenu />
                </DropdownMenu.Root>
            </div>

            <div className="hidden lg:flex justify-end items-center gap-3 w-[33%]">
                <img
                    src={avatar}
                    alt=""
                />
                <p>Harry</p>
            </div>
        </div>
    )
}