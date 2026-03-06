'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';

export default function SymptomsPage() {
  const [painLevel, setPainLevel] = useState(0);
  const [mood, setMood] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😐', label: 'Neutral', value: 'neutral' },
    { emoji: '😢', label: 'Sad', value: 'sad' },
    { emoji: '😴', label: 'Tired', value: 'tired' },
    { emoji: '😤', label: 'Irritated', value: 'irritated' },
    { emoji: '😰', label: 'Anxious', value: 'anxious' },
  ];

  const commonSymptoms = [
    'Cramps', 'Bloating', 'Headache', 'Back Pain',
    'Breast Tenderness', 'Fatigue', 'Nausea', 'Acne',
    'Food Cravings', 'Mood Swings', 'Insomnia', 'Diarrhea'
  ];

  const toggleSymptom = (symptom: string) => {
    setSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSave = () => {
    const entry = {
      date: new Date().toISOString(),
      painLevel,
      mood,
      symptoms,
    };

    const existing = localStorage.getItem('symptomLog');
    const log = existing ? JSON.parse(existing) : [];
    log.push(entry);
    localStorage.setItem('symptomLog', JSON.stringify(log));

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AppLayout>
      <div className="flex flex-1 justify-center">
        <div className="max-w-[800px] w-full">
          <div className="mb-8">
            <h1 className="text-4xl font-black text-[#181113]">How are you feeling, Sarah?</h1>
            <p className="text-[#181113]/60 text-lg mt-1">Logging your symptoms helps us provide better insights for your cycle.</p>
          </div>
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#eb477e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
              Your Mood
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {moods.map((m) => (
                <button key={m.value} onClick={() => setMood(m.value)} className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${mood === m.value ? 'border-[#eb477e] bg-[#eb477e]/5' : 'border-transparent bg-white hover:border-[#eb477e]/30 shadow-sm'}`}>
                  <span className="text-4xl">{m.emoji}</span>
                  <span className="font-semibold text-sm">{m.label}</span>
                </button>
              ))}
            </div>
          </section>
          <section className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-[#eb477e]/5">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#eb477e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
              Physical Symptoms
            </h2>
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center gap-3 font-semibold text-lg">
                  <span className="p-2 bg-pink-50 rounded-lg text-[#eb477e]">🩸</span>
                  Cramps
                </label>
                <span className="text-sm font-medium text-[#eb477e] bg-[#eb477e]/10 px-3 py-1 rounded-full">Level {painLevel}</span>
              </div>
              <input className="w-full h-3 bg-pink-200 rounded-lg appearance-none cursor-pointer" max="10" min="0" type="range" value={painLevel} onChange={(e) => setPainLevel(Number(e.target.value))} style={{ background: `linear-gradient(to right, #f472b6 0%, #f472b6 ${painLevel * 10}%, #fce7f3 ${painLevel * 10}%, #fce7f3 100%)` }} />
            </div>
          </section>
          <section className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-[#eb477e]/5">
            <h2 className="text-xl font-bold mb-4">Symptoms</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {commonSymptoms.map((symptom) => (
                <button key={symptom} onClick={() => toggleSymptom(symptom)} className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${symptoms.includes(symptom) ? 'border-[#eb477e] bg-[#eb477e]/5 text-[#eb477e]' : 'border-gray-200 text-gray-700 hover:border-[#eb477e]/30'}`}>
                  {symptom}
                </button>
              ))}
            </div>
          </section>
          <button onClick={handleSave} className="w-full bg-[#eb477e] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#eb477e]/20 hover:bg-[#eb477e]/90 transition-all flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
            Save Daily Log
          </button>
          {saved && <div className="mt-4 bg-green-50 text-green-600 p-4 rounded-xl text-center">✓ Your symptoms have been logged!</div>}
        </div>
      </div>
    </AppLayout>
  );
}
