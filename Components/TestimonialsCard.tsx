import Image from "next/image"
import Quotation from "@/public/icons/quotation.svg"
const TestimonialsCard = ({
    title,
    description,
    clientName,
    clientImage,
    clientDesignation,
    date
}:{
    title: string;
    description: string;
    clientName: string;
    clientImage: string;
    clientDesignation: string;
    date: string;
}) => {
    return (
        <div className=" mt-10 w-96 h-54 bg-gradient-to-r from-neutral-800 to-neutral-700 text-start p-5 lg:p-9 ">
            <div className="flex flex-col gap-6">
                <div className="flex justify-start items-start">
                    <Image src={Quotation} alt="Quotation" />
                </div>
                <p className="  text-white font-normal text-lg  md:text-lg lg:text-2xl ">
                    {title}
                </p>

                <p className=" text-white text-sm ">
                    {description}
                </p>

                <div className="flex flex-col md:flex-row lg:flex-row gap-6 ">
                    <div className="">
                        <Image
                        src={clientImage}
                        alt={clientName}
                        width={50}
                        height={50}
                        className="rounded-full"
                        />
                    </div>
                    <div className=" flex flex-col">
                        <p className="text-white font-normal text-sm">{clientName}</p>
                        <p className="text-white font-normal text-sm">{clientDesignation}</p>
                    </div>
                </div>

                <div className="">
                    <p className="text-white font-normal text-sm">{date}</p>
                </div>
            </div>

        </div>
    )
}

export default TestimonialsCard
