'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  // Set initial state based on localStorage or system preference (client-only)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setIsDark(storedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update DOM and localStorage whenever isDark changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white/5 backdrop-blur-md dark:bg-black/5 dark:bg-opacity-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-start sm:ml-6">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-xl font-bold text-foreground dark:text-foreground">Prepify</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center sm:hidden">
          {/* Mobile menu button */}
          <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300" aria-label="Open main menu">
            {/* Hamburger icon */}
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-end sm:mr-6 space-x-4">
          <Link href="/dashboard" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md">Dashboard</Link>
          <Link href="/chat" className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md">Chat</Link>
          <Link href="/profile" className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md">Profile</Link>
          <Link href="/login" className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md">Login</Link>
          <Link href="/signup" className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md">Sign up</Link>
          <button onClick={toggleTheme} className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle theme">
            {isDark ? (
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}