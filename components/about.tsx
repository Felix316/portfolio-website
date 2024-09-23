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
        I am currently one semester away from graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from Western Govenors University. 
        I was originally planning on becoming a firefighter until I learned about building web apps 
        and learned for awhile on my own. Eventually I decide to pursue my
        passion for programming. I put my attention towards mastering{" "}
        <span className="font-medium">full-stack web development</span> and haven't look back.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          MongoDB, Exprees.js, React, and Node.js 
        </span>
        , as well as next.js. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, playing guitar, and working out. I also enjoy{" "}
        <span className="font-medium">learning new things</span>, an example of things 
         I am currently learning about are how to play the piano and how to edit videos.
      </p>
    </motion.section>
  );
}