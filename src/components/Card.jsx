import { MapPin, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";

function Card({ dataPack }) {
    const { id, name, price, rating, reviewed, images, category, location, services, type } = dataPack;

    return (
        <div className="shadow-[0_0_6px_0_rgba(0,0,0,0.12)] w-[250px] h-[350px] rounded-[12px] center border-[rgba(0,0,0,01)] " key={id}>
            <div className="w-full h-full rounded-[8px] flex flex-col overflow-hidden bg-white">
                {/* Image */}
                <div className="w-full h-[150px] relative">
                    <img
                        className="w-full h-full object-cover"
                        src={`${images[0]}`}
                        alt={name}
                    />
                    {/* adding favrout list */}
                    <button className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm cursor-pointer hover:scale-110 transition-all">
                        {/* swap with your icon */}
                        <svg className="w-4 md:w-5 h-4 md:h-5 " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M12 21s-7-4.35-9-7.5A5.5 5.5 0 0 1 6 4.5 5.5 5.5 0 0 1 12 8a5.5 5.5 0 0 1 6-3.5 5.5 5.5 0 0 1 3 9.0C19 16.65 12 21 12 21z" />
                        </svg>
                    </button>

                    {/* type */}
                    <div className="absolute top-3 left-3 bg-white/90 rounded-lg p-2 shadow-sm cursor-pointer hover:scale-110 transition-all">
                        <p className="w-[auto] h-4 md:h-5 px-3 md:px-4 text-sm md:text-md center">
                            {type}
                        </p>
                    </div>

                </div>

                {/* Content */}
                <div className="px-4 pt-1 flex flex-col justify-between h-full">
                    {/* first part */}
                    <div className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-1">
                            <Star size={12} fill="#002B11" />
                            <span className="text-sm md:text-xs font-semibold leading-tight">
                                {rating}
                            </span>
                            <span className="text-xs md:text-xs text-gray-500 leading-tight">
                                ({reviewed} reviews)
                            </span>
                        </div>
                        <div>
                            <span className="text-xs md:text-xs px-3 py-1 bg-gray-100 border border-gray-200 rounded-full">
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* Title + location */}
                    <div className="pt-1">
                        <h2 className="text-sm md:text-md font-semibold leading-tight">
                            {name}
                        </h2>

                        <span className="flex items-center text-xs md:text-xs gap-1 text-gray-500">
                            <MapPin size={12} />
                            <span className="leading-tight">{location}</span>
                        </span>
                    </div>

                    {/* service area  */}
                    <div className="relative h-[68px] overflow-hidden mt-2">
                        <div className="flex flex-wrap gap-2">
                            {services.map((service, ind) => {
                                const IconComponent = LucideIcons[service.icon];
                                return (
                                    <span
                                        key={ind}
                                        className="flex items-center gap-2 text-xs md:text-xs px-3 py-1 bg-gray-100 border border-gray-200 rounded-full"
                                    >
                                        {IconComponent && <IconComponent size={14} strokeWidth={2} />}
                                        {service.label}
                                    </span>
                                );
                            })}
                        </div>

                        {/* Fade-out overlay */}
                        <div className="center absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                    </div>

                    {/* Optional: footer (price / CTA) area - keep if needed */}
                    <div className="flex items-center justify-between mb-1 mt-[auto]">
                        <div className="flex flex-col items-start">
                            <p className="font-bold text-lg md:text-xl">৳ {price}</p>
                            <p className="capitalize text-xs md:text-sm text-gray-500">per night</p>
                        </div>
                        <button className="capitalize bg-emerald-700 text-white rounded-full px-4 py-2 text-xs md:text-sm">
                            view details
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
