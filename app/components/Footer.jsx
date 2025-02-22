"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function Footer() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <footer className="mt-20 bg-white dark:bg-gray-900 py-10">
      {/* Footer Content */}
      <div className="text-center">
        {/* Logo */}
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Logo"
          className="w-36 mx-auto mb-6"
        />

        {/* Contact Information */}
        <div className="flex items-center justify-center gap-2 mx-auto mb-8">
          <Image src={assets.mail_icon} alt="Email Icon" className="w-6 h-6" />
          <span className="text-gray-700 dark:text-gray-300 text-sm">
            keane.athall@gmail.com
          </span>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-300 dark:border-gray-700 mx-[10%] mt-8 pt-6">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
            ©2025 Keane Athallah. All rights reserved.
          </p>

          {/* Social Links */}
          <ul className="flex items-center justify-center gap-8 mt-4 sm:mt-0">
            <li>
              <Link
                href={"https://github.com/KeaneAthallah"}
                target="_blank"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/keane-athallah-290082275/"}
                target="_blank"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
