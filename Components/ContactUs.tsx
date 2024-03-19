import type { NextPage } from 'next';



const ContactUs:NextPage = () => {
  	return (
    		<div className="w-full relative [background:linear-gradient(90deg,_#252525,_#404040_95%)] flex flex-col items-start justify-center p-[60px] box-border gap-[40px] text-left text-base text-white font-aeonik-trial">
      			<div className="self-stretch flex flex-col items-start justify-center gap-[20px] text-[40px]">
        				<b className="self-stretch relative">
          					<span>Request a Quote</span>
          					<span className="text-tomato">_</span>
        				</b>
        				<div className="self-stretch relative text-[14px] font-aeonik-fono text-gray-300">Your journey with us is marked by open communication and collaborative ideation. We believe in building not just projects but lasting partnerships.</div>
      			</div>
      			<div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-gray-300">
        				<div className="flex-1 bg-gray-100 flex flex-row items-center justify-center p-5 border-[1px] border-solid border-gray-200">
          					<div className="flex-1 relative">Business Email</div>
        				</div>
        				<div className="flex-1 bg-gray-100 flex flex-row items-center justify-center p-5 border-[1px] border-solid border-gray-200">
          					<div className="flex-1 relative">Mobile Number</div>
        				</div>
      			</div>
      			<div className="self-stretch bg-gray-100 flex flex-row items-center justify-center p-5 text-gray-300 border-[1px] border-solid border-gray-200">
        				<div className="flex-1 relative">How can we help you ?</div>
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-center gap-[20px] text-[24px]">
            						<b className="self-stretch relative">Areas of Interest:</b>
            						<div className="self-stretch flex flex-row items-start justify-center gap-[20px] text-base">
              							<div className="flex-1 flex flex-col items-center justify-center gap-[16px]">
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">Custom Software Development</div>
                								</div>
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">Website Development</div>
                								</div>
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">Mobile App Development</div>
                								</div>
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">Maintenance Support</div>
                								</div>
              							</div>
              							<div className="flex-1 flex flex-col items-center justify-center gap-[16px]">
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">UI UX Design</div>
                								</div>
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">Branding</div>
                								</div>
                								<div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                  									<div className="w-5 relative bg-gainsboro box-border h-5 border-[1px] border-solid border-gray-200" />
                  									<div className="relative">SEO Optimization</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
            						<div className="flex flex-row items-center justify-start gap-[20px]">
              							<div className="bg-tomato shadow-[0px_4px_200px_rgba(241,_90,_36,_0.35)] flex flex-row items-center justify-center py-5 px-[100px]">
                								<b className="relative">Send</b>
              							</div>
              							<div className="flex flex-row items-center justify-start py-5 px-[60px] border-[1px] border-solid border-gray-300">
                								<b className="relative">Cancel</b>
              							</div>
            						</div>
            						<div className="self-stretch relative text-[12px] font-aeonik-fono text-gray-300">We're committed to your privacy. ZillionsCode uses the information you provide to us to contact you about our relevant products, and services.</div>
            						</div>
          					</div>);
        				};
        				
        				export default ContactUs;
        				