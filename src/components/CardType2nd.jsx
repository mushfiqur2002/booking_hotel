import * as LucideIcons from "lucide-react";

function CardType2nd({ item }) {
    const { id, name, image, description, icon } = item
    let IconComponent = LucideIcons[icon]
    return (
        <div className="w-[275px] md:w-[300px] h-[180px] md:h-[200px] rounded-lg overflow-hidden relative">
            <img
                className="w-full h-full object-cover"
                src={`${image}`}>
            </img>
            <div className="absolute bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-start justify-end p-4 flex-col">
                <h1 className="text-base-100 text-lg md:text-xl font-bold flex items-center gap-1">{IconComponent && <IconComponent size={16} strokeWidth={2} />} {name}</h1>
                <p className="text-gray-300 text-sm md:text-md">{description}</p>
            </div>
        </div>
    )
}

export default CardType2nd
