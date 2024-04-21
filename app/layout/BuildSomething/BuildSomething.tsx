const BuildSomething = () => {
    return (
        <div className="mt-10  h-full bg-white text-start w-full">
            <div className=" flex flex-row justify-between flex-wrap">
                <div className="flex flex-col p-5 lg:p-16 gap-6">
                    <p className="lg:text-4xl font-bold text-black " >
                        Let&apos;s Build Something <br />
                        Extraordinary<span className="font-normal text-primary">{`_`}</span>
                    </p>

                    <p className="text-sm">Ready to embark on a digital journey that transcends <br /> the ordinary? Contact us today, and Let&apos;s start crafting <br /> the future together.
                    </p>
                </div>

                <div className=" flex p-5  justify-center items-center relative self-end text-center w-96 h-24  bg-primary   ">
                    <div className=" font-bold text-white text-xl ">Get a Quote!</div>
                </div>
            </div>
        </div>
    )
}

export default BuildSomething
