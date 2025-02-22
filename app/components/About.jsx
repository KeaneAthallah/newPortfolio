import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

function About() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20" // Keep your existing background color here
    >
      {/* Introduction Section */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-medium text-gray-600 dark:text-gray-400"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-10"
      >
        About me
      </motion.h2>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-md"
        >
          <Image
            src={assets.profile_img}
            alt="Keane Athallah"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Who Am I? */}
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hi, I’m{" "}
            <strong className="text-gray-900 dark:text-white">
              Keane Athallah
            </strong>
            , a final-year Computer Engineering student and fullstack developer
            based in Palu, Indonesia. I specialize in building scalable web
            apps, mobile apps, and AI/ML solutions that solve real-world
            problems.
          </p>

          {/* What I Do */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              What I Do
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Full-stack web apps </li>
              <li>Mobile apps </li>
              <li>AI/ML models </li>
              <li>IoT implementations</li>
            </ul>
          </div>

          {/* Why I Do It */}
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I’m passionate about leveraging technology to transform industries
            and improve lives. My focus is on creating user-centered solutions
            that empower businesses and individuals.
          </p>

          {/* Let’s Connect! */}
          <p className="text-lg text-gray-700 dark:text-gray-300">
            If you’re looking for a collaborator or just want to chat about
            tech, feel free to reach out! Let’s build something amazing
            together. 🚀
          </p>
        </motion.div>
      </motion.div>

      {/* Skills & Tools */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-10"
      >
        {infoList.map(({ icon, iconDark, title, description }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Image
              src={isDarkMode ? iconDark : icon}
              alt={title}
              className="w-10 h-10 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </motion.li>
        ))}
      </motion.ul>

      {/* Skills & Tools Section */}
      <div className="py-10">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-center text-lg font-medium text-gray-600 dark:text-gray-400 mb-6"
        >
          Skills & Tools
        </motion.h4>
        <div className="space-y-8">
          {toolsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
            >
              {/* Category Title */}
              <h5 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.category}
              </h5>

              {/* Tools List */}
              <motion.ul
                className="flex flex-wrap items-center gap-6 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {category.tools.map((tool, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
                      <Image
                        src={
                          isDarkMode && tool.iconDark
                            ? tool.iconDark
                            : tool.icon
                        }
                        alt={tool.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    {/* Tool Name */}
                    <p className="mt-2 text-xs text-gray-700 dark:text-gray-400 text-center">
                      {tool.name}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
