import { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export function Textarea(props: TextAreaProps) {
    return (
        <textarea
            {...props}
            className="hidden md:inline-block w-full h-full resize-none bg-slate-700 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
        />
    )
}