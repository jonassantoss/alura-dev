interface InputProps {
    type: string
    placeholder: string
    isRequired: boolean
}

export function Input({ type, placeholder, isRequired }: InputProps) {
    return (
        <input
                className="hidden md:inline-block w-full bg-slate-700 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
                type={type}
                placeholder={placeholder}
                required={isRequired}
        />
    )
}