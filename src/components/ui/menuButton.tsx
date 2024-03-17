import { Link } from "react-router-dom";
 
interface MenuButtonProps {
    id: number
    selected: boolean
    icon: string
    text: string
	link: string
} 

export function MenuButton(props: MenuButtonProps) {
	return (
		<Link
			className={`flex items-center text-left text-wrap gap-4 group ${props.selected ? "text-white" : "text-white/40 hover:text-gray-light"}`}
			to={`${props.link}`}
		>
			<img
				className={`${props.selected ? "bg-blue-300" : "bg-blue-300/15 group-hover:bg-blue-300/65"} p-4 rounded-2xl`}
				src={props.icon}
				alt=""
			/>
			{props.text}
		</Link>
	);
}
