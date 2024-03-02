import * as Dialog from '@radix-ui/react-dialog';
import { MobileMenu } from './menuMobile';
import { Input } from './ui/input';

import logo from '../assets/Logo.png'
import menuIcon from '../assets/menu.svg'
import searchIcon from '../assets/search.svg'
import avatar from '../assets/Avatar.png'

export function Header() {
    return (
        <div className="p-5 flex justify-between items-center">
            <img
                className="h-1/2"
                src={logo}
                alt=""
            />

            <div className="w-2/3">
                <Input
                    type="text"
                    placeholder="Busque por algo"
                    isRequired={false}
                />
            </div>

            <div className="flex">
                <img
                    className="md:hidden"
                    src={searchIcon}
                    alt=""
                />
                <Dialog.Root>
                    <Dialog.Trigger>
                        <img
                            className="lg:hidden"
                            src={menuIcon}
                            alt=""
                        />
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <div className="block lg:hidden">
                            <Dialog.Overlay className="inset-0 fixed bg-black/50">
                                <Dialog.Content className="animate-slide-right fixed w-4/6 h-full right-0 bg-blue-950 py-10 md:w-3/12">
                                    <MobileMenu />
                                </Dialog.Content>
                            </Dialog.Overlay>
                        </div>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-3">
                <img
                    src={avatar}
                    alt=""
                />
                <p>Harry</p>
            </div>
        </div>
    )
}