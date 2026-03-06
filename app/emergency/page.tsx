'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { AlertTriangle, Phone } from 'lucide-react';

export default function EmergencyPage() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const emergencyIssues = [
    {
      id: 'heavy',
      title: 'Heavy Bleeding',
      icon: '🩸',
      color: 'from-red-100 to-red-200',
      symptoms: [
        'Soaking through a pad/tampon every 1-2 hours',
        'Passing blood clots larger than a coin',
        'Bleeding for more than 7 days',
        'Feeling dizzy, weak, or short of breath'
      ],
      action: 'SEEK MEDICAL ATTENTION IMMEDIATELY',
      advice: 'Heavy bleeding can lead to anemia and may indicate underlying conditions like fibroids, polyps, or hormonal imbalances. See a doctor urgently.',
      emergency: true
    },
    {
      id: 'pain',
      title: 'Severe Pain',
      icon: '⚡',
      color: 'from-orange-100 to-orange-200',
      symptoms: [
        'Pain so severe you can\'t do daily activities',
        'Pain that doesn\'t improve with medication',
        'Sudden, sharp abdominal pain',
        'Pain with fever or vomiting'
      ],
      action: 'CONSULT A DOCTOR SOON',
      advice: 'Severe pain could indicate endometriosis, ovarian cysts, or other conditions. Don\'t suffer in silence - medical help is available!',
      emergency: true
    },
    {
      id: 'missed',
      title: 'Missed Periods',
      icon: '📅',
      color: 'from-yellow-100 to-yellow-200',
      symptoms: [
        'Missed 3 or more periods (not pregnant)',
        'Previously regular cycles now irregular',
        'No period by age 15',
        'No period for 90+ days'
      ],
      action: 'Schedule a doctor\'s appointment',
      advice: 'Missing periods can be due to stress, PCOS, thyroid issues, or other hormonal imbalances. A doctor can help identify the cause.',
      emergency: false
    },
    {
      id: 'unusual',
      title: 'Unusual Symptoms',
      icon: '🔍',
      color: 'from-purple-100 to-purple-200',
      symptoms: [
        'Bleeding between periods',
        'Bleeding after menopause',
        'Unusual vaginal discharge with odor',
        'Severe bloating or swelling'
      ],
      action: 'See a gynecologist',
      advice: 'These symptoms need professional evaluation to rule out infections, hormonal issues, or other conditions.',
      emergency: false
    }
  ];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <AlertTriangle className="mr-3 text-red-500" size={36} />
            Emergency Guidance
          </h1>
          <p className="text-gray-600">Know when to seek medical help</p>
        </div>

        {/* Emergency Hotline */}
        <div className="card bg-gradient-to-r from-red-500 to-pink-500 text-white mb-8 p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Emergency Hotline</h3>
              <p className="text-sm opacity-90">For life-threatening emergencies</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={24} />
              <span className="text-2xl font-bold">108</span>
            </div>
          </div>
        </div>

        {!selectedIssue ? (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              What are you experiencing?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {emergencyIssues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue.id)}
                  className={`p-6 rounded-xl bg-gradient-to-br ${issue.color} hover:scale-105 transition-transform text-left shadow-sm`}
                >
                  <div className="text-4xl mb-3">{issue.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{issue.title}</h3>
                  {issue.emergency && (
                    <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Urgent
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedIssue(null)}
              className="mb-6 text-pink-600 hover:text-pink-700 font-medium"
            >
              ← Back to Issues
            </button>

            {emergencyIssues
              .filter(issue => issue.id === selectedIssue)
              .map((issue) => (
                <div key={issue.id}>
                  <div className={`p-6 rounded-xl bg-gradient-to-br ${issue.color} mb-6 shadow-sm`}>
                    <div className="text-5xl mb-4">{issue.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{issue.title}</h2>

                    <div className="mb-6">
                      <h3 className="font-bold text-gray-800 mb-3">Warning Signs:</h3>
                      <ul className="space-y-2">
                        {issue.symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-700">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`p-4 rounded-xl ${issue.emergency ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                      <p className="font-bold text-lg mb-2">⚠️ {issue.action}</p>
                      <p className="text-sm opacity-90">{issue.advice}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100">
                    <h3 className="font-bold text-gray-800 mb-3">What to do now:</h3>
                    <ol className="space-y-2 text-gray-700">
                      <li>1. Don't panic - help is available</li>
                      <li>2. Note down your symptoms and when they started</li>
                      <li>3. Contact a healthcare provider or visit a clinic</li>
                      <li>4. Bring your period tracking data if available</li>
                      {issue.emergency && (
                        <li className="text-red-600 font-bold">
                          5. If symptoms are severe, call 108 or go to emergency room
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* General Advice */}
        <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl border border-pink-100">
          <h3 className="font-bold text-gray-800 mb-3">💡 Remember</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Trust your instincts - if something feels wrong, seek help</li>
            <li>• Keep track of your symptoms using LUNIVA</li>
            <li>• Don't be embarrassed - doctors are here to help</li>
            <li>• Early intervention often leads to better outcomes</li>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}
