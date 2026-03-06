'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LanguageSelector from '@/components/LanguageSelector';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');56
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    }
  };

  const handleGuestMode = () => {
    localStorage.setItem('guestMode', 'true');
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f8f6f6] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#eb477e]/10 px-6 md:px-20 py-4 bg-white/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 text-[#eb477e]">
          <img src="/lunivalogo.png" alt="LUNIVA" className="w-10 h-10 object-contain" />
          <h2 className="text-[#181113] text-2xl font-black leading-tight tracking-[-0.015em] uppercase">LUNIVA</h2>
        </Link>
        <div className="hidden md:flex gap-3 items-center">
          <LanguageSelector />
          <button onClick={() => setIsLogin(true)} className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${isLogin ? 'bg-[#eb477e] text-white' : 'bg-[#eb477e]/10 text-[#eb477e]'}`}>
            Sign In
          </button>
          <button onClick={() => setIsLogin(false)} className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${!isLogin ? 'bg-[#eb477e] text-white' : 'bg-[#eb477e]/10 text-[#eb477e] border border-[#eb477e]/20'}`}>
            Create Account
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-10">
        <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-xl shadow-2xl shadow-[#eb477e]/5 overflow-hidden border border-[#eb477e]/5">
          {/* Left Side: Illustration */}
          <div className="hidden lg:flex flex-col justify-center p-16 bg-[#eb477e]/5 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#eb477e]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#eb477e]/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-inner border border-white/50 bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌸</div>
                  <h3 className="text-2xl font-bold text-[#181113]">Your Health Journey</h3>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-black text-[#181113] leading-tight tracking-tight">
                  Your cycle, your rhythm, <span className="text-[#eb477e]">your health.</span>
                </h1>
                <p className="text-lg text-[#181113]/70 leading-relaxed font-light">
                  Welcome to a safe space for your menstrual health journey. We believe tracking your cycle should be as natural and calm as a morning breeze.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                </div>
                <p className="text-sm self-center text-[#eb477e] font-medium italic">Joined by 10,000+ women today</p>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="mb-10 lg:hidden text-center">
              <h2 className="text-3xl font-black text-[#181113]">LUNIVA</h2>
              <p className="text-[#181113]/60 mt-2">Empowering your menstrual health</p>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#181113] mb-2">{isLogin ? 'Access Your Account' : 'Create Account'}</h2>
                <p className="text-[#181113]/60 text-sm">Please enter your details below to {isLogin ? 'log in' : 'sign up'}.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#181113] ml-1">Email or Username</label>
                  <div className="relative group">
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#eb477e]/40 group-focus-within:text-[#eb477e] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#eb477e]/10 bg-[#f8f6f6] focus:bg-white focus:ring-4 focus:ring-[#eb477e]/10 focus:border-[#eb477e] outline-none transition-all placeholder:text-[#88636f]/50"
                      placeholder="Enter your email or username"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-semibold text-[#181113]">Password</label>
                    {isLogin && <a className="text-xs font-medium text-[#eb477e] hover:underline" href="#">Forgot?</a>}
                  </div>
                  <div className="relative group">
                    <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#eb477e]/40 group-focus-within:text-[#eb477e] transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#eb477e]/10 bg-[#f8f6f6] focus:bg-white focus:ring-4 focus:ring-[#eb477e]/10 focus:border-[#eb477e] outline-none transition-all placeholder:text-[#88636f]/50"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#eb477e]/40 hover:text-[#eb477e] transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                {isLogin && (
                  <div className="flex items-center gap-2 ml-1">
                    <input className="w-4 h-4 text-[#eb477e] rounded border-[#eb477e]/20 focus:ring-[#eb477e]/20" id="remember" type="checkbox" />
                    <label className="text-sm text-[#181113]/60" htmlFor="remember">Remember me for 30 days</label>
                  </div>
                )}
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm">
                    {error}
                  </div>
                )}
                <button type="submit" className="w-full bg-[#eb477e] hover:bg-[#eb477e]/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#eb477e]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </button>
              </form>
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-[#eb477e]/10"></div>
                <span className="flex-shrink mx-4 text-[#181113]/30 text-xs font-medium uppercase tracking-widest">Or continue with</span>
                <div className="flex-grow border-t border-[#eb477e]/10"></div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <button onClick={handleGuestMode} className="w-full py-4 px-6 rounded-xl border border-[#eb477e]/10 bg-white hover:bg-[#eb477e]/5 text-[#181113] font-bold text-center transition-all flex items-center justify-center gap-3">
                  <svg className="w-5 h-5 text-[#eb477e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Continue as Guest
                </button>
              </div>
              <div className="pt-6 text-center">
                <p className="text-sm text-[#181113]/60">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                  <button onClick={() => setIsLogin(!isLogin)} className="text-[#eb477e] font-bold hover:underline ml-1">
                    {isLogin ? 'Create Account' : 'Sign In'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[#181113]/40 text-xs font-medium">
          <p>© 2024 LUNIVA Menstrual Health Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#eb477e] transition-colors">Privacy Policy</Link>
            <a className="hover:text-[#eb477e] transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
