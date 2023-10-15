"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div>
          <span className="text-2xl font-bold">D Bijayashakti Patro</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link legacyBehavior href="#">
                <a className="text-white hover:text-gray-300 transition duration-300">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#about">
                <a className="text-white hover:text-gray-300 transition duration-300">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#skills">
                <a className="text-white hover:text-gray-300 transition duration-300">Skills</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#projects">
                <a className="text-white hover:text-gray-300 transition duration-300">Projects</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link legacyBehavior href="#">
                <a className="text-white hover:text-gray-300 transition duration-300">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#about">
                <a className="text-white hover:text-gray-300 transition duration-300">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#skills">
                <a className="text-white hover:text-gray-300 transition duration-300">Skills</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#projects">
                <a className="text-white hover:text-gray-300 transition duration-300">Projects</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
