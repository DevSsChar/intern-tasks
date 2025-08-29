// filepath: c:\Users\Admin\Desktop\sudowudo\demo-port\components\ProjectCard.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  // Generate bullet points from the longDescription
  const generateBulletPoints = (text) => {
    // Split by sentences or use existing text
    const sentences = text.split('. ').filter(s => s.length > 3);
    
    return (
      <ul className="list-disc pl-5 space-y-2 my-4">
        {sentences.map((sentence, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {sentence.endsWith('.') ? sentence : `${sentence}.`}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl relative">
      <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white px-4 text-center">{project.title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="text-violet-600 dark:text-violet-400 hover:underline focus:outline-none"
          >
            {showDetails ? "Hide details" : "View details"}
          </button>
          
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
            aria-label="GitHub repository"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {/* Project Details Modal */}
        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-violet-700 dark:text-violet-400 mb-3">
              Detailed Analysis
            </h4>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Key Features & Technical Insights:</h5>
              {generateBulletPoints(project.longDescription)}
              
              <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  This AI analysis is based on project metadata and technical specifications.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}