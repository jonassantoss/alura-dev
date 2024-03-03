import { InputHTMLAttributes } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function SearchBar(props: SearchBarProps) {
    return (
        <input
            {...props}
            className="w-full bg-slate-700 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
        />
    )
}