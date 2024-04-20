import TestimonialsCard from "@/Components/TestimonialsCard"
import Client from "@/public/icons/client.svg"

const Testimonials = () => {
    return (
        <div className="mt-10  h-full text-white text-center">
            <p className="text-2xl md:text-2xl lg:text-4xl font-bold">Testimonials: What Our <br /> Clients Say<span className="font-normal text-primary">{`_`}</span></p>
            <p className="mt-6 text-base font-normal ">Discover why clients love working with ZillionsCode:</p>

            <div className="flex flex-row justify-center items-center flex-wrap  gap-1">
                <TestimonialsCard
                    title="Amazing CASB to Help With Data Security and DLP Integration"

                    description="Lookout CASB is a great product. Out of all the products reviewed, it was the only product that allowed the data to be secured, regardless of location of endpoint or the data itself, as the security follows the data."

                    clientName="John Doe"

                    clientImage={Client.src}

                    clientDesignation="Designation, Company XYZ"

                    date="April 26, 2022"

                />
                <TestimonialsCard
                    title="Amazing CASB to Help With Data Security and DLP Integration"

                    description="Lookout CASB is a great product. Out of all the products reviewed, it was the only product that allowed the data to be secured, regardless of location of endpoint or the data itself, as the security follows the data."

                    clientName="John Doe"

                    clientImage={Client.src}

                    clientDesignation="Designation, Company XYZ"

                    date="April 26, 2022"

                />
                <TestimonialsCard
                    title="Amazing CASB to Help With Data Security and DLP Integration"

                    description="Lookout CASB is a great product. Out of all the products reviewed, it was the only product that allowed the data to be secured, regardless of location of endpoint or the data itself, as the security follows the data."

                    clientName="John Doe"

                    clientImage={Client.src}

                    clientDesignation="Designation, Company XYZ"

                    date="April 26, 2022"

                />
            </div>

        </div>
    )
}

export default Testimonials
