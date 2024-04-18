import Image from "next/image";
import arrow from "../public/icons/arrow.svg";

const ExpertiseCard = ({
    title,
    description,
}:{
    title: string,
    description: string
}) => {
    return (
        <div className="p-6  lg:p-12 flex flex-col gap-4 bg-custom-white mt-6 lg:mt-0 lg:w-1/2 ">
            <div className="w-8 h-8 lg:w-10 lg:h-10">
                <Image
                    src={arrow}
                    alt="arrow"
                />
            </div>
            <div>
                <p className="text-2xl font-semibold">{title}</p>
            </div>
            <div>
                <p className="text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default ExpertiseCard;
