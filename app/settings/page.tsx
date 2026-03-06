'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import AppLayout from '@/components/AppLayout';

export default function SettingsPage() {
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);
  const [name, setName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en';
    const savedNotif = localStorage.getItem('notifications') !== 'false';
    const savedName = localStorage.getItem('userName') || '';

    setLanguage(savedLang);
    setNotifications(savedNotif);
    setName(savedName);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);

    // Trigger Google Translate logic if needed
    const googleTranslateElement = document.getElementById('google_translate_element');
    if (googleTranslateElement) {
      alert(`Language changed to ${lang}. Google Translate integration would activate here.`);
    }
  };

  const handleNotificationToggle = () => {
    const newValue = !notifications;
    setNotifications(newValue);
    localStorage.setItem('notifications', String(newValue));
  };

  const handleNameSave = () => {
    localStorage.setItem('userName', name);
    alert('Name saved!');
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('guestMode');
    router.push('/');
  };

  return (
    <AppLayout>
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-[#181113] tracking-tight">Settings</h1>
          <p className="text-[#88636f]">Personalize your safe space</p>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eb477e]/5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-[#eb477e] mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              <h2 className="text-xl font-bold text-[#181113]">Profile</h2>
            </div>
            <div className="flex gap-2">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="flex-1 px-4 py-3 rounded-xl border border-[#eb477e]/10 bg-[#f8f6f6] focus:bg-white focus:ring-4 focus:ring-[#eb477e]/10 focus:border-[#eb477e] outline-none transition-all" />
              <button onClick={handleNameSave} className="px-6 py-3 bg-[#eb477e] text-white rounded-xl font-bold hover:bg-[#eb477e]/90 transition-all">Save</button>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eb477e]/5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" /></svg>
              <h2 className="text-xl font-bold text-[#181113]">Language</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[{ code: 'en', name: 'English', flag: '🇬🇧' }, { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }, { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' }].map((lang) => (
                <button key={lang.code} onClick={() => handleLanguageChange(lang.code)} className={`p-4 rounded-xl border-2 transition-all ${language === lang.code ? 'border-[#eb477e] bg-[#eb477e]/5' : 'border-gray-200 hover:border-[#eb477e]/30'}`}>
                  <div className="text-2xl mb-1">{lang.flag}</div>
                  <div className="text-sm font-medium">{lang.name}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eb477e]/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                <div>
                  <h2 className="text-xl font-bold text-[#181113]">Notifications</h2>
                  <p className="text-sm text-[#88636f]">Get reminders for your period</p>
                </div>
              </div>
              <button onClick={handleNotificationToggle} className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${notifications ? 'bg-[#eb477e]' : 'bg-gray-300'}`}>
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${notifications ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
          <div className="bg-red-50 rounded-3xl p-8">
            <button onClick={handleLogout} className="w-full flex items-center justify-center text-red-600 hover:text-red-700 font-medium gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
