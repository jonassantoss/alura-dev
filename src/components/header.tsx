import logo from '../assets/Logo.png'
import menu from '../assets/menu.svg'
import search from '../assets/search.svg'

export function Header() {
    return (
        <header className="p-5 flex justify-between items-center">
            <img 
                className="h-1/2" 
                src={logo} 
                alt="" 
            />

            <input
                className="w-2/3 bg-slate-700 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
                type="text"
                placeholder="Busque por algo"
            />

            <div className="flex">
                <img
                    className="md:hidden"
                    src={search} 
                    alt="" 
                />
                <img 
                    src={menu} 
                    alt="" 
                />
            </div>
        </header>
    )
}