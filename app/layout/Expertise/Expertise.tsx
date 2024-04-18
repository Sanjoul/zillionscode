import Image from "next/image";
import Z from "@/public/icons/z.svg";
import ExpertiseCard from "@/Components/ExpertiseCard";

const Expertise = () => {
    return (
        <div className="my-10 lg:my-28 h-full bg-white p-5 lg:p-14">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full flex flex-col gap-5 lg:w-2/3">
                    <p className="text-primary text-4xl font-bold">Our Expertise</p>
                    <p className="mt-4 text-sm lg:text-base lg:w-1/2">
                        Ready to embark on a digital journey that transcends the ordinary? Contact us today, and let&apos;s start crafting the future together.
                    </p>
                </div>
                <div className="hidden lg:block ">
                    <Image
                        src={Z}
                        alt="Z"
                    />
                </div>
            </div>
            <div className="mt-8 flex flex-col lg:flex-row gap-1">
                <ExpertiseCard title="Custom Software Development" description="Tailored software solutions to meet specific business needs and requirements." />

                <ExpertiseCard title="UI UX Design" description="Focusing on exceptional user experience to cultivate customer loyalty and enhance the usability of digital products." />
            </div>
            <div className="mt-6 flex flex-col lg:flex-row gap-1">
                <ExpertiseCard title="Website Development" description="Tailored software solutions to meet specific business needs and requirements." />

                <ExpertiseCard title="Branding" description="Elevating your brand identity with strategic and creative solutions that leave a lasting impression." />
            </div>
            <div className="mt-6 flex flex-col lg:flex-row gap-1">
                <ExpertiseCard title="Mobile App Development" description="Systematic development of mobile applications for Android and iOS platforms." />

                <ExpertiseCard title="SEO Optimization" description="Elevating your brand identity with strategic and creatuve solutions that leave a lasting impression." />

            </div>

            <div className="mt-6 flex flex-col lg:flex-row gap-1">
                <ExpertiseCard title="Maintenance Support" description="Ensuring the ongoing health and performance of your digital solutions with expert care and timely support." />
            </div>
        </div>
    );
};

export default Expertise;
