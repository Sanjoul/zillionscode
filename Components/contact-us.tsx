import React from "react";
interface ContactUsProps {
  onClose: () => void;
}
const ContactUs: React.FC<ContactUsProps> = ({ onClose }) => {
  return (
    <div className="w-[650px] h-[791px] p-[60px] bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-start gap-10 inline-flex">
      <div className="self-stretch h-[114px] flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch">
          <span className="text-white text-[40px] font-bold font-['Aeonik TRIAL']">
            Request a Quote
          </span>
          <span className="text-orange-600 text-[40px] font-bold font-['Aeonik TRIAL']">
            _
          </span>
        </div>
        <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
          Your journey with us is marked by open communication and collaborative
          ideation. We believe in building not just projects but lasting
          partnerships.
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 h-[58px] p-5 bg-white bg-opacity-20 border border-white border-opacity-25 justify-center items-center gap-2.5 flex">
          <div className="grow shrink basis-0 text-white text-opacity-60 text-base font-normal font-['Aeonik TRIAL']">
            Business Email
          </div>
        </div>
        <div className="grow shrink basis-0 h-[58px] p-5 bg-white bg-opacity-20 border border-white border-opacity-25 justify-center items-center gap-2.5 flex">
          <div className="grow shrink basis-0 text-white text-opacity-60 text-base font-normal font-['Aeonik TRIAL']">
            Mobile Number
          </div>
        </div>
      </div>
      <div className="self-stretch p-5 bg-white bg-opacity-20 border border-white border-opacity-25 justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-white text-opacity-60 text-base font-normal font-['Aeonik TRIAL']">
          How can we help you ?
        </div>
      </div>
      <div className="self-stretch h-[175px] flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch text-white text-2xl font-bold font-['Aeonik TRIAL']">
          Areas of Interest:
        </div>
        <div className="self-stretch justify-center items-start gap-5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                Custom Software Development
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                Website Development
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                Mobile App Development
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                Maintenance Support
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                UI UX Design
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                Branding
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-5 h-5 bg-zinc-300 bg-opacity-20 border border-white border-opacity-25" />
              <div className="text-white text-base font-normal font-['Aeonik TRIAL']">
                SEO Optimization
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[106px] flex-col justify-center items-start gap-5 flex">
        <div className="justify-start items-center gap-5 inline-flex">
          <button className="px-[100px] py-5 bg-orange-600 shadow justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-bold font-['Aeonik TRIAL']">
              Send
            </div>
          </button>
          <button
            className="px-[60px] py-5 border border-white border-opacity-60 justify-start items-center gap-2.5 flex"
            onClick={onClose} // Here we bind the onClose function
          >
            <div className="text-white text-base font-bold font-['Aeonik TRIAL']">
              Cancel
            </div>
          </button>
        </div>
        <div className="self-stretch text-white text-opacity-60 text-xs font-normal font-['Aeonik Fono']">
          We&apos;re committed to your privacy. ZillionsCode uses the information you
          provide to us to contact you about our relevant products, and
          services.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
