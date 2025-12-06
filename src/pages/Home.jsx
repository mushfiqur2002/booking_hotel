import Footer from "../components/Footer"
import HeroSection from "../components/section/HeroSection"
import PopularHotelSection from "../components/section/PopularHotelSection"
import PropertySection from "../components/section/PropertySection"
import RecommendedSection from "../components/section/RecommendedSection"

function Home() {
    return (
        <div>
            <HeroSection />
            <PopularHotelSection />
            <PropertySection />
            <RecommendedSection />
        </div>
    )
}

export default Home
