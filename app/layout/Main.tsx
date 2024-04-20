import HeroSection from "@/Components/HeroSection"
import Navbar from "@/Components/Navbar"
import Discover from "./Discover/Discover"
import Expertise from "./Expertise/Expertise"
import Tech from "./Tech/Tech"
const Main = () => {
    return (
        <div className="px-16 py-4">
            <Navbar />
            <HeroSection />
            <Discover />
            <Expertise />
            <Tech />
        </div>
    )
}

export default Main
