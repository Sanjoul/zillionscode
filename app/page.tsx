"use client";
import Main from "./layout/Main";
export default function Home() {


  return (
    <>
    <Main/>
{/* 
        <div className="left-[146px] top-[712px] absolute flex-col justify-start items-start inline-flex">
          <div className="py-[100px] flex-col justify-start items-center gap-12 flex">
            <div className="flex-col justify-start items-center gap-[21px] flex">
              <div className="w-[575px] text-center">
                <span className="text-white text-[40px] font-bold font-[Aeonik TRIAL]">
                  Discover the ZillionsCode Advantage
                </span>
                <span className="text-orange-600 text-[40px] font-bold font-[Aeonik TRIAL]">
                  _
                </span>
              </div>

              <div className="w-[544px] text-center text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                Welcome to ZillionsCode, where the fusion of expertise and
                innovation defines a new era in digital solutions. As architects
                of impeccable code and designers of captivating user
                experiences, we invite you to explore a world where your digital
                aspirations become reality.
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-[381px] p-10 bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-center gap-5 inline-flex">
                <div className="self-stretch text-white text-2xl font-normal font-['Aeonik TRIAL']">
                  Crafted Custom, Tailored Solutions
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Our coding virtuosos specialize in Laravel, Next.js, and
                  React.js, sculpting robust and scalable solutions tailored to
                  your unique needs.
                </div>
              </div>
              <div className="w-[382px] p-10 bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-center gap-5 inline-flex">
                <div className="self-stretch text-white text-2xl font-normal font-['Aeonik TRIAL']">
                  User-Centric Design
                  <br />
                  Solutions
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Our coding virtuosos specialize in Laravel, Next.js, and
                  React.js, sculpting robust and scalable solutions tailored to
                  your unique needs.
                </div>
              </div>
              <div className="w-[381px] p-10 bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-center gap-5 inline-flex">
                <div className="self-stretch text-white text-2xl font-normal font-['Aeonik TRIAL']">
                  Ongoing Tech Excellence in Every Byte
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Our coding virtuosos specialize in Laravel, Next.js, and
                  React.js, sculpting robust and scalable solutions tailored to
                  your unique needs.
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1177px] p-[60px] bg-white shadow flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch justify-start items-start gap-[21px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[21px] inline-flex">
                <div className="self-stretch text-orange-600 text-[40px] font-bold font-['Aeonik TRIAL']">
                  Our Expertise
                </div>
                <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Ready to embark on a digital journey that transcends the
                  ordinary? Contact us today, and let's start crafting the
                  future together.
                </div>
              </div>
              <img
                className="w-[36.45px] h-10 relative"
                src="logo_zillions.png"
              />
            </div>
            <div className="self-stretch justify-start items-start gap-1 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    Custom Software Development
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Tailored software solutions to meet specific business needs
                    and requirements.
                  </div>
                </div>
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    Website Development
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Tailored software solutions to meet specific business needs
                    and requirements.
                  </div>
                </div>
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    Mobile App Development
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Systematic development of mobile applications for Android
                    and iOS platforms
                  </div>
                </div>
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    Maintenance Support
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Ensuring the ongoing health and performance of your digital
                    solutions with expert care and timely support.
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    UI UX Design
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Focusing on exceptional user experience to cultivate
                    customer loyalty and enhance the usability of digital
                    products.
                  </div>
                </div>
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    Branding
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Elevating your brand identity with strategic and creative
                    solutions that leave a lasting impression.
                  </div>
                </div>
                <div className="self-stretch h-[225px] p-[50px] bg-neutral-100 border-b-2 flex-col justify-start items-start gap-5 flex">
                  <img
                    className="w-6 h-6 relative origin-top-left "
                    src="iconarrow.png"
                  />
                  <div className="w-[350px] text-black text-2xl font-normal font-['Aeonik TRIAL']">
                    SEO Optimization
                  </div>
                  <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Elevating your brand identity with strategic and creative
                    solutions that leave a lasting impression.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1145px] h-[506px] py-[100px] flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-start items-center gap-[21px]">
              <div className="w-[575px] text-center">
                <span className="text-white text-[40px] font-bold">
                  Our Tech Stack
                </span>
                <span className="text-orange-600 text-[40px] font-bold">_</span>
              </div>
            </div>
            <div className="flex justify-center items-start gap-[130px]">
              <img
                className="w-[66px] h-[66px]"
                src="laravel.png"
                alt="Laravel"
              />
              <img className="w-[66px] h-[66px]" src="react.png" alt="React" />
              <img
                className="w-[66px] h-[66px]"
                src="nextjs.png"
                alt="Next Js"
              />
              <img
                className="w-[66px] h-[66px]"
                src="flutter.png"
                alt="Flutter"
              />
              <img
                className="w-[66px] h-[66px]"
                src="python.png"
                alt="Python"
              />
              <img
                className="w-[66px] h-[66px]"
                src="nodejs.png"
                alt="Node js "
              />
            </div>
            <div className="flex justify-center items-start gap-[130px]">
              <img
                className="w-[66px] h-[66px]"
                src="digitalocean.png"
                alt="Digital Ocean"
              />
              <img className="w-[66px] h-[66px]" src="figma.png" alt="Figma" />
              <img
                className="w-[66px] h-[66px]"
                src="aws.png"
                alt="Amazon Aws"
              />
            </div>
          </div>

          <div className="py-[100px] flex-col justify-start items-center gap-12 flex">
            <div className="flex-col justify-start items-center gap-[21px] flex">
              <div className="w-[536px] mx-auto text-center">
                <span className="text-white text-5xl font-bold">
                  Testimonials: What Our Clients Say
                </span>
                <span className="text-orange-600 text-5xl font-bold">_</span>
              </div>
              <div className="w-[544px] text-center text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                Discover why clients love working with ZillionsCode:
              </div>
            </div>
            <div className="justify-start items-start gap-1 inline-flex">
              <div className="w-[381px] self-stretch p-10 bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-start gap-5 inline-flex">
                <img
                  className="w-[33.69px] h-[24px] relative origin-top-left "
                  src="testimonial.png"
                />
                <div className="self-stretch text-white text-2xl font-normal font-['Aeonik TRIAL']">
                  Amazing CASB to Help With Data Security and DLP Integration
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Lookout CASB is a great product. Out of all the products
                  reviewed, it was the only product that allowed the data to be
                  secured, regardless of location of endpoint or the data
                  itself, as the security follows the data.
                </div>
                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                  <img className="w-12 h-12 rounded-full" src="johndoe1.png" />
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="self-stretch text-white text-opacity-60 text-sm font-bold font-['Aeonik Fono']">
                      John Doe
                    </div>
                    <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                      Degisnation, Company XYZ
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  April 26, 2022
                </div>
              </div>
              <div className="w-[381px] self-stretch p-10 bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-start gap-5 inline-flex">
                <img
                  className="w-[33.69px] h-[24px] relative origin-top-left "
                  src="testimonial.png"
                />
                <div className="self-stretch text-white text-2xl font-normal font-['Aeonik TRIAL']">
                  Amazing CASB to Help With Data Security and DLP Integration
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Lookout CASB is a great product. Out of all the products
                  reviewed, it was the only product that allowed the data to be
                  secured, regardless of location of endpoint or the data
                  itself, as the security follows the data.
                </div>
                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                  <img className="w-12 h-12 rounded-full" src="johndoe1.png" />
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="self-stretch text-white text-opacity-60 text-sm font-bold font-['Aeonik Fono']">
                      John Doe
                    </div>
                    <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                      Degisnation, Company XYZ
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  April 26, 2022
                </div>
              </div>
              <div className="w-[381px] self-stretch p-10 bg-gradient-to-r from-neutral-800 to-neutral-700 border-b-2 flex-col justify-center items-start gap-5 inline-flex">
                <img
                  className="w-[33.69px] h-[24px] relative origin-top-left "
                  src="testimonial.png"
                />
                <div className="self-stretch text-white text-2xl font-normal font-['Aeonik TRIAL']">
                  Amazing CASB to Help With Data Security and DLP Integration
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Lookout CASB is a great product. Out of all the products
                  reviewed, it was the only product that allowed the data to be
                  secured, regardless of location of endpoint or the data
                  itself, as the security follows the data.
                </div>
                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                  <img className="w-12 h-12 rounded-full" src="johndoe1.png" />
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
                    <div className="self-stretch text-white text-opacity-60 text-sm font-bold font-['Aeonik Fono']">
                      John Doe
                    </div>
                    <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                      Degisnation, Company XYZ
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  April 26, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[570px] left-[-1px] top-[3840px] absolute">
          <div className="w-[1440px] h-[400px] left-0 top-[170px] absolute bg-gradient-to-r from-neutral-800 to-neutral-700" />
          <div className="w-[1145px] h-[281px] left-[149px] top-0 absolute bg-white justify-start items-end inline-flex">
            <div className="grow shrink basis-0 p-[60px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-[161px] flex-col justify-start items-start gap-[21px] flex">
                <div className="self-stretch">
                  <span className="text-black text-[40px] font-bold font-['Aeonik TRIAL']">
                    Let's Build Something Extraordinary
                  </span>
                  <span className="text-orange-600 text-[40px] font-bold font-['Aeonik TRIAL']">
                    _
                  </span>
                </div>
                <div className="w-[399px] text-black text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  Ready to embark on a digital journey that transcends the
                  ordinary? Contact us today, and let's start crafting the
                  future together.
                </div>
              </div>
            </div>
            <div className="w-[446px] h-[111px] p-5 bg-orange-600 shadow justify-center items-center gap-2.5 flex">
              <div className="text-white text-xl font-bold font-['Aeonik TRIAL']">
                Get a Quote !
              </div>
            </div>
          </div>
          <div className="w-[1145px] h-[230px] left-[147px] top-[340px] absolute flex-col justify-start items-start gap-[34px] inline-flex">
            <div className="flex-col justify-center items-start gap-4 flex">
              <img className="w-[29.16px] h-8 relative" src="icon.png" />
              <div className="py-2.5 justify-start items-center gap-2.5 inline-flex">
                <div className="w-[550px] text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                  At ZillionsCode, we believe in leaving a lasting impression.
                  Connect with us, and let's create digital magic together!
                </div>
              </div>
            </div>
            <div className="w-[1145px] py-[30px] border-t border-white border-opacity-25 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                  <div className="text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    All right reserverd @ 2024
                  </div>
                </div>
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Privacy Policy
                  </div>
                </div>
                <div className="p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-white text-opacity-60 text-sm font-normal font-['Aeonik Fono']">
                    Terms & Condition
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-[100px] flex">
                <img
                  className="w-[18px] h-[18px] relative"
                  src="twitter_logo.png"
                />
                <img
                  className="w-[18px] h-[18px] relative"
                  src="linkedin.png"
                />
                <img
                  className="w-[18px] h-[18px] relative"
                  src="instagram.png"
                />
                <img
                  className="w-[18px] h-[18px] relative"
                  src="facebook.png"
                />
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}
