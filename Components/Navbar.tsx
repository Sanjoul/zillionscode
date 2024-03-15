// components/Navbar.js
import React from 'react';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image src="/path-to-your-logo.png" alt="Logo" width={40} height={40} />
        <span className="ml-3 text-xl font-semibold">Your Logo</span>
      </div>

      {/* Menu Section */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
      </div>

      {/* Profile Logo Section */}
      <div className="flex items-center">
        <Image src="/path-to-your-profile-logo.png" alt="Profile Logo" width={40} height={40} />
      </div>
    </nav>
  );
}
