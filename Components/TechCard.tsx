import Image from "next/image";
const TechCard = ({
    img
}:{
    img: string;
}) => {
    return (
        <div className="mt-14">
            <Image
                src={img}
                alt="tech"
                width={65}
                height={65}
            />
        </div>
    )
}

export default TechCard
