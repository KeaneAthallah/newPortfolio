"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function Navbar() {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-90 backdrop-blur-lg shadow-sm dark:bg-black/70 dark:shadow-white/20"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href={"/"}>
          <Image
            alt="Logo"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-36 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 font-Ovo text-lg ${
            isScroll
              ? "text-gray-800 dark:text-white"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About Me</Link>
          </li>
          <li>
            <Link href={"#services"}>Services</Link>
          </li>
          <li>
            <Link href={"#work"}>My Work</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact Me</Link>
          </li>
        </ul>

        {/* Actions (Dark Mode & Contact Button) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle Dark Mode"
              className="w-6 h-6"
            />
          </button>

          {/* Contact Button */}
          <Link
            href={"#contact"}
            className="hidden md:flex items-center gap-2 px-6 py-2 bg-[#88c0d0] text-black dark:bg-[#4c566a] dark:text-white rounded-full font-Ovo font-semibold hover:bg-[#81a1c1] dark:hover:bg-[#5e81ac] transition-colors duration-300"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3 h-3"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Open Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-8 fixed top-0 right-0 w-64 h-screen bg-[#e5e9f0] dark:bg-[#434c5e] transform translate-x-full transition-transform duration-500 shadow-lg rounded-l-2xl"
        >
          {/* Close Button */}
          <div className="absolute right-4 top-4" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Menu Items */}
          <li>
            <Link
              href="/"
              className="font-Ovo text-xl font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-Ovo text-xl font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="font-Ovo text-xl font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="font-Ovo text-xl font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              My Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-Ovo text-xl font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
