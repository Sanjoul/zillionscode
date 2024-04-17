import DiscoverCard from "@/Components/DiscoverCard"
import { title } from "process"

const Discover = () => {
    return (
        <>
            <div className="my-28">
                <div className="md:text-lg lg:text-4xl  font-bold text-center text-white">
                    <p>
                        Discover the ZillionsCode <br />
                        Advantage<span className="font-normal text-primary">{`_`}</span>
                    </p>
                    <p className="text-gray text-sm  text-center mt-6">
                        Welcome to ZillionsCode, where the fusion of expertise and innovation <br /> defines a new era in digital solutions. As architects of impeccable code <br /> and designers of captivating user experiences, we invite you to explore a <br /> world where your digital aspirations become reality.
                    </p>
                </div>

                <div className=" mt-10 flex justify-center items-center flex-row flex-wrap gap-1 ">
                    <DiscoverCard title="Crafted Custom, Tailored Solutions" description="Our coding virtuosos specialize in Laravel, Next.js, and React.js, sculpting robust and scalable solutions tailored to your unique needs." />
                    <DiscoverCard title="User-Centric Design Solutions" description="Our coding virtuosos specialize in Laravel, Next.js, and React.js, sculpting robust and scalable solutions tailored to your unique needs." />
                    <DiscoverCard title="Ongoing Tech Excellence in Every Byte" description="Our coding virtuosos specialize in Laravel, Next.js, and React.js, sculpting robust and scalable solutions tailored to your unique needs." />
                </div>
            </div>
        </>
    )
}

export default Discover
