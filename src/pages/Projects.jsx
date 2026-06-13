import { useState } from "react";

import projectsData from "../data/projectsData";

import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilters from "../components/projects/ProjectFilters";

export default function Projects() {

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) =>
            project.category === selectedCategory
        );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">

      {/* Hero */}

      <div className="text-center mb-10 md:mb-20">

        <h1 className="text-4xl md:text-6xl font-bold">
          Projects
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          A collection of projects across AI,
          automation, web development,
          and software engineering.
        </p>

      </div>

      {/* Filters */}

      <ProjectFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Projects */}

      <div className="mt-8 md:mt-12">

        <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-8">
          All Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </div>
  );
}