'use client';

import { useState, useRef, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your friendly period care assistant 🌸 Ask me anything about menstrual health, symptoms, or cycle tracking. Remember, I provide general guidance only - always consult a doctor for medical advice!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const aiResponse: Message = {
        role: 'assistant',
        content: data.message
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error: any) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `I'm having trouble connecting right now (Error: ${error.message || 'Unknown'}). Please check your connection or try again later. 🌸`
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-3xl overflow-hidden shadow-sm border border-[#eb477e]/5">
        <div className="flex-1 overflow-y-auto px-4 py-6 bg-[#f8f6f6]/50 relative">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#eb477e]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="mx-auto max-w-3xl flex flex-col gap-6 relative z-10">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${message.role === 'user' ? 'bg-[#eb477e] text-white' : 'bg-[#eb477e]/20 text-[#eb477e]'}`}>
                  {message.role === 'user' ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  )}
                </div>
                <div className={`flex flex-col gap-2 max-w-[85%] ${message.role === 'user' ? 'items-end' : ''}`}>
                  <div className={`rounded-xl p-4 text-sm leading-relaxed shadow-sm border ${message.role === 'user' ? 'rounded-tr-none bg-[#eb477e] text-white shadow-[#eb477e]/20' : 'rounded-tl-none bg-white border-[#eb477e]/10'}`}>
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-full bg-[#eb477e]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#eb477e]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#eb477e] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#eb477e] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#eb477e] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="p-4 bg-white border-t border-[#eb477e]/10">
          <div className="mx-auto max-w-3xl relative flex items-center">
            <input
              className="w-full rounded-2xl border-none bg-[#f8f6f6] py-4 pl-6 pr-16 text-sm focus:ring-2 focus:ring-[#eb477e]/30 transition-all placeholder:text-[#88636f]/60"
              placeholder="Ask Luna anything about your health..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="absolute right-2 flex w-10 h-10 items-center justify-center rounded-xl bg-[#eb477e] text-white hover:opacity-90 transition-all shadow-md disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
