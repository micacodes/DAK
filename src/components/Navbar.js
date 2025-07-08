"use client"; // This is a directive required for using hooks like useState

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import our new icons

const Navbar = () => {
  // State to manage whether the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 py-5 px-6 md:px-10 bg-transparent text-white">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* DAK Logo */}
          <Link href="/">
            <Image 
              src="/images/daklogo.jpeg"
              alt="Debate Association of Kenya Logo"
              width={120}
              height={60}
              className="h-auto"
              priority // Helps load the logo faster
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="font-medium tracking-wide hover:text-dak-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/contact" className="hidden md:block bg-dak-gold text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            Get Involved
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl transition-transform duration-300 ease-in-out">
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {/* This section is conditionally rendered based on the menu state */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 text-white z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={toggleMenu} // Close menu on link click
              className="text-3xl font-semibold hover:text-dak-gold transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={toggleMenu} className="mt-8 bg-dak-gold text-gray-900 font-bold text-xl py-4 px-10 rounded-md hover:bg-yellow-400 transition-colors duration-300">
            Get Involved
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;