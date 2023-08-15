"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As a computer science student at Ahmedabad University, I constantly learn and grow as a technologist. I am passionate about using my skills and knowledge to build innovative solutions that positively impact the world.
      </p>

      <p className="mb-3">
      I have had the opportunity to work on various projects during my studies, including projects from cross disciplines which has allowed me to develop my skills in multiple areas apart from computer studies. I am always looking for new opportunities to learn and grow as a developer, and I am excited to connect with professionals in the industry.
Apart from other activities, I'm well devoted to my university education, with a current 3.79/4 SGPA.
      </p>
      <p >
      I enjoy exploring new technologies and staying up-to-date on industry trends in my free time. I look forward to connecting and collaborating with you.
      </p>
    </motion.section>
  );
}
