'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '🏠' },
    { name: 'Tracker', path: '/tracker', icon: '📅' },
    { name: 'Symptoms', path: '/symptoms', icon: '📝' },
    { name: 'AI Chat', path: '/chat', icon: '💬' },
    { name: 'Education', path: '/education', icon: '📚' },
    { name: 'Screening', path: '/screening', icon: '🏥' },
    { name: 'Emergency', path: '/emergency', icon: '🚨' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  const mobileNavItems = [
    { name: 'Home', path: '/dashboard', icon: '🏠' },
    { name: 'Track', path: '/tracker', icon: '📅' },
    { name: 'Log', path: '/symptoms', icon: '📝' },
    { name: 'AI', path: '/chat', icon: '💬' },
    { name: 'Learn', path: '/education', icon: '📚' },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('guestMode');
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfafb]">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#eb477e]/10 h-16">
        <div className="flex items-center justify-between h-full px-4">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-[#eb477e]/5 rounded-lg"
            >
              <svg className="w-6 h-6 text-[#eb477e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="bg-[#eb477e] p-1.5 rounded-lg text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <span className="text-xl font-black text-[#181113]">LUNIVA</span>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-[#eb477e]/5 rounded-lg relative">
              <svg className="w-6 h-6 text-[#88636f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="w-9 h-9 rounded-full bg-[#eb477e]/10 flex items-center justify-center text-[#eb477e] font-bold"
              >
                U
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#eb477e]/10 py-2">
                  <Link href="/settings" className="block px-4 py-2 text-sm text-[#181113] hover:bg-[#eb477e]/5">
                    Settings
                  </Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-[#eb477e]/10 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname === item.path
                  ? 'bg-[#eb477e] text-white'
                  : 'text-[#88636f] hover:bg-[#eb477e]/5'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-semibold">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setSidebarOpen(false)}>
          <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-[#eb477e]/10 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    pathname === item.path
                      ? 'bg-[#eb477e] text-white'
                      : 'text-[#88636f] hover:bg-[#eb477e]/5'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold">{item.name}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 pb-20 lg:pb-6 min-h-screen">
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#eb477e]/10 z-40">
        <div className="flex items-center justify-around h-16">
          {mobileNavItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                pathname === item.path ? 'text-[#eb477e]' : 'text-[#88636f]'
              }`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-semibold">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
