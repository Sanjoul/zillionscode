import React from "react";

export default function ContactUs() {
    return (
        <div className="flex w-650px p-60 flex-col justify-center items-start gap-40">
            <main className="w-full bg-gradient-to-r from-gray-900 to-gray-600 p-60 gap-40">
                <div>
                    <div className="quote-info flex flex-col justify-center items-start gap-20">
                        <h1 className="text-white font-Aeonik font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Request a Quote<span style={{ color: "var(--Orange, #F15A24)" }}>_</span>
                        </h1>
                        <p className="text-gray-500 font-Aeonik-Fono text-sm sm:text-base mt-5">
                            Your journey with us is marked by open communication and collaborative ideation. We believe in building not just projects but lasting partnerships.
                        </p>
                    </div>

                    <form action="/submit-quote" method="post">
                        <input type="email" placeholder="Business Email" required />
                        <input type="tel" placeholder="Mobile Number" required />
                        <textarea placeholder="How can we help you?" required />

                        <label>Areas of Interest:</label>
                        <div className="checkbox-group">
                            <input type="checkbox" /> Custom Software Development<br />
                            <input type="checkbox" /> UI/UX Design<br />
                            <input type="checkbox" /> Website Development<br />
                            <input type="checkbox" /> Branding<br />
                            <input type="checkbox" /> Mobile App Development<br />
                            <input type="checkbox" /> SEO Optimization<br />
                            <input type="checkbox" /> Maintenance Support<br />
                        </div>

                        <button type="submit">Send</button>
                        <button type="reset">Cancel</button>

                        <small>We're committed to your privacy. XYZBrand uses the information you provide to us to contact you about our relevant products and services.</small>
                    </form>
                </div>
            </main>
        </div>
    );
}
