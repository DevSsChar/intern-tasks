import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-violet-600 dark:text-violet-400 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Model Not Found 😵</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this neural pathway doesn't exist yet. Our model is still training on this route.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl max-w-md mx-auto mb-8">
          <code className="text-left text-sm block text-gray-700 dark:text-gray-300">
            <span className="text-red-500">Error:</span> Unable to locate model at specified path.<br />
            <span className="text-yellow-600">Warning:</span> Neurons may have been disconnected.<br />
            <span className="text-green-500">Solution:</span> Return to a known state and retrain.
          </code>
        </div>
        <Link 
          href="/"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg shadow-md transition duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}