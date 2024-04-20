import HeroSection from "@/Components/HeroSection"
import Navbar from "@/Components/Navbar"
import Discover from "./Discover/Discover"
import Expertise from "./Expertise/Expertise"
import Tech from "./Tech/Tech"
import Testimonials from "./Testimonials/Testimonials"
const Main = () => {
    return (
        <div className="px-16 py-4">
            <Navbar />
            <HeroSection />
            <Discover />
            <Expertise />
            <Tech />
            <Testimonials />
        </div>
    )
}

export default Main
