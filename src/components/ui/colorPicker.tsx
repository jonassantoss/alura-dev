import { ChangeEvent, useState } from "react";

interface ColorPickerProps {
    value?: string
}

export function ColorPicker({ value = "#000000" }: ColorPickerProps) {
    const [color, setColor] = useState(value);
    const pickerID = `color-picker_${Date.now()}`

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    return (
        <div className="flex items-center border border-white rounded-md p-2">
            <input
                id={pickerID}
                className="w-0 h-0 opacity-0"
                type="color"
                onChange={handleColorChange}
            />

            <section className="w-full rounded-xl">
                <label htmlFor={pickerID}>
                    <div 
                        style={{ backgroundColor: color }}
                        className=" w-full h-10 rounded-md" 
                    />
                </label>
            </section>
        </div>
    )
}