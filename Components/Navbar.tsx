// components/Navbar.js
import React from 'react';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav 
      style={{ 
        backgroundColor: 'rgba(14, 14, 14, 1)', 
        width: '1440px', 
        height: '100px', 
        padding: '0px 148px' 
      }}
      className="flex justify-between items-center mx-auto"
    >
      {/* Logo Section */}
      <div style={{ width: '166.672px', height: '24px' }}>
        <Image src="/image.png" alt="Logo" width={166.672} height={24} objectFit="contain" />
      </div>

      {/* Menu Section */}
      <div className="hidden md:flex space-x-4 items-center">
        <a href="#" className="hover:bg-gray-700 px-3 py-2 text-white">Home</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 text-white">Services</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 text-white">Testimonials</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 text-white">About</a>
        {/* Contact Us with specific styles */}
        <a href="#" style={{ padding: '20px 40px', gap: '10px' }} className="hover:bg-orange-700 text-black bg-white flex justify-center items-center">Contact Us</a>
      </div>
    </nav>
  );
}
