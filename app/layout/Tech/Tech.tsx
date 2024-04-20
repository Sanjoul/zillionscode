import TechCard from "@/Components/TechCard"
import Laravel from "@/public/Tech/laravel.svg"
import React from "@/public/Tech/react.svg"
import Next from "@/public/Tech/next.svg"
import Flutter from "@/public/Tech/flutter.svg"
import Python from "@/public/Tech/python.svg"
import Node from "@/public/Tech/node.svg"
import DigitalOcean from "@/public/Tech/digitalocean.svg"
import Figma from "@/public/Tech/figma.svg"
import AWS from "@/public/Tech/aws.svg"


const Tech = () => {
    return (
        <div className="my-10 lg:my-28 h-full text-white text-center p-5 lg:p-14">
            <p className="text-4xl font-bold">Our Tech Stack<span className="font-normal text-primary">{`_`}</span></p>
            <div className=" flex items-center justify-evenly flex-wrap ">
                <TechCard
                    img={Laravel.src}
                />
                <TechCard
                    img={React.src}
                />
                <TechCard
                    img={Next.src}
                />
                <TechCard
                    img={Flutter.src}
                />
                <TechCard
                    img={Python.src}
                />
                <TechCard
                    img={Node.src}
                />
                
            </div>
            <div className=" flex items-center justify-evenly flex-wrap mt-10">
                <TechCard
                    img={DigitalOcean.src}
                />
                <TechCard
                    img={Figma.src}
                />
                <TechCard
                    img={AWS.src}
                />
            </div>
        </div>
    )
}

export default Tech
