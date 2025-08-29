import { projects } from '../../data/project';  // Changed from @/data/project
import ProjectCard from '../../components/ProjectCard';

export const metadata = {
  title: 'Projects | AI Portfolio',
  description: 'Explore AI and machine learning projects'
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">My AI Projects</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
        Explore my collection of AI and machine learning projects, from computer vision applications to natural language processing tools.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <section className="mt-16 bg-violet-50 dark:bg-gray-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Project Methodology</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          My approach to AI projects follows these key steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Define clear problem and success metrics</li>
          <li>Collect and preprocess high-quality data</li>
          <li>Experiment with different model architectures</li>
          <li>Train, validate and optimize performance</li>
          <li>Deploy with monitoring and maintenance plans</li>
        </ol>
      </section>
    </div>
  );
}