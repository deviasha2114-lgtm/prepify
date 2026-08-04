import Link from 'next/link';

export default function Profile() {
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: '/avatars/alex.png',
    level: 12,
    xp: 8420,
    xpToNextLevel: 1580,
    streak: 7,
    rank: 'Top 15%',
  };

  const stats = [
    { label: 'Study Hours', value: '124h', icon: '⏰' },
    { label: 'Sessions', value: '89', icon: '💬' },
    { label: 'Flashcards', value: '1,240', icon: '🎴' },
    { label: 'Notes Created', value: '42', icon: '📝' },
  ];

  const badges = [
    { id: 1, name: 'Early Bird', description: 'Studied before 7am 10 times', icon: '🌅', earned: true },
    { id: 2, name: 'Night Owl', description: 'Studied after 10pm 15 times', icon: '🦉', earned: false },
    { id: 3, name: 'Marathoner', description: 'Studied 3+ hours in one session', icon: '🏃‍♂️', earned: true },
    { id: 4, name: 'Helper', description: 'Answered 50+ questions in study rooms', icon: '🤝', earned: true },
    { id: 5, name: 'Perfectionist', description: 'Scored 100% on 5 quizzes', icon: '🎯', earned: false },
    { id: 6, name: 'Social Butterfly', description: 'Joined 5 study groups', icon: '🦋', earned: true },
  ];

  const subjects = [
    { name: 'Mathematics', progress: 65 },
    { name: 'History', progress: 80 },
    { name: 'Chemistry', progress: 40 },
    { name: 'Literature', progress: 90 },
    { name: 'Physics', progress: 55 },
  ];

  const recentActivities = [
    {
      icon: '📚',
      text: 'Completed Calculus Quiz',
      time: '2 hours ago • 95% score',
      xp: '+120 XP',
    },
    {
      icon: '💬',
      text: 'Helped Sam with Algebra',
      time: '5 hours ago',
      xp: '+50 XP',
    },
    {
      icon: '📅',
      text: 'Study Session: History',
      time: 'Yesterday • 1.5h',
      xp: '+90 XP',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
          <div className="flex items-center space-x-6">
            <div className="relative h-20 w-20">
              <img src="/avatars/alex.png" alt="Alex" className="h-full w-full rounded-full ring-4 ring-primary-500/20" />
              <div className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center bg-primary-500 text-white rounded-full text-xs font-bold">
                <div className="h-2 w-2 bg-green-500 rounded-full" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{user.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
              <div className="mt-4 flex space-x-4">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground">Level</p>
                  <p className="text-2xl font-bold text-foreground">{user.level}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground">XP</p>
                  <p className="text-2xl font-bold text-foreground">{user.xp.toLocaleString()}</p>
                </div>
                <div className="relative w-24 h-4 bg-muted/50 rounded-full">
                  <div className="h-full w-[calc(8420/(8420+1580)*100%)] bg-primary-500 rounded-full" style={{ width: `${(user.xp / (user.xp + user.xpToNextLevel)) * 100}%` }}></div>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {user.xp} / {user.xp + user.xpToNextLevel} XP to Level {user.level + 1}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Stats</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => (
              <div key={stat.label} className="p-4 bg-card border border-border rounded-lg text-center">
                <div className="text-2xl">{stat.icon}</div>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-lg font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Badges */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Badges</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Earn badges by reaching study milestones and helping others.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {badges.map(badge => (
              <div key={badge.id} className="p-4 bg-card border border-border rounded-lg text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: badge.earned ? 'bg-primary-500/20' : 'bg-muted/20' }}>
                  <span className="text-2xl">{badge.icon}</span>
                </div>
                <h3 className="font-semibold text-foreground">{badge.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{badge.description}</p>
                {!badge.earned && (
                  <div className="mt-3 text-xs text-muted-foreground">
                    Locked
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Progress */}
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Progress</h2>

          {/* Subject progress */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Subject Progress</h3>
            <div className="space-y-3">
              {subjects.map((sub, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium text-white" style={{ backgroundColor: `#{getColorFromName(sub.name)}` }}>
                    {sub.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{sub.name}</p>
                    <div className="w-full h-2 bg-muted/50 rounded-full mt-1">
                      <div className="h-full bg-[{getColorFromName(sub.name)}] rounded-full" style={{ width: `${sub.progress}%` }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground">{sub.progress}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivities.map((act, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="h-8 w-8 bg-primary-500/20 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {act.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{act.text}</p>
                    <p className="text-sm text-muted-foreground">{act.time}</p>
                  </div>
                  <span className="text-sm text-green-500">{act.xp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper function to get color from subject name (simple mapping)
function getColorFromName(name: string): string {
  const colors: Record<string, string> = {
    Mathematics: '#3b82f6', // blue-500
    History: '#8b5cf6', // violet-500
    Chemistry: '#10b981', // emerald-500
    Literature: '#ef4444', // red-500
    Physics: '#f59e0b', // amber-500
  };
  return colors[name] || '#6b7280'; // gray-500 fallback
}