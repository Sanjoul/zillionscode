import React from "react";

export default function Quote() {
    return (
        <div className="gray-card">
            <main>
                <div className="quote-form">
                    <h1>Request a Quote</h1>
                    <p>Your journey with us is marked by open communication and collaborative ideation. We believe in building not just projects but lasting partnerships.</p>

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
                            <input type="checkbox" /> Mainenance Support<br />
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
