import { SelectHTMLAttributes } from "react";

import arrowIcon from "../../assets/arrow.svg";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {

}

export function Select(props: SelectProps) {
    const selectItems = [
        { id: 0, value: "HTML" },
        { id: 1, value: "CSS" },
        { id: 2, value: "Javascript" }
    ]


    return (
        <div className="relative">
            <select
                {...props}
                className="appearance-none inline-flex items-center justify-between w-full bg-slate-700 text-slate-200/50 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
            >
                {selectItems.map(selectItem => (
                    <option
                        className="text-white p-5 outline-none hover:bg-slate-600"
                        key={`${selectItem.id}`}
                        value={selectItem.value}
                    >
                        {selectItem.value}
                    </option>
                ))}
            </select>
            <img className="absolute top-5 right-3" src={arrowIcon} />
        </div>
    )
}