'use client';

import { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';

export default function TrackerPage() {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [periodLength, setPeriodLength] = useState(5);
  const [cycleLength, setCycleLength] = useState(28);
  const [flowIntensity, setFlowIntensity] = useState('medium');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('cycleData');
    if (data) {
      const parsed = JSON.parse(data);
      setLastPeriodDate(parsed.lastPeriodDate || '');
      setPeriodLength(parsed.periodLength || 5);
      setCycleLength(parsed.cycleLength || 28);
      setFlowIntensity(parsed.flowIntensity || 'medium');
    }
  }, []);

  const handleSave = () => {
    const data = {
      lastPeriodDate,
      periodLength,
      cycleLength,
      flowIntensity,
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem('cycleData', JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const calculateNextPeriod = () => {
    if (!lastPeriodDate) return null;
    const date = new Date(lastPeriodDate);
    date.setDate(date.getDate() + cycleLength);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#181113] tracking-tight">Cycle Calendar</h1>
            <p className="text-[#88636f]">Tracking your journey, day by day.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-xl shadow-[#eb477e]/5 border border-[#eb477e]/5">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-2">Last Period Start Date</label>
              <input type="date" value={lastPeriodDate} onChange={(e) => setLastPeriodDate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-[#eb477e]/10 bg-[#f8f6f6] focus:bg-white focus:ring-4 focus:ring-[#eb477e]/10 focus:border-[#eb477e] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-2">Period Length (days)</label>
              <input type="number" value={periodLength} onChange={(e) => setPeriodLength(Number(e.target.value))} min="1" max="10" className="w-full px-4 py-3 rounded-xl border border-[#eb477e]/10 bg-[#f8f6f6] focus:bg-white focus:ring-4 focus:ring-[#eb477e]/10 focus:border-[#eb477e] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-2">Average Cycle Length (days)</label>
              <input type="number" value={cycleLength} onChange={(e) => setCycleLength(Number(e.target.value))} min="21" max="35" className="w-full px-4 py-3 rounded-xl border border-[#eb477e]/10 bg-[#f8f6f6] focus:bg-white focus:ring-4 focus:ring-[#eb477e]/10 focus:border-[#eb477e] outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#181113] mb-3">Flow Intensity</label>
              <div className="flex space-x-4">
                {[{ value: 'light', label: 'Light', icon: '💧' }, { value: 'medium', label: 'Medium', icon: '💧💧' }, { value: 'heavy', label: 'Heavy', icon: '💧💧💧' }].map((option) => (
                  <button key={option.value} onClick={() => setFlowIntensity(option.value)} className={`flex-1 p-4 rounded-xl border-2 transition-all ${flowIntensity === option.value ? 'border-[#eb477e] bg-[#eb477e]/5' : 'border-gray-200 hover:border-[#eb477e]/30'}`}>
                    <div className="text-2xl mb-2">{option.icon}</div>
                    <div className="text-sm font-medium">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <button onClick={handleSave} className="w-full bg-[#eb477e] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#eb477e]/20 hover:bg-[#eb477e]/90 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" /></svg>
              Save Period Data
            </button>
            {saved && <div className="bg-green-50 text-green-600 p-3 rounded-xl text-center">✓ Saved successfully!</div>}
          </div>
        </div>
        {lastPeriodDate && (
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-[#181113] mb-4">📅 Your Predictions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#181113]">Next Period Expected:</span>
                <span className="font-bold text-[#eb477e]">{calculateNextPeriod()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
