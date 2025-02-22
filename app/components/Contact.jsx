import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "eb8399f0-ba53-469a-9c63-c74485848032"); // Replace with your Web3Forms access key
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Your message has been sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Title Section */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl font-bold font-Ovo text-gray-800 dark:text-white mb-6"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-12"
      >
        Feel free to reach out if you want to collaborate on a project, have a
        question, or just want to chat about tech and innovation. I'm always
        open to new ideas and opportunities.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        {/* Name Input */}
        <motion.input
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          type="text"
          placeholder="Enter your name"
          className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
          required
          name="name"
        />

        {/* Email Input */}
        <motion.input
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
          required
          name="email"
        />

        {/* Message Textarea */}
        <motion.textarea
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          name="message"
          rows={6}
          placeholder="Enter your message"
          className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-300"
          required
        ></motion.textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-max py-3 px-8 flex items-center justify-center gap-2 bg-[#a3be8c] hover:bg-[#a3be8c]/85 dark:bg-[#b48ead] dark:hover:bg-[#b48ead]/85 text-white rounded-full mx-auto transition-colors duration-300"
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="Arrow"
            className="w-4 h-4"
          />
        </button>

        {/* Result Message */}
        <p className="text-center text-sm text-gray-700 dark:text-gray-300">
          {result}
        </p>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
