import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function Works() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="work"
    >
      {/* Title Section */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl font-bold font-Ovo text-gray-800 dark:text-white mb-6"
      >
        See My Latest Work
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12"
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in fullstack development.
      </motion.p>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
      >
        {workData.map(
          (
            {
              title,
              image,
              description,
              role,
              achievements,
              company,
              startDate,
              endDate,
              techStack,
            },
            index
          ) => {
            const [isOpen, setIsOpen] = useState(false); // State to track card expansion
            return (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 cursor-pointer transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/20"
                onClick={() => setIsOpen(!isOpen)} // Toggle expanded view on click
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Header (Image) */}
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={`h-48 bg-no-repeat bg-cover bg-center ${
                    isOpen ? "hidden" : "block"
                  }`}
                ></div>

                {/* Brief Information */}
                <div className={`p-6 ${isOpen ? "hidden" : "block"}`}>
                  {/* Title and Role */}
                  <h2 className="font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {role}
                  </p>
                  {/* Duration */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Duration:</strong> {startDate} - {endDate}
                  </p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {techStack.length > 0 ? (
                      techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-700 dark:text-white"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        No specific tech stack used.
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Information */}
                <div className={`p-6 ${isOpen ? "block" : "hidden"}`}>
                  <h2 className="font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {description}
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">
                    "{achievements}"
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Duration:</strong> {startDate} - {endDate}
                  </p>
                </div>
              </motion.div>
            );
          }
        )}
      </motion.div>
    </motion.div>
  );
}
//
export default Works;
