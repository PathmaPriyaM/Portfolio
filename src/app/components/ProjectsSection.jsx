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
    title: "ATM System",
    description: "Designed and implemented an ATM system with core functionalities for user transactions and account management.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/ATM-System",
    previewUrl: "https://github.com/PathmaPriyaM/ATM-System",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description: "Developed a simple Tic-Tac-Toe game with a 3x3 grid, allowing two players to take turns marking their symbols (X or O).",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/Tic-Tac-Toe-Game",
    previewUrl: "https://github.com/PathmaPriyaM/Tic-Tac-Toe-Game",
  },
  {
    id: 4,
    title: "Vending Machine System",
    description: "Designed and implemented a vending machine system that manages products, processes payments, dispenses change, tracks inventory, and supports concurrent transactions.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/Vending-Machine-System",
    previewUrl: "https://github.com/PathmaPriyaM/Vending-Machine-System",
  },
   {
    id: 5,
    title: "Life Coaching Website",
    description: "It is an online Life Coaching application that helps its users to sign up and log in to seek the guidance of famous life coaches.",
    image: "/images/project-banner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/PathmaPriyaM/LifeCoachingApplication",
    previewUrl: "https://github.com/PathmaPriyaM/LifeCoachingApplication",
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
