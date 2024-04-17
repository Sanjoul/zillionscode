const DiscoverCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}
) => {
    return (
        <div className=" w-96 h-54 bg-gradient-to-r from-neutral-800 to-neutral-700 text-start p-9 ">
            <p className="  text-white font-normal self-stretch text-2xl ">{title}</p>

            <div className="mt-7 text-white text-opacity-60 text-sm font-normal ">
                {description}
            </div>
        </div>
    )
}

export default DiscoverCard
