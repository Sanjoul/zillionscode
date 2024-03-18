import React from "react";

export default function ContactUs() {
    return (
        <main className="flex w-3/4 p-12 flex-col justify-center items-start gap-12 bg-gradient-to-r from-gray-900 to-gray-600">
            <div>
                <div className="quote-info flex flex-col justify-center items-start gap-4">
                    <h1 className="text-white font-Aeonik font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                        Request a Quote<span style={{ color: "var(--Orange, #F15A24)" }}>_</span>
                    </h1>
                    <p className="text-white text-opacity-75 font-Aeonik-Fono text-base">
                        Your journey with us is marked by open communication and collaborative ideation. We believe in building not just projects but lasting partnerships.
                    </p>
                </div>

                <form action="/submit-quote" method="post" className="w-full">
                    <div className="flex items-center gap-4">
                        <input type="email" placeholder="Business Email" required className="input-field" />
                        <input type="tel" placeholder="Mobile Number" required className="input-field" />
                    </div>
                    <textarea placeholder="How can we help you?" required className="textarea-field" />
                    <div className="checkbox-group">
                        <h1 className="text-white font-Aeonik-TRIAL text-xl font-bold">Areas of Interest:</h1>
                        <div className="flex flex-col gap-1">
                        <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> Custom Software Development<br />
                            <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> UI/UX Design<br />
                            <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> Website Development<br />
                            <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> Branding<br />
                            <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> Mobile App Development<br />
                            <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> SEO Optimization<br />
                            <input type="checkbox" className="text-white font-Aeonik-TRIAL text-base font-normal"/> Maintenance Support<br />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button type="submit" className="button-primary">Send</button>
                        <button type="reset" className="button-secondary">Cancel</button>
                        <small className="text-white text-opacity-75">
                            We're committed to your privacy. XYZBrand uses the information you provide to us to contact you about our relevant products and services.
                        </small>
                    </div>
                </form>
            </div>
        </main>
    );
}
