import logo from '../assets/Logo.png'
import menuIcon from '../assets/menu.svg'
import searchIcon from '../assets/search.svg'
import avatar from '../assets/Avatar.png'

export function Header() {
    return (
        <header className="p-5 flex justify-between items-center">
            <img 
                className="h-1/2" 
                src={logo} 
                alt="" 
            />

            <input
                className="hidden md:inline-block w-2/3 bg-slate-700 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
                type="text"
                placeholder="Busque por algo"
            />

            <div className="flex">
                <img
                    className="md:hidden"
                    src={searchIcon} 
                    alt="" 
                />
                <img
                    className="lg:hidden"
                    src={menuIcon} 
                    alt="" 
                />
            </div>

            <div className="hidden lg:flex justify-center items-center gap-3">
                <img
                    src={avatar}
                    alt="" 
                />
                <p>Harry</p>
            </div>
        </header>
    )
}