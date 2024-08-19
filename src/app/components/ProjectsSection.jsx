"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Modern Restaurant UI",
    description: "Designed and implemented a modern, responsive restaurant UI using HTML, CSS, and JavaScript for displaying menus, reservations, and specials.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/Restaurant-Website",
    previewUrl: "https://pathmapriya-restaurant.web.app/",
  },
  {
    id: 2,
    title: "AI ChatBot Website",
    description: "Designed and implemented a full-stack AI chatbot using the MERN stack.Features include a modern, responsive UI, OpenAI integration, JWT-based authentication, and secure chat storage.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/AI-ChatBot-Website",
    previewUrl: "https://github.com/PathmaPriyaM/AI-ChatBot-Website",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Designed and implemented a modern, responsive portfolio website using Next.js and Tailwind CSS. The site showcases my skills, projects, and achievements with an elegant and user-friendly design.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/Portfolio",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Movie Streaming Website",
    description: "Designed and implemented a modern, responsive movie streaming website featuring extensive movie data from the TMDB API. Integrated Firebase for user authentication and Firestore for data management, showcasing proficiency in full-stack development and secure application architecture.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/Movie-Streaming-Website",
    previewUrl: "https://github.com/PathmaPriyaM/Movie-Streaming-Website",
  },
  {
    id: 5,
    title: "Amazon Inspired UI",
    description: "Designed and implemented a modern, responsive UI resembling Amazon’s interface using HTML, CSS, and JavaScript.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/PathmaPriyaM/Amazon-inspired-UI-Design",
    previewUrl: "https://github.com/PathmaPriyaM/Amazon-inspired-UI-Design",
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
