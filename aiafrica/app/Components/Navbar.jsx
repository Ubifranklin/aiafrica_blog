"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Moon, Sun, Menu, X, Home, Search } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { dark, light } from '@clerk/themes';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Left: Logo and Search */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/">
            <Image 
              src="https://flowbite.com/docs/images/logo.svg" 
              className="h-8" 
              alt="Company Logo"
              width={32}
              height={32}
            />
          </Link>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            AI_Africa
          </span>
          {/* Search/Filter Input */}
          <div className="ml-4 flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute ml-2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
          </div>
        </div>

        {/* Center: Navigation Links (and side menu for mobile) */}
        <div className="flex items-center flex-1 justify-center">
          {/* Side Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
          )}
          {/* Side Menu Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:translate-x-0 md:w-auto md:bg-transparent md:shadow-none md:flex md:items-center md:h-auto`}
            id="navbar-user"
          >
            <div className="flex justify-between items-center p-4 md:hidden">
              <span className="text-xl font-bold dark:text-white">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-200">
                <X className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center gap-2 py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI News
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tech Start-Ups
                </Link>
              </li>
              <li>
                <Link 
                  href="/pricing" 
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Theme toggle, Auth, and Mobile menu button */}
        <div className="flex items-center space-x-3 md:order-2 rtl:space-x-reverse">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-2"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Clerk Auth: Show Sign In or User Profile */}
          <div className="relative">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" appearance={{ baseTheme: darkMode ? dark : light }} />
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}