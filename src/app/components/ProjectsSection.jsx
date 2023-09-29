"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dine Market",
    description: "An E-commerce Project",
    image: "/images/projects/1.png",
    tag: ["All", "Stores"],
    gitUrl: "https://github.com/Moaz007Malik/Hackathon-Online-Store",
    previewUrl: "https://my-online-store-moaz007malik.vercel.app",
  },
  {
    id: 2,
    title: "Photo Album",
    description: "Photo Album using Cloudinary",
    image: "/images/projects/2.png",
    tag: ["All", "Cloud"],
    gitUrl: "/",
    previewUrl: "https://photo-album-moaz007malik.vercel.app/gallery",
  },
  {
    id: 3,
    title: "Personal Website",
    description: "Personal Website Project",
    image: "/images/projects/3.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "https://my-personal-website-moaz007malik.vercel.app",
  },
  {
    id: 4,
    title: "Random Quote Generator",
    description: "Get Data from API for Quotes",
    image: "/images/projects/4.png",
    tag: ["All", "API"],
    gitUrl: "/",
    previewUrl: "https://qoute-generator-moaz007malik.vercel.app",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "You're on this website right now",
    image: "/images/projects/5.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "https://my-portfolio-moaz007malik.vercel.app",
  },
  {
    id: 6,
    title: "E-commerce Website",
    description: "E-commerce website (upcoming project...)",
    image: "/images/projects/6.png",
    tag: ["All", "Stores"],
    gitUrl: "https://github.com/Moaz007Malik/E-Commerce",
    previewUrl: "https://ecommerce-store-moaz007malik.vercel.app",
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
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cloud"
          isSelected={tag === "Cloud"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Stores"
          isSelected={tag === "Stores"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="API"
          isSelected={tag === "API"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
