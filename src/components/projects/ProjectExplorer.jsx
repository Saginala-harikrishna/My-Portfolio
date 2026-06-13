import ProjectExplorer from "../components/projects/ProjectExplorer";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-16">

        <h1 className="text-6xl font-bold">
          Projects
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          A collection of real-world solutions across
          AI, automation, web development,
          and mobile applications.
        </p>

      </div>

      <ProjectExplorer />

    </div>
  );
}