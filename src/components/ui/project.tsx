import commentIcon from '../../assets/comment.svg'
import likeIcon from '../../assets/like.svg'

export interface ProjectProps {
    key: string
    owner: string
    avatar: string
    title: string
    description: string
    comments: number
    likes: number
    code: string
    color: string
    language: string
}

export function Project(props: ProjectProps) {
    return (
        <div className="w-full bg-blue-960 flex flex-col rounded-lg">
            <div className={`rounded-lg p-6`} style={{ backgroundColor: props.color }} >
                <div className="flex flex-col gap-2 bg-gray-dark w-full min-h-[300px] max-h-[240px] p-4 rounded-lg overflow-y-hidden">
                    <div className="flex gap-2">
                        <div className="bg-mac-red size-3 rounded-full" />
                        <div className="bg-mac-yellow size-3 rounded-full" />
                        <div className="bg-mac-green size-3 rounded-full" />
                    </div>
                    <p className="whitespace-pre-wrap text-wrap">
                        {props.code}
                    </p>
                </div>
            </div>

            <div className="flex flex-col p-6 gap-1">
                <h2 className="font-bold text-xl">{props.title}</h2>
                <p className="font-medium text-white/50">{props.description}</p>
            </div>

            <div className='flex justify-between items-start px-6 pb-6'>
                <div className='flex gap-8'>
                    <div className='flex size-4 gap-1 items-center'>
                        <img src={commentIcon} alt="" />
                        {props.comments}
                    </div>
                    <div className='flex size-4 gap-1 items-center'>
                        <img src={likeIcon} alt="" />
                        {props.likes}
                    </div>
                </div>
                <div className="flex gap-2">
                    <img className="size-6" src={props.avatar} alt="" />
                    {props.owner}
                </div>
            </div>
        </div>
    )
}