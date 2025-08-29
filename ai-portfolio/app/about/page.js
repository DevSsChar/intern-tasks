import ResumeButton from '../../components/ResumeButton';
import { personalInfo } from '../../data/contact';

export const metadata = {
  title: 'About Me | AI Portfolio',
  description: 'Learn about my journey and skills in AI and machine learning'
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-violet-700 dark:text-violet-400">My AI Origin Story</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            It all started with a rebellious chess program I wrote in college that kept beating me at my own game. That's when I realized: if I'm going to be replaced by AI, I might as well be the one building it!
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Fast forward through a computer science degree, countless late nights debugging neural networks, and an unhealthy relationship with TensorFlow – I've turned my fascination with making machines think into a full-time obsession.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Now I work on projects that use AI to solve real-world problems, from computer vision applications that can detect objects to NLP systems that understand human language. Every day presents a new challenge, and that's exactly how I like it.
          </p>
        </div>
        
        <div className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-violet-700 dark:text-violet-400">Skills &amp; Expertise</h2>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Kubernetes', 'Java', 'C++', 'Python', 'Javascript', , 'Docker'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Frameworks & Techonologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Vite', 'Nextjs', 'Flask', 'Django', 'VSCode', 'Streamlit','OAuth','Twilio','Jenkins'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'JavaScript', 'Express.js', 'Tailwind CSS', 'Node.js','MongoDB'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-violet-700 dark:text-violet-400">What I'm Working On</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Currently, I'm exploring applications of large language models and multimodal AI systems. I'm particularly interested in how these technologies can be made more accessible and ethically deployed to help people solve everyday problems.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            When I'm not training models or debugging code, you'll find me exploring hiking trails, experimenting with cooking recipes (sometimes with AI-generated suggestions), or playing strategy games.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-xl mb-6">Want to know more about my experience?</p>
          <ResumeButton />
        </div>
      </div>
    </div>
  );
}