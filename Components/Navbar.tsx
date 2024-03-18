"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ContactUs from './ContactUs'; // Import the ContactUs component

export const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactDialog = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <nav 
      style={{ 
        backgroundColor: 'rgba(14, 14, 14, 1)', 
        width: '1440px', 
        height: '100px', 
        padding: '0px 148px' 
      }}
      className="flex justify-between items-center mx-auto relative" // Added relative class
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
        {/* Open Contact Us component on click */}
        <button onClick={toggleContactDialog} style={{ padding: '20px 40px', gap: '10px' }} className="hover:bg-orange-700 text-black bg-white flex justify-center items-center">Contact Us</button>
      </div>
      
      {/* Render ContactUs component conditionally */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ContactUs onClose={toggleContactDialog} />
        </div>
      )}
    </nav>
  );
}
