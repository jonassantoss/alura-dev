interface MenuButtonProps {
    key: number
    id: number
    selected: boolean
    icon: string
    text: string
	mobile: boolean
    onClick: (id: number) => void
} 

export function MenuButton(props: MenuButtonProps) {
	return (
		<a
			className={`flex items-center text-center text-wrap gap-4 ${
				props.selected ? "text-white" : "text-white/40"
			} ${props.mobile ? "flex-row-reverse" : "row"}`}
			href="#"
            onClick={() => props.onClick(props.id)}
		>
			<img
				className={`${
					props.selected ? "bg-blue-500" : "bg-blue-900/30"
				} p-4 rounded-2xl`}
				src={props.icon}
				alt=""
			/>
			{props.text}
		</a>
	);
}
