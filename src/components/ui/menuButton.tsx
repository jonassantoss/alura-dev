import { Link } from "react-router-dom";
 
interface MenuButtonProps {
    id: number
    selected: boolean
    icon: string
    text: string
	link: string
    onClick: (id: number) => void
} 

export function MenuButton(props: MenuButtonProps) {
	return (
		<Link
			className={`flex items-center text-left text-wrap gap-4 ${props.selected ? "text-white" : "text-white/40"}`}
			to={`${props.link}`}
            onClick={() => props.onClick(props.id)}
		>
			<img
				className={`${
					props.selected ? "bg-blue-500" : "bg-blue-300/15"
				} p-4 rounded-2xl`}
				src={props.icon}
				alt=""
			/>
			{props.text}
		</Link>
	);
}
