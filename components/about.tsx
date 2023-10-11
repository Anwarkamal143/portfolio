"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

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
      <p className="mb-3 text-base lg:text-lg">
        I am a full stack web developer with a passion for creating interactive
        and responsive web applications. I have experience working with
        JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML,
        CSS, and Git. I am a quick learner and I am always looking to expand my
        knowledge and skill set. I am a team player and I am excited to work
        with others to create amazing applications. I am currently looking for a{" "}
        {/* <span className="font-medium">full-time position</span> as a software */}
        <span className="font-medium">frontend position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
