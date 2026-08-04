'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  const stats = [
    { label: 'Study Hours', value: '124', change: '+12%' },
    { label: 'Sessions Completed', value: '89', change: '+8%' },
    { label: 'Flashcards Reviewed', value: '1,240', change: '+15%' },
    { label: 'Streak', value: '7 days', change: '+2' },
  ];

  const rooms = [
    { id: 1, name: 'Calculus Study Group', members: 4, topic: 'Integrals & Derivatives', progress: 65 },
    { id: 2, name: 'History Exam Prep', members: 6, topic: 'World War II', progress: 80 },
    { id: 3, name: 'Chemistry Lab', members: 3, topic: 'Organic Chemistry', progress: 40 },
    { id: 4, name: 'Literature Club', members: 5, topic: 'Shakespeare', progress: 90 },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className={`
        flex-shrink-0 w-64 bg-card border-r border-border
        ${openSidebar ? '' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        z-20
      `}>
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold">StudyHub</span>
          </div>
          <button onClick={toggleSidebar} className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300" aria-label="Open sidebar">
            <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="mt-6 space-y-2 px-3">
          <Link href="/" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 hover:text-accent-foreground">
            <span className="flex-shrink-0">
              {/* Home icon */}
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 011-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1H3z" />
              </svg>
            </span>
            <span className="ml-3">Home</span>
          </Link>
          <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-accent/10 text-accent-foreground">
            <span className="flex-shrink-0">
              {/* Dashboard icon */}
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </span>
            <span className="ml-3">Dashboard</span>
          </Link>
          <Link href="/chat" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 hover:text-accent-foreground">
            <span className="flex-shrink-0">
              {/* Chat icon */}
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h3m-4 0V8a2 2 0 012-2h2a2 2 0 012 2v3m-4 0h3m-4 0l-2 2m2-2l2 2" />
              </svg>
            </span>
            <span className="ml-3">Chat</span>
          </Link>
          <Link href="/profile" className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent/10 hover:text-accent-foreground">
            <span className="flex-shrink-0">
              {/* Profile icon */}
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7-7-7 7-7" />
              </svg>
            </span>
            <span className="ml-3">Profile</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className={`
          hidden md:flex h-16 items-center justify-between px-4 bg-card border-b border-border
        `}>
          <div className="flex items-center space-x-3">
            <button onClick={toggleSidebar} className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="text-xl font-bold">Dashboard</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Welcome back, Alex!</span>
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300" aria-label="Notifications">
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {/* Stats */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 bg-card border border-border rounded-lg">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                <p className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm">{stat.change.startsWith('+') ?
                  <span className="text-green-500">↑ {stat.change.slice(1)}</span> :
                  <span className="text-red-500">↓ {Math.abs(parseInt(stat.change))}%</span>
                }</p>
              </div>
            ))}
          </div>

          {/* Study Rooms */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Your Study Rooms</h2>
            <div className="space-y-4">
              {rooms.map(room => (
                <Link key={room.id} href={`/rooms/${room.id}`} className="flex w-full items-center p-4 bg-card border border-border rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">{room.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex-1 ml-4">
                    <h3 className="font-medium text-foreground">{room.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{room.topic}</p>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <span>{room.members} members</span>
                    <span>·</span>
                    <span>{room.progress}% complete</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/rooms/create" className="mt-4 inline-flex items-center px-4 py-2 bg-primary-500 text-primary-500 text-sm font-medium rounded-md hover:bg-primary-500/90">
              <span className="mr-2">+</span> Create New Room
            </Link>
          </section>
        </main>

        {/* Mobile Backdrop */}
        {openSidebar && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10" onClick={toggleSidebar}></div>
        )}
      </div>
    </div>
  );
}