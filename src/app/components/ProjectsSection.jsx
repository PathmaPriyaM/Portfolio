"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "Crafted a restaurant template UI with HTML, CSS, & JavaScript, showcasing proficiency in web development for engaging user experiences.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/Restaurant-Website",
    previewUrl: "https://pathmapriya-restaurant.web.app/",
  },
  {
    id: 2,
    title: "Movie Streaming Website",
    description: "Discover TMDB movies on a responsive Netflix Clone. Enjoy Firebase authentication & Firestore storage for seamless browsing.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/Movie-Streaming-Website",
    previewUrl: "https://github.com/PathmaPriyaM/Movie-Streaming-Website",
  },
  {
    id: 3,
    title: "AI ChatBot Website",
    description: "Secure MERN-based AI Chatbot: Stores user messages, ensures data privacy with JWT Tokens, HTTP-Only Cookies, and Password Encryption.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/AI-ChatBot-Website",
    previewUrl: "https://github.com/PathmaPriyaM/AI-ChatBot-Website",
  },
  {
    id: 4,
    title: "Amazon-inspired UI Design",
    description: "Crafted Amazon Clone UI with HTML, CSS, & JS. Seamlessly replicate Amazon's design for a captivating user experience.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/Amazon-inspired-UI-Design",
    previewUrl: "https://github.com/PathmaPriyaM/Amazon-inspired-UI-Design",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "My portfolio website, built with Tailwind CSS and Next.js, epitomizes efficiency and performance.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/Portfolio-Website",
    previewUrl: "/",
  },
   {
    id: 6,
    title: "Electronics Purchase Website",
    description: "It is an online Shopping application that helps the users to purchase mobiles and tablet devices.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/ElectronicsPurchaseApplication",
    previewUrl: "https://github.com/PathmaPriyaM/ElectronicsPurchaseApplication",
  },
   {
    id: 7,
    title: "Hotel Booking Website",
    description: "It is a hospitality application that helps the user to get the details of the hotels in the city.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/HotelBookingApplication",
    previewUrl: "https://github.com/PathmaPriyaM/HotelBookingApplication",
  },
   {
    id: 8,
    title: "Life Coaching Website",
    description: "It is an online Life Coaching application that helps its users to sign up and log in to seek the guidance of famous life coaches.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/LifeCoachingApplication",
    previewUrl: "https://github.com/PathmaPriyaM/LifeCoachingApplication",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
