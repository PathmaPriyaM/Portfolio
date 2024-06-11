"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experiences",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>System Engineer at Infosys Ltd.</li>
        <li>System Engineer Trainee at Infosys Ltd.</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Development ( MERN/ MEAN )</li>
        <li>Algorithmic Problem Solving( C++ )</li>
        <li>Backend Development ( Node JS )</li>
        <li>Frontend Development ( HTML, CSS, JavaScript )</li>
        <li>Frameworks & Libraries ( Angular, React, Bootstrap )</li>
        <li>RESTful API Development ( Express JS )</li>
        <li>Database Management ( MySQL, MongoDB )</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Information Technology ( B.Tech / IT )</li>
        <li>Gramma Committee Higher Secondary School ( HSC )</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> Infosys Certified Node JS Professionals </li>
        <li> Infosys Certified Front End Developer </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] ">
            I am a versatile software developer specializing in full-stack development. 
            With expertise in JavaScript, React, Node Js, MongoDB and RESTful APIs, 
            I excel in creating dynamic and scalable web applications. I am passionate about 
            solving complex problems and continuously enhancing my skills to deliver top-notch solutions. 
            As a collaborative team player, I thrive in environments where innovation and teamwork drive success.
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
