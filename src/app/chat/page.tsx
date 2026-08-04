'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
  id: number;
  text: string;
  user: { id: number; name: string };
  time: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Sample friends list
  const friends = [
    { id: 1, name: 'Alex', avatar: '/avatars/alex.png', status: 'online' },
    { id: 2, name: 'Sam', avatar: '/avatars/sam.png', status: 'offline' },
    { id: 3, name: 'Taylor', avatar: '/avatars/taylor.png', status: 'online' },
    { id: 4, name: 'Jordan', avatar: '/avatars/jordan.png', status: 'away' },
  ];

  // Sample messages
  useEffect(() => {
    const sampleMessages: Message[] = [
      { id: 1, text: 'Hey! Ready for the study session?', user: { id: 2, name: 'Sam' }, time: '10:03 AM' },
      { id: 2, text: 'Yeah! Just reviewing the calculus notes.', user: { id: 1, name: 'You' }, time: '10:04 AM' },
      { id: 3, text: 'Do you understand the chain rule?', user: { id: 2, name: 'Sam' }, time: '10:05 AM' },
    ];
    setMessages(sampleMessages);
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newMsg: Message = {
      id: Date.now(),
      text: input,
      user: { id: 1, name: 'You' },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMsg]);
    setInput('');
    // Scroll to bottom
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Friends Sidebar */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold">Chat</span>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300" aria-label="Emoji picker">
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300" aria-label="Settings">
              <svg className="h-5 w-5" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-2 px-3">
          <h3 className="text-sm font-medium text-muted-foreground">FRIENDS</h3>
          {friends.map(friend => (
            <div key={friend.id} className="flex items-center p-2 rounded-md hover:bg-accent/5 transition-colors cursor-pointer">
              <img src={friend.avatar} alt={friend.name} className="h-8 w-8 rounded-full" />
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-foreground">{friend.name}</p>
                <p className="text-xs text-muted-foreground">
                  <span className={`inline-flex h-2 w-2 rounded-full bg-${friend.status === 'online' ? 'green' : friend.status === 'away' ? 'yellow' : 'gray'}-500`}></span>
                  {friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.user.id === 1 ? 'justify-end' : 'justify-start'} max-w-xs`}>
              <div className={`max-w-xs px-3 py-2 rounded-md ${msg.user.id === 1 ? 'bg-primary-500 text-white' : 'bg-card text-foreground'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <span className="mt-1 block text-xs text-muted-foreground/70 text-right">{msg.time}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 bg-card border-t border-border">
          {showEmojiPicker && (
            <div className="absolute left-4 bottom-16 bg-card p-2 rounded-md shadow-lg border border-border z-10 w-48">
              {/* Simple emoji picker - just a few emojis */}
              <div className="flex space-x-2">
                {['😀','😂','😍','😎','👍','🙏','📚','💡','✏️','🔬'].map(emoji => (
                  <button key={emoji} onClick={() => {
                    setInput(input + emoji);
                    setShowEmojiPicker(false);
                  }} className="text-2xl p-1 rounded hover:bg-accent/20">
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          )}
          <form onSubmit={sendMessage} className="flex-1 space-x-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-3 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button type="submit" className="px-4 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-500/90 disabled:opacity-50">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}