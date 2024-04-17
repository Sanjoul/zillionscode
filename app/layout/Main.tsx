import HeroSection from "@/Components/HeroSection"
import Navbar from "@/Components/Navbar"
import Discover from "./Discover/Discover"
const Main = () => {
    return (
        <div className="px-16 py-4">
            <Navbar />
            <HeroSection />
            <Discover />
        </div>
    )
}

export default Main
