import carshub from "@/public/images/projects/carshub.png";
import onlyclonesImg from "@/public/images/projects/onlyclones.png";
import selfiepopImg from "@/public/images/projects/selfiepop.png";
import React from "react";
import { FaReact } from "react-icons/fa";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "Front-End Developer",
    location: "Iplex",
    description: "I worked as a front-end developer for 2 years.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "SelfiePop",
    description:
      "Here I worked as a Front end engineer. My stack includes React, Next.js, TypeScript, Tailwind.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Onlyclones",
    description: `I have created and worked as a FrontEnd developer on this social platform.  OnlyClones is an online platform 
      where Users can purchase specific AI-generated images or content on the Site.`,
    tags: ["React", "Typescript", "Zustand", "stripe"],
    imageUrl: onlyclonesImg,
    url: "https://www.onlyclones.com",
  },
  {
    title: "SelfiePop",
    description: `I was the front-end developer on this project. The selfiepop™ app is the ultimate platform for creators to sell the exclusive,
members-only content that their superfans want to see!`,
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "stripe",
      "styled-components",
      "Framer Motion",
    ],
    imageUrl: selfiepopImg,
    url: "https://www.selfiepop.com",
  },
  {
    title: "Cars Hub",
    description: `I build this project from scratch on Next js using both server and client components.`,
    tags: ["React", "TypeScript", "Next js", "Tailwindcss"],
    imageUrl: carshub,
    url: "https://car-r6d65k26h-anwarkamal143.vercel.app",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Recoil",
  "TypeScript",
  "JavaScript",
  "Framer Motion",
  "HTML",
  "CSS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  // "Python",
  // "Django",
  "Node.js",
] as const;
