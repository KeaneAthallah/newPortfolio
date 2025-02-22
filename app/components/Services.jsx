import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function Services() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="services"
    >
      {/* Title Section */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl font-bold font-Ovo text-gray-800 dark:text-white mb-6"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12"
      >
        I’m a fullstack web developer based in Palu, Indonesia, with 2+ years of
        experience in freelance projects. I deliver scalable, efficient, and
        user-friendly solutions tailored to your needs.
      </motion.p>

      {/* Service Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md dark:hover:shadow-white/20"
          >
            {/* Icon */}
            <Image src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {description}
            </p>

            {/* Read More Link */}
            <Link
              href={link}
              className="flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
            >
              Read More
              <Image
                src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                alt="Arrow Icon"
                className="w-4 h-4"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
