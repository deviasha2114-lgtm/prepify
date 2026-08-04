import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-50 to-background/90 dark:from-primary-100 dark:to-background/95 py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Learn Smarter, Together
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Collaborative study rooms, AI-powered tutoring, and progress tracking—all in one place.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/dashboard" className="rounded-md bg-primary-500 px-6 py-3 text-sm font-medium text-primary-500 hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
              <Link href="/chat" className="ml-4 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">
                Try Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Features
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            Everything you need to study effectively and stay motivated.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-card hover:bg-accent/5 transition-colors rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground">Study Rooms</h3>
              <p className="mt-3 text-muted-foreground">
                Create or join study rooms with classmates. Collaborate in real-time with shared notes, whiteboards, and task lists.
              </p>
            </div>
            <div className="p-6 bg-card hover:bg-accent/5 transition-colors rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground">AI Tutoring</h3>
              <p className="mt-3 text-muted-foreground">
                Get instant help from our AI tutor trained on your curriculum. Ask questions, get explanations, and generate practice problems.
              </p>
            </div>
            <div className="p-6 bg-card hover:bg-accent/5 transition-colors rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground">Progress Tracking</h3>
              <p className="mt-3 text-muted-foreground">
                Track your learning journey with detailed analytics, streaks, and achievement badges.
              </p>
            </div>
            <div className="p-6 bg-card hover:bg-accent/5 transition-colors rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground">Flashcards & Quizzes</h3>
              <p className="mt-3 text-muted-foreground">
                Create custom flashcards or generate them from your notes. Test yourself with spaced repetition quizzes.
              </p>
            </div>
            <div className="p-6 bg-card hover:bg-accent/5 transition-colors rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground">Calendar & Scheduling</h3>
              <p className="mt-3 text-muted-foreground">
                Sync your study schedule with calendar integrations. Get reminders for deadlines and study sessions.
              </p>
            </div>
            <div className="p-6 bg-card hover:bg-accent/5 transition-colors rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground">Resource Library</h3>
              <p className="mt-3 text-muted-foreground">
                Access a growing library of study guides, video lectures, and practice exams contributed by the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/50 dark:bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground">
            Pricing
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
            Choose the plan that fits your learning needs.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {/* Free tier */}
            <div className="p-6 bg-card border border-divider rounded-lg">
              <h3 className="text-lg font-semibold text-foreground">Free</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Great for getting started
              </p>
              <p className="mt-6 text-2xl font-extrabold text-foreground">
                $0
                <span className="text-xs font-normal text-muted-foreground">/ month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>Limited study rooms</li>
                <li>Basic AI tutor (5 questions/day)</li>
                <li>Progress tracking</li>
                <li>Community resources</li>
              </ul>
              <Link href="/dashboard" className="mt-8 w-full rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-primary-500 hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
            </div>
            {/* Pro */}
            <div className="p-6 bg-card border border-divider rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="flex h-5 w-5 items-center justify-center bg-primary-500/10 text-primary-500 rounded-shrink-0">
                  <span className="text-xs font-bold">Pro</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-0.5">Pro</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                For serious learners
              </p>
              <p className="mt-6 text-2xl font-extrabold text-foreground">
                $12
                <span className="text-xs font-normal text-muted-foreground">/ month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>Unlimited study rooms</li>
                <li>Unlimited AI tutor</li>
                <li>Advanced analytics</li>
                <li>Custom flashcards</li>
                <li>Priority support</li>
              </ul>
              <Link href="/dashboard" className="mt-8 w-full rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-primary-500 hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
            </div>
            {/* Team */}
            <div className="p-6 bg-card border border-divider rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="flex h-5 w-5 items-center justify-center bg-primary-500/10 text-primary-500 rounded-shrink-0">
                  <span className="text-xs font-bold">Team</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-0.5">Team</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                For study groups & teams
              </p>
              <p className="mt-6 text-2xl font-extrabold text-foreground">
                $24
                <span className="text-xs font-normal text-muted-foreground">/ month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>Everything in Pro</li>
                <li>Team Admin Dashboard</li>
                <li>Shared resource library</li>
                <li>Group study sessions</li>
                <li>Volume discounts</li>
              </ul>
              <Link href="/dashboard" className="mt-8 w-full rounded-md bg-primary-500 px-4 py-2 text-sm font-semibold text-primary-500 hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500/90 dark:bg-primary-500/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-500">
            Ready to transform your learning experience?
          </h2>
          <p className="mt-6 text-lg text-primary-500/80">
            Join thousands of students who are already improving their grades with Prepify.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link href="/dashboard" className="rounded-md bg-primary-500 px-6 py-3 text-sm font-medium text-primary-500 hover:bg-primary-600 transition-colors">
              Start Free Trial
            </Link>
            <Link href="/chat" className="ml-4 rounded-md border border-transparent bg-primary-500 px-6 py-3 text-sm font-medium text-primary-500 hover:bg-primary-600 transition-colors">
              Take a Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Prepify</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                The modern learning platform for students who want to succeed together.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Study Rooms</a></li>
                <li><a href="#" className="hover:text-foreground">AI Tutor</a></li>
                <li><a href="#" className="hover:text-foreground">Flashcards</a></li>
                <li><a href="#" className="hover:text-foreground">Calendar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-6">
            <p>© {new Date().getFullYear()} Prepify. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-foreground">
                Instagram
              </a>
              <a href="#" className="hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}