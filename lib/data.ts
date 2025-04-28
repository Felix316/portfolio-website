import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import etchasketchImg from "@/public/Etch-a-Sketch.png"
import RockPaperScissorsImg from "@/public/Rock-Paper-Scissors.png";
import WeatherImg from "@/public/WeatherApp.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rock Paper Scissors",
    description:
      "Play against the computer in this classic game. It has a simple and clean design.",
    tags: ["JavaScript", "CSS", "HTML"],
    imageUrl: RockPaperScissorsImg,
    website: "https://rock-paper-scissor-seven-ruddy.vercel.app/",
  },
  {
    title: "Etch-A-Sketch",
    description:
      "A simulation of the classic Etch-A-Sketch toy. Draw on a grid with your mouse.",
    tags: ["JavaScript", "CSS", "HTML"],
    imageUrl: etchasketchImg,
    website: "https://etch-a-sketch-indol.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A Public weather app that allows users to search for current weather conditions in any city. It uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    imageUrl: WeatherImg,
    website: "https://weather-app-henna-seven.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;