import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and TypeScript.",
      link: "#",
    },
    {
      title: "Data Pipeline",
      description: "Event-driven ETL pipeline using FastAPI & RabbitMQ.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
