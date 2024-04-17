import { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/icons/logo.svg';
import crossSvg from '../public/icons/cross.svg';
import menuSvg from '../public/icons/menu.svg';
import ContactUs from './ContactUs';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isContactOpen, setIsContactOpen] = useState(false);
    const toggleContactDialog = () => {
        setIsContactOpen(!isContactOpen);
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-black z-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <a href="/">
                            <Image src={Logo} alt="Logo" className="block w-36 lg:w-auto" />
                        </a>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
                        >
                            {isMenuOpen ? (
                                <Image src={crossSvg} alt="Close menu" className="block h-6 w-6" />
                            ) : (
                                <Image src={menuSvg} alt="Open menu" className="block h-6 w-6" />
                            )}
                        </button>
                    </div>

                    <div className="*:text-white *:font-normal *:text-lg *:px-4 *:py-2 hidden gap-4 lg:flex lg:items-center lg:justify-end lg:flex-1">
                        <a href="#">Home</a>
                        <a href="#">Services</a>
                        <a href="#">Testimonials</a>
                        <a href="#">About</a>
                        <div className=" bg-white  cursor-pointer justify-center items-center gap-2.5 flex">
                            <a
                                className="px-4 py-2 text-stone-950 text-xl font-bold font-['Aeonik TRIAL']"
                                onClick={toggleContactDialog}
                            >
                                Contact us
                            </a>

                            {isContactOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                    <ContactUs onClose={toggleContactDialog} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden *:text-white *:font-normal *:text-lg">
                    <a href="#" className="block px-3 py-2 ">Home</a>
                    <a href="#" className="block px-3 py-2 ">About Us</a>
                    <a href="#" className="block px-3 py-2 ">Services</a>
                    <a href="#" className="block px-3 py-2 ">Testimonials</a>
                    <div className="block px-3 py-2  bg-white  cursor-pointer justify-center items-center">
                        <button
                            className="text-stone-950 text-lg font-bold font-['Aeonik TRIAL']"
                            onClick={toggleContactDialog}
                        >
                            Contact us
                        </button>

                        {isContactOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                <ContactUs onClose={toggleContactDialog} />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
