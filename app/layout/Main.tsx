import HeroSection from "@/Components/HeroSection"
import Navbar from "@/Components/Navbar"
import Discover from "./Discover/Discover"
import Expertise from "./Expertise/Expertise"
import Tech from "./Tech/Tech"
import Testimonials from "./Testimonials/Testimonials"
import BuildSomething from "./BuildSomething/BuildSomething"
const Main = () => {
    return (
        <div className="px-24 py-4">
            <Navbar />
            <HeroSection />
            <Discover />
            <Expertise />
            <Tech />
            <Testimonials />
            <BuildSomething />
        </div>
    )
}

export default Main
