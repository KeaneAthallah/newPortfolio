import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-40 bg-[#8fbcbb] dark:bg-[#81a1c1]"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Keane Athallah
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Fullstack web developer based in Indonesia
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        A passionate fullstack developer and problem-solver from Indonesia 🌏 I
        build scalable web apps, intelligent systems, and innovative IoT
        solutions—always striving to create meaningful impact through
        technology.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={"#contact"}
          className="px-10 py-3 border rounded-full border-white bg-[#bf616a] text-white flex items-center gap-2 dark:bg-[#3b4252]"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} className="w-4" alt="" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={"resume_fullstack_developer.pdf"}
          download={true}
          className="px-10 py-3 border rounded-full flex items-center gap-2 border-gray-700 bg-[#eceff4] dark:text-black dark:bg-[#d08770]"
        >
          My resume <Image src={assets.download_icon} className="w-4" alt="" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
