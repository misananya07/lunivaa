'use client';

import Navigation from '@/components/Navigation';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="md:pl-64 pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <Shield className="mr-3 text-green-500" size={36} />
              Privacy Policy
            </h1>
            <p className="text-gray-600">How we protect your data</p>
          </div>

          <div className="card space-y-6">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Data Collection</h2>
              <p className="text-gray-700">
                LUNIVA collects minimal personal information to provide you with period tracking and health guidance services. 
                This includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Period dates and cycle information</li>
                <li>Symptom and mood logs</li>
                <li>Email address (if you create an account)</li>
                <li>Health screening responses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">How We Use Your Data</h2>
              <p className="text-gray-700">
                Your data is used solely to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Predict your next period and fertile window</li>
                <li>Track patterns in your symptoms and mood</li>
                <li>Provide personalized health insights</li>
                <li>Improve our AI chat responses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Data Storage</h2>
              <p className="text-gray-700">
                <strong>Guest Mode:</strong> All data is stored locally on your device. We cannot access it, 
                and it will be lost if you clear your browser data.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Logged-in Users:</strong> Data is encrypted and securely stored in Firebase (Google Cloud). 
                Only you can access your data through your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Data Sharing</h2>
              <p className="text-gray-700">
                We <strong>never</strong> sell, rent, or share your personal health data with third parties. 
                Your information is private and confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Security</h2>
              <p className="text-gray-700">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure Firebase authentication</li>
                <li>Regular security audits</li>
                <li>HTTPS protocol for all connections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Your Rights</h2>
              <p className="text-gray-700">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Access your data at any time</li>
                <li>Delete your account and all associated data</li>
                <li>Export your data</li>
                <li>Opt out of notifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Cookies</h2>
              <p className="text-gray-700">
                We use essential cookies to maintain your session and preferences. 
                We do not use tracking or advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Children's Privacy</h2>
              <p className="text-gray-700">
                LUNIVA is designed for users aged 10 and above. We do not knowingly collect data from children 
                under 10 without parental consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. We will notify users of any significant changes 
                via email or in-app notification.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this privacy policy or your data, please contact us at:
              </p>
              <p className="text-pink-600 font-medium mt-2">privacy@luniva.app</p>
            </section>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">Last updated: January 2024</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/settings" className="text-pink-600 hover:text-pink-700 font-medium">
              ← Back to Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
