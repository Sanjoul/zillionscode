"use client"
import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import ContactUs from "../Components/ContactUs";
import { Navbar } from '@/Components/Navbar';




const Homepage:NextPage = () => {
  	const [isContactUsOpen, setContactUsOpen] = useState(false);
  	
  	const openContactUs = useCallback(() => {
    		setContactUsOpen(true);
  	}, []);
  	
  	const closeContactUs = useCallback(() => {
    		setContactUsOpen(false);
  	}, []);
  	
  	return (<>
    		<div className="w-full relative bg-gray-200 h-[4410px] overflow-hidden text-left text-21xl text-white font-aeonik-trial">
      			<div className="absolute top-[1560px] left-[2px] bg-gray-100 w-[1440px] h-[1478px]" />
      			<div className="absolute top-[137px] left-[0px] [background:linear-gradient(90deg,_#202020,_#404040_95%)] w-[927px] h-[575px]" />
      			<Navbar/>
      			<div className="absolute top-[265px] left-[146px] flex flex-col items-start justify-start gap-[24px]">
        				<div className="w-[462px] relative inline-block">
          					<p className="m-0">
            						<b className="font-aeonik-trial text-white">{`Known for `}</b>
            						<span className="text-orange">
              							<span className="font-aeonik-fono">{`<Best>`}</span>
              							<b className="font-aeonik-fono">{` `}</b>
            						</span>
            						<b>
              							<span>Collaborative</span>
            						</b>
          					</p>
          					<p className="m-0">
            						<b>
              							<span>Technology Partner</span>
              							<span className="text-orange">_</span>
            						</b>
          					</p>
        				</div>
        				<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-600 inline-block">Your journey with us is marked by open communication and collaborative ideation. We believe in building not just projects but lasting partnerships.</div>
        				<div className="flex flex-row items-start justify-start gap-[10px] text-base">
          					<div className="bg-orange shadow-[0px_4px_200px_rgba(241,_90,_36,_0.35)] flex flex-row items-center justify-center py-5 px-[30px] cursor-pointer" onClick={openContactUs}>
            						<b className="relative">Get a Quote !</b>
          					</div>
          					<div className="flex flex-row items-center justify-start p-5 gap-[10px] border-[1px] border-solid border-white">
            						<img className="w-[19.41px] relative h-4 overflow-hidden shrink-0" alt="" src="logos:google-meet.svg" />
            						<b className="relative">Let’s Google Meet</b>
          					</div>
        				</div>
      			</div>
      			<div className="absolute top-[543px] left-[927px] bg-orange shadow-[0px_4px_200px_rgba(241,_90,_36,_0.35)] w-[410px] h-[91px]" />
      			<img className="absolute top-[242px] left-[704px] w-[588px] h-[347px] object-cover" alt="" src="Rectangle 2.png" />
      			<div className="absolute top-[712px] left-[146px] flex flex-col items-start justify-start text-center">
        				<div className="flex flex-col items-center justify-start py-[100px] px-0 gap-[48px]">
          					<div className="flex flex-col items-center justify-start gap-[21px]">
            						<b className="w-[575px] relative inline-block">
              							<span>Discover the ZillionsCode Advantage</span>
              							<span className="text-orange">_</span>
            						</b>
            						<div className="w-[544px] relative text-sm font-aeonik-fono text-gray-600 inline-block">Welcome to ZillionsCode, where the fusion of expertise and innovation defines a new era in digital solutions. As architects of impeccable code and designers of captivating user experiences, we invite you to explore a world where your digital aspirations become reality.</div>
          					</div>
          					<div className="flex flex-row flex-wrap items-start justify-start gap-[4px] text-left text-5xl">
            						<div className="w-[381px] [background:linear-gradient(90deg,_#252525,_#404040_95%)] flex flex-col items-center justify-center p-10 box-border gap-[20px]">
              							<div className="self-stretch relative">Crafted Custom, Tailored Solutions</div>
              							<div className="self-stretch relative text-sm font-aeonik-fono text-gray-600">Our coding virtuosos specialize in Laravel, Next.js, and React.js, sculpting robust and scalable solutions tailored to your unique needs.</div>
            						</div>
            						<div className="w-[382px] [background:linear-gradient(90deg,_#252525,_#404040_95%)] flex flex-col items-center justify-center p-10 box-border gap-[20px]">
              							<div className="self-stretch relative">
                								<p className="m-0">User-Centric Design</p>
                								<p className="m-0">Solutions</p>
              							</div>
              							<div className="self-stretch relative text-sm font-aeonik-fono text-gray-600">Our coding virtuosos specialize in Laravel, Next.js, and React.js, sculpting robust and scalable solutions tailored to your unique needs.</div>
            						</div>
            						<div className="w-[381px] [background:linear-gradient(90deg,_#202020,_#404040_95%)] flex flex-col items-center justify-center p-10 box-border gap-[20px]">
              							<div className="self-stretch relative">
                								<p className="m-0">{`Ongoing Tech Excellence in `}</p>
                								<p className="m-0">Every Byte</p>
              							</div>
              							<div className="self-stretch relative text-sm font-aeonik-fono text-gray-600">Our coding virtuosos specialize in Laravel, Next.js, and React.js, sculpting robust and scalable solutions tailored to your unique needs.</div>
            						</div>
          					</div>
        				</div>
        				<div className="w-[1145px] bg-white shadow-[0px_4px_200px_rgba(241,_90,_36,_0.35)] flex flex-col items-start justify-start p-[60px] box-border gap-[30px] text-left text-orange">
          					<div className="self-stretch flex flex-row items-start justify-start gap-[21px]">
            						<div className="flex-1 flex flex-col items-start justify-start gap-[21px]">
              							<b className="self-stretch relative">Our Expertise</b>
              							<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Ready to embark on a digital journey that transcends the ordinary? Contact us today, and let's start crafting the future together.</div>
                								</div>
                								<img className="w-[36.45px] relative h-10" alt="" src="Group 2.svg" />
                								</div>
                								<div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-5xl text-black">
                  									<div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">Custom Software Development</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Tailored software solutions to meet specific business needs and requirements.</div>
                    										</div>
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">Website Development</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Tailored software solutions to meet specific business needs and requirements.</div>
                    										</div>
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">Mobile App Development</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Systematic development of mobile applications for Android and iOS platforms</div>
                    										</div>
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">Maintenance Support</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Ensuring the ongoing health and performance of your digital solutions with expert care and timely support.</div>
                    										</div>
                  									</div>
                  									<div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">UI UX Design</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Focusing on exceptional user experience to cultivate customer loyalty and enhance the usability of digital products.</div>
                    										</div>
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">Branding</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Elevating your brand identity with strategic and creative solutions that leave a lasting impression.</div>
                    										</div>
                    										<div className="self-stretch bg-whitesmoke h-[225px] flex flex-col items-start justify-start p-[50px] box-border gap-[20px]">
                      											<img className="w-6 relative h-6 overflow-hidden shrink-0 object-contain" alt="" src="iconoir:arrow-up.png" />
                      											<div className="w-[350px] relative inline-block">SEO Optimization</div>
                      											<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Elevating your brand identity with strategic and creative solutions that leave a lasting impression.</div>
                    										</div>
                  									</div>
                								</div>
                								</div>
                								<div className="w-[1145px] flex flex-col items-center justify-center py-[100px] px-0 box-border gap-[48px]">
                  									<div className="flex flex-col items-center justify-start">
                    										<b className="w-[575px] relative inline-block">
                      											<span>Our Tech Stack</span>
                      											<span className="text-orange">_</span>
                    										</b>
                  									</div>
                  									<div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[80px_130px]">
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="mdi:laravel.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="ri:reactjs-fill.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="teenyicons:nextjs-outline.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="material-symbols:flutter.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="teenyicons:python-outline.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="mdi:nodejs.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="gg:digitalocean.svg" />
                    										<img className="w-[66px] relative h-[66px] overflow-hidden shrink-0" alt="" src="solar:figma-outline.svg" />
                    										<img className="w-[70.48px] relative h-[66px] overflow-hidden shrink-0" alt="" src="mdi:aws.svg" />
                  									</div>
                								</div>
                								<div className="flex flex-col items-center justify-start py-[100px] px-0 gap-[48px]">
                  									<div className="flex flex-col items-center justify-start gap-[21px]">
                    										<b className="w-[536px] relative inline-block">
                      											<span>Testimonials: What Our Clients Say</span>
                      											<span className="text-orange">_</span>
                    										</b>
                    										<div className="w-[544px] relative text-sm font-aeonik-fono text-gray-600 inline-block">Discover why clients love working with ZillionsCode:</div>
                  									</div>
                  									<div className="flex flex-row flex-wrap items-start justify-start gap-[4px] text-left text-sm text-gray-600 font-aeonik-fono">
                    										<div className="self-stretch w-[381px] [background:linear-gradient(90deg,_#202020,_#404040_95%)] flex flex-col items-start justify-center p-10 box-border gap-[20px]">
                      											<img className="w-[33.69px] relative h-6" alt="" src="“.svg" />
                      											<div className="self-stretch relative text-5xl font-aeonik-trial text-white">Amazing CASB to Help With Data Security and DLP Integration</div>
                      											<div className="self-stretch relative">Lookout CASB is a great product. Out of all the products reviewed, it was the only product that allowed the data to be secured, regardless of location of endpoint or the data itself, as the security follows the data.</div>
                      											<div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                        												<img className="w-12 relative rounded-[50%] h-12 object-cover" alt="" src="Ellipse 1.png" />
                        												<div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                          													<b className="self-stretch relative">John Doe</b>
                          													<div className="self-stretch relative">Degisnation, Company XYZ</div>
                        												</div>
                      											</div>
                      											<div className="self-stretch relative">April 26, 2022</div>
                    										</div>
                    										<div className="self-stretch w-[381px] [background:linear-gradient(90deg,_#202020,_#404040_95%)] flex flex-col items-start justify-center p-10 box-border gap-[20px]">
                      											<img className="w-[33.69px] relative h-6" alt="" src="“.svg" />
                      											<div className="self-stretch relative text-5xl font-aeonik-trial text-white">Amazing CASB to Help With Data Security and DLP Integration</div>
                      											<div className="self-stretch relative">Lookout CASB is a great product. Out of all the products reviewed, it was the only product that allowed the data to be secured, regardless of location of endpoint or the data itself, as the security follows the data.</div>
                      											<div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                        												<img className="w-12 relative rounded-[50%] h-12 object-cover" alt="" src="Ellipse 1.png" />
                        												<div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                          													<b className="self-stretch relative">John Doe</b>
                          													<div className="self-stretch relative">Degisnation, Company XYZ</div>
                        												</div>
                      											</div>
                      											<div className="self-stretch relative">April 26, 2022</div>
                    										</div>
                    										<div className="self-stretch w-[381px] [background:linear-gradient(90deg,_#202020,_#404040_95%)] flex flex-col items-start justify-center p-10 box-border gap-[20px]">
                      											<img className="w-[33.69px] relative h-6" alt="" src="“.svg" />
                      											<div className="self-stretch relative text-5xl font-aeonik-trial text-white">Amazing CASB to Help With Data Security and DLP Integration</div>
                      											<div className="self-stretch relative">Lookout CASB is a great product. Out of all the products reviewed, it was the only product that allowed the data to be secured, regardless of location of endpoint or the data itself, as the security follows the data.</div>
                      											<div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
                        												<img className="w-12 relative rounded-[50%] h-12 object-cover" alt="" src="Ellipse 1.png" />
                        												<div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                          													<b className="self-stretch relative">John Doe</b>
                          													<div className="self-stretch relative">Degisnation, Company XYZ</div>
                        												</div>
                      											</div>
                      											<div className="self-stretch relative">April 26, 2022</div>
                    										</div>
                  									</div>
                								</div>
                								</div>
                								<div className="absolute bottom-[0px] left-[-1px] w-[1440px] h-[570px] text-black">
                  									<div className="absolute bottom-[0px] left-[0px] [background:linear-gradient(90deg,_#202020,_#404040_95%)] w-[1440px] h-[400px]" />
                  									<div className="absolute bottom-[289px] left-[149px] bg-white w-[1145px] flex flex-row items-end justify-start">
                    										<div className="flex-1 flex flex-col items-start justify-start p-[60px]">
                      											<div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                        												<b className="self-stretch relative">
                          													<span>Let's Build Something Extraordinary</span>
                            														<span className="text-orange">_</span>
                            														</b>
                            														<div className="w-[399px] relative text-sm font-aeonik-fono text-gray-500 inline-block">Ready to embark on a digital journey that transcends the ordinary? Contact us today, and let's start crafting the future together.</div>
                              															</div>
                              															</div>
                              															<div className="w-[446px] bg-orange shadow-[0px_4px_200px_rgba(241,_90,_36,_0.35)] h-[111px] flex flex-row items-center justify-center p-5 box-border text-[20px] text-white">
                                																<b className="relative">Get a Quote !</b>
                              															</div>
                              															</div>
                              															<div className="absolute bottom-[0px] left-[147px] flex flex-col items-start justify-start gap-[34px] text-sm text-gray-600 font-aeonik-fono">
                                																<div className="flex flex-col items-start justify-center gap-[16px]">
                                  																	<img className="w-[29.16px] relative h-8" alt="" src="Group 2.svg" />
                                  																	<div className="flex flex-row items-center justify-start py-2.5 px-0">
                                    																		<div className="w-[550px] relative inline-block shrink-0">At ZillionsCode, we believe in leaving a lasting impression. Connect with us, and let's create digital magic together!</div>
                                    																		</div>
                                  																	</div>
                                  																	<div className="w-[1145px] box-border flex flex-row items-center justify-between py-[30px] px-0 border-t-[1px] border-solid border-gray-700">
                                    																		<div className="flex flex-row items-center justify-start gap-[4px]">
                                      																			<div className="flex flex-row items-center justify-start py-2.5 pr-2.5 pl-0">
                                        																				<div className="relative">All right reserverd @ 2024</div>
                                      																			</div>
                                      																			<div className="flex flex-row items-center justify-center p-2.5">
                                        																				<div className="relative">Privacy Policy</div>
                                      																			</div>
                                      																			<div className="flex flex-row items-center justify-center p-2.5">
                                        																				<div className="relative">{`Terms & Condition`}</div>
                                      																			</div>
                                    																		</div>
                                    																		<div className="flex flex-row items-center justify-start gap-[100px]">
                                      																			<img className="w-[18px] relative h-[18px] overflow-hidden shrink-0" alt="" src="pajamas:x.svg" />
                                      																			<img className="w-[18px] relative h-[18px]" alt="" src="Vector.svg" />
                                      																			<img className="w-5 relative h-5" alt="" src="Vector.svg" />
                                      																			<img className="w-5 relative h-[19.95px]" alt="" src="Vector.svg" />
                                    																		</div>
                                  																	</div>
                                																</div>
                              															</div>
                              															</div>
                              															</>);
                            														};
                            														
                            														export default Homepage;
                            														