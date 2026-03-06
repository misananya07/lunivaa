'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import AppLayout from '@/components/AppLayout';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [cycleDay, setCycleDay] = useState(14);
  const [currentPhase, setCurrentPhase] = useState('Follicular Phase');
  const [nextPeriod, setNextPeriod] = useState(14);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isGuest = localStorage.getItem('guestMode');
      if (!user && !isGuest) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#eb477e] text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-black text-[#181113] mb-2">Welcome back! 🌸</h1>
          <p className="text-[#88636f]">Here's your health overview today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-[#eb477e]/10">
            <div className="text-sm font-semibold text-[#88636f] mb-2">Cycle Day</div>
            <div className="text-4xl font-black text-[#eb477e] mb-1">{cycleDay}</div>
            <div className="text-xs text-[#88636f]">of 28 days</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#eb477e]/10">
            <div className="text-sm font-semibold text-[#88636f] mb-2">Current Phase</div>
            <div className="text-lg font-bold text-[#181113]">{currentPhase}</div>
            <div className="text-xs text-[#88636f] mt-2">Energy levels may be high</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#eb477e]/10">
            <div className="text-sm font-semibold text-[#88636f] mb-2">Next Period</div>
            <div className="text-4xl font-black text-[#eb477e] mb-1">{nextPeriod}</div>
            <div className="text-xs text-[#88636f]">days away</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#eb477e]/10 to-[#fce7ef] p-6 rounded-2xl">
          <h2 className="text-xl font-bold text-[#181113] mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => router.push('/symptoms')}
              className="bg-white p-4 rounded-xl text-left hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-bold text-[#181113]">Log Today</div>
              <div className="text-xs text-[#88636f]">Track symptoms</div>
            </button>
            <button
              onClick={() => router.push('/chat')}
              className="bg-white p-4 rounded-xl text-left hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-bold text-[#181113]">Talk to Luna</div>
              <div className="text-xs text-[#88636f]">AI assistant</div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#eb477e]/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#181113]">Learn Something New</h2>
            <button
              onClick={() => router.push('/education')}
              className="text-sm font-semibold text-[#eb477e] hover:underline"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            <div className="p-4 bg-[#fce7ef] rounded-xl">
              <div className="font-bold text-[#181113] mb-1">Understanding Your Cycle</div>
              <div className="text-sm text-[#88636f]">Learn about the four phases of menstruation</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
