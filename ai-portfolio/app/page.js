import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/project"; // Changed from projects.js to match your file
import { personalInfo } from "../data/contact";
import ProjectCard from "../components/ProjectCard";
import ResumeButton from "../components/ResumeButton";
import ChartPlaceholder from "../components/ChartPlaceholder";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-violet-500 to-purple-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Hey, I'm {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-violet-100">
              {personalInfo.role} passionate about building intelligent systems
            </p>
            <p className="text-lg mb-10 text-violet-100">
              I transform complex data into solutions that make a real impact.
              Specializing in computer vision and NLP to create AI that understands
              the world a little better.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-white text-violet-700 font-medium rounded-lg shadow-lg hover:bg-violet-100 transition duration-300"
              >
                View Projects
              </Link>
              <ResumeButton />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 font-medium rounded-lg hover:bg-violet-200 dark:hover:bg-violet-800 transition duration-300"
            >
              View All Projects
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills/Visualization Section */}
      <section className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Data Insights</h2>
          <div className="max-w-3xl mx-auto">
            <ChartPlaceholder />
          </div>
        </div>
      </section>

    </div>
  );
}
