import Image from "next/image"
import GoogleMeet from "../public/icons/googleMeet.svg"
import Hero from "../public/icons/hero.svg"
import Button from "./Button"
const HeroSection = () => {
  return (
    <>
      <div className="">
        <div className="w-8/12 flex-wrap flex flex-col my-8 bg-gradient-to-r from-neutral-800 to-neutral-800" >

          <div className=" px-28 py-36 flex flex-wrap flex-col gap-8 ">
            <div className="md:text-lg lg:text-4xl  font-semibold text-white">Known For <span className="font-normal text-primary">{`<Best>`}</span> <br />
              Collaborative <br />
              Technology Partner<span className="font-normal text-primary">{`_`}</span>
            </div>
            <div className="text-gray text-sm font-[Aeonik Fono]">
              Your journey with us is marked by open communication <br /> and collaborative ideation. We believe in building not <br /> just projects but lasting partnerships.
            </div>
            <div className="flex flex-row gap-2">
              <Button text="Get a Quote" styling="text-white bg-primary" />
              <Button text="Let's Google Meet" styling="text-white bg-neutral-800 border" img={GoogleMeet.src} />
            </div>
          </div>

          <div className="flex flex-col">
            <Image
              className=" left-[704px] top-[242px] absolute"
              src={Hero}
              alt=""
              quality={100}
              height={350}
              width={600}
            />
            <div className="w-[410px] z-[-10] h-[91px] left-[927px] top-[543px] absolute bg-primary shadow-md" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
