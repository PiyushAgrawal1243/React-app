export default function GameCard({ title, description, image}: GameCard){


    return (
        <div className="w-100 h-100 shadow flex flex-col bg-white gap-3 justify-center items-center rounded-md p-3 text-center ">
            <span className="text-black font-bold text-4xl ">{title}</span>
            <img className="w-52" src={image} />
            <p>{description}</p>
        </div>
    )
}


export interface GameCard {
    title:string,
    description:string,
    image:string
}