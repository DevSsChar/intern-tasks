"use client";
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-violet-600 dark:text-violet-400">
          <span className="font-extrabold">Dev Shah</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
            Projects
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400">
              About
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}