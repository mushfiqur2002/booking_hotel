import { ChevronDown } from "lucide-react"
import SearchFilter from "../SearchFilter"
import SearchInputFiled from "../SearchInputFiled"
import { useState } from "react"


function HeroSection() {
    const [clicked, setClicked] = useState(false)

    return (
        <div className="w-full h-auto bg-[#B2FF1A] shadow-[0px_0px_12px_0px_rgba(0,_43,_17,_0.2)] rounded-xl mt-4 py-8 md:py-12 center flex-col gap-4">
            <SearchInputFiled />
            <div className="center gap-4 pt-2 md:pt-0 ">
                <p className="uppercase text-lg md:text-[clamp(1.5rem,2vw,2.25rem)] font-bold md:py-4">fliter your destiny</p>
                <span
                    className="flex md:hidden bg-base-100 rounded"
                    onClick={() => setClicked(!clicked)}>
                    <ChevronDown size={24} />
                </span>
            </div>
            <SearchFilter className='hidden md:flex' clicked={clicked} />
        </div>
    )
}

export default HeroSection
