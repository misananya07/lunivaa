'use client';

import Link from 'next/link';
import LanguageSelector from '@/components/LanguageSelector';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfafb]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#eb477e]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lunivalogo.png" alt="LUNIVA" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-extrabold tracking-tight text-[#181113]">LUNIVA</h1>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold text-[#181113]/70 hover:text-[#eb477e] transition-colors" href="#features">Features</a>
            <a className="text-sm font-semibold text-[#181113]/70 hover:text-[#eb477e] transition-colors" href="#education">Education</a>
            <a className="text-sm font-semibold text-[#181113]/70 hover:text-[#eb477e] transition-colors" href="#community">Community</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link href="/login" className="hidden sm:block px-6 py-2.5 text-sm font-bold text-[#181113] bg-[#eb477e]/10 hover:bg-[#eb477e]/20 rounded-xl transition-all">
              Sign In
            </Link>
            <Link href="/login" className="px-6 py-2.5 text-sm font-bold text-white bg-[#eb477e] hover:shadow-lg hover:shadow-[#eb477e]/30 rounded-xl transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-[#fdfafb]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eb477e]/5 border border-[#eb477e]/20 rounded-full">
                <svg className="w-4 h-4 text-[#eb477e]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-wider text-[#eb477e]">Your Safe Space for Health</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-[#181113]">
                Empowering your <span className="text-[#eb477e] italic">flow.</span>
              </h2>
              <p className="text-lg md:text-xl text-[#88636f] max-w-lg leading-relaxed">
                LUNIVA is a modern, friendly platform for menstrual health. Track your cycle and learn about your body in a safe, non-clinical space designed for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/login" className="px-8 py-4 bg-[#eb477e] text-white font-bold rounded-xl shadow-xl shadow-[#eb477e]/20 hover:scale-[1.02] transition-transform flex items-center gap-2">
                  Join the Community
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="/education" className="px-8 py-4 bg-white border-2 border-[#eb477e]/10 text-[#181113] font-bold rounded-xl hover:bg-[#eb477e]/5 transition-all">
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                </div>
                <p className="text-sm font-medium text-[#88636f]">Joined by 50k+ women this month</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#eb477e]/10 blur-[100px] rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#eb477e]/10 border-8 border-white">
                <div className="aspect-[4/3] bg-[#fdf8f4] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🌸</div>
                    <h3 className="text-2xl font-bold text-[#181113] mb-2">Your Health Journey</h3>
                    <p className="text-[#88636f]">Track, Learn, Thrive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20 bg-[#fdf8f4]/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h3 className="text-3xl md:text-4xl font-black text-[#181113]">More than just a tracker</h3>
              <p className="text-[#88636f]">LUNIVA provides the tools and knowledge you need to take control of your health with confidence and ease.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon="📊"
                title="Cycle Visualization"
                description="Understand your patterns with intuitive and non-medical visualization tools that focus on how you feel."
                link="/tracker"
              />
              <FeatureCard
                icon="📚"
                title="Health Library"
                description="Access expert-backed articles on everything from the luteal phase to hormonal balance, simplified for you."
                link="/education"
              />
              <FeatureCard
                icon="💖"
                title="Community Support"
                description="Join a safe space to discuss health and wellness, and help us destigmatize menstruation together."
                link="/chat"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-black text-[#181113]">What our community says</h3>
                <p className="text-[#88636f] max-w-md">LUNIVA makes menstrual health accessible and approachable for thousands of women every day.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                name="Sarah J."
                role="LUNIVA PRO USER"
                text="LUNIVA makes me feel supported and seen. The design is so calming compared to other clinical apps I've tried."
              />
              <TestimonialCard
                name="Elena R."
                role="FREE MEMBER"
                text="I finally understand my cycle phases thanks to the health library. It's been life-changing for my mental health."
              />
              <TestimonialCard
                name="Maya W."
                role="PREMIUM MEMBER"
                text="The best app for cycle tracking without the clinical feel. It feels like a friend is helping me navigate my body."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="bg-[#eb477e] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 blur-[100px] translate-x-1/4 translate-y-1/4 rounded-full"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to start your journey?</h3>
              <p className="text-white/80 text-lg md:text-xl">Join thousands of women who are learning to love and understand their bodies every single day.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/login" className="w-full sm:w-auto px-10 py-5 bg-white text-[#eb477e] font-black rounded-2xl shadow-2xl hover:bg-[#fdf8f4] transition-colors text-lg">
                  Get Started Now
                </Link>
                <Link href="/chat" className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white font-black rounded-2xl hover:bg-white/10 transition-colors text-lg">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#fdf8f4]/80 pt-20 pb-10 border-t border-[#eb477e]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img src="/lunivalogo.png" alt="LUNIVA" className="w-10 h-10 object-contain" />
                <h1 className="text-2xl font-extrabold tracking-tight text-[#181113]">LUNIVA</h1>
              </div>
              <p className="text-[#88636f] max-w-xs leading-relaxed">
                A modern health platform dedicated to the wellness and education of women everywhere.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-[#181113] mb-6">Product</h5>
              <ul className="space-y-4 text-[#88636f] text-sm">
                <li><Link href="/tracker" className="hover:text-[#eb477e] transition-colors">Track Cycle</Link></li>
                <li><Link href="/symptoms" className="hover:text-[#eb477e] transition-colors">Symptoms</Link></li>
                <li><Link href="/education" className="hover:text-[#eb477e] transition-colors">Library</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#181113] mb-6">Company</h5>
              <ul className="space-y-4 text-[#88636f] text-sm">
                <li><a className="hover:text-[#eb477e] transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-[#eb477e] transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[#181113] mb-6">Legal</h5>
              <ul className="space-y-4 text-[#88636f] text-sm">
                <li><Link href="/privacy" className="hover:text-[#eb477e] transition-colors">Privacy Policy</Link></li>
                <li><a className="hover:text-[#eb477e] transition-colors" href="#">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#eb477e]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-[#88636f]">© 2024 LUNIVA Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: any) {
  return (
    <Link href={link}>
      <div className="bg-white p-8 rounded-3xl border border-[#eb477e]/5 hover:border-[#eb477e]/20 transition-all group cursor-pointer">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
        <h4 className="text-xl font-bold mb-3 text-[#181113]">{title}</h4>
        <p className="text-[#88636f] leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}

function TestimonialCard({ name, role, text }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#eb477e]/5 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div>
          <p className="font-bold text-[#181113]">{name}</p>
          <p className="text-xs text-[#eb477e] font-bold">{role}</p>
        </div>
      </div>
      <p className="text-[#88636f] italic">"{text}"</p>
    </div>
  );
}
