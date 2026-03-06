'use client';

import { useState } from 'react';
import AppLayout from '@/components/AppLayout';

export default function ScreeningPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<string | null>(null);

  const questions = [
    {
      id: 'irregular',
      question: 'Do you have irregular periods (cycles shorter than 21 days or longer than 35 days)?',
      options: ['Yes, frequently', 'Sometimes', 'Rarely', 'No, my cycles are regular']
    },
    {
      id: 'missed',
      question: 'Have you missed periods for 3 or more months (excluding pregnancy)?',
      options: ['Yes', 'No']
    },
    {
      id: 'hair',
      question: 'Do you experience excess hair growth on face, chest, or back?',
      options: ['Yes, significant', 'Yes, mild', 'No']
    },
    {
      id: 'acne',
      question: 'Do you have persistent acne or oily skin?',
      options: ['Yes, severe', 'Yes, moderate', 'Yes, mild', 'No']
    },
    {
      id: 'weight',
      question: 'Have you experienced unexplained weight gain or difficulty losing weight?',
      options: ['Yes', 'Somewhat', 'No']
    },
    {
      id: 'thinning',
      question: 'Are you experiencing hair thinning or hair loss on your scalp?',
      options: ['Yes', 'Somewhat', 'No']
    },
    {
      id: 'darkening',
      question: 'Do you have dark patches of skin (especially on neck, armpits, or groin)?',
      options: ['Yes', 'No']
    },
    {
      id: 'family',
      question: 'Does anyone in your family have PCOS or diabetes?',
      options: ['Yes', 'Not sure', 'No']
    }
  ];

  const calculateRisk = () => {
    let score = 0;

    if (answers.irregular === 'Yes, frequently') score += 3;
    else if (answers.irregular === 'Sometimes') score += 2;
    else if (answers.irregular === 'Rarely') score += 1;

    if (answers.missed === 'Yes') score += 3;
    if (answers.hair === 'Yes, significant') score += 3;
    else if (answers.hair === 'Yes, mild') score += 1;

    if (answers.acne === 'Yes, severe') score += 2;
    else if (answers.acne === 'Yes, moderate') score += 1;

    if (answers.weight === 'Yes') score += 2;
    else if (answers.weight === 'Somewhat') score += 1;

    if (answers.thinning === 'Yes') score += 2;
    else if (answers.thinning === 'Somewhat') score += 1;

    if (answers.darkening === 'Yes') score += 2;
    if (answers.family === 'Yes') score += 2;

    if (score <= 5) return 'low';
    if (score <= 12) return 'moderate';
    return 'high';
  };

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[step].id]: answer });

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const risk = calculateRisk();
      setResult(risk);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const getRiskInfo = (risk: string) => {
    switch (risk) {
      case 'low':
        return {
          color: 'green',
          title: 'Low Risk',
          message: 'Based on your answers, you have a low risk for PCOS. However, if you have concerns about your menstrual health, it\'s always good to consult a healthcare provider.',
          icon: '✅'
        };
      case 'moderate':
        return {
          color: 'yellow',
          title: 'Moderate Risk',
          message: 'Your answers suggest you may have some symptoms associated with PCOS. We recommend consulting a gynecologist for proper evaluation and testing.',
          icon: '⚠️'
        };
      case 'high':
        return {
          color: 'red',
          title: 'Higher Risk',
          message: 'Your answers indicate several symptoms commonly associated with PCOS. Please consult a gynecologist soon for proper diagnosis and treatment. Early management makes a big difference!',
          icon: '🚨'
        };
      default:
        return null;
    }
  };

  return (
    <AppLayout>
      <div className="flex-grow flex flex-col items-center justify-start py-8">
        <div className="w-full max-w-2xl">
          {!result ? (
            <>
              <div className="mb-12">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">Health Screening</h3>
                    <p className="text-sm text-[#eb477e] font-medium">Step {step + 1} of {questions.length}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">{Math.round(((step + 1) / questions.length) * 100)}%</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-[#eb477e]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#eb477e] rounded-full transition-all duration-500 ease-out" style={{ width: `${((step + 1) / questions.length) * 100}%` }}></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-xl shadow-[#eb477e]/5 p-8 md:p-12 border border-[#eb477e]/5">
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{questions[step].question}</h1>
                  <p className="text-zinc-500 text-lg">This helps us personalize your health insights.</p>
                </div>
                <div className="space-y-4">
                  {questions[step].options.map((option) => (
                    <label key={option} className="relative cursor-pointer block">
                      <input className="peer sr-only" name="answer" type="radio" onClick={() => handleAnswer(option)} />
                      <div className="flex items-center gap-5 p-6 rounded-xl border-2 border-zinc-100 bg-zinc-50/50 hover:border-[#eb477e]/30 transition-all duration-200 peer-checked:border-[#eb477e] peer-checked:bg-[#eb477e]/5">
                        <div className="w-6 h-6 rounded-full border-2 border-zinc-300 flex items-center justify-center flex-shrink-0 peer-checked:border-[#eb477e] peer-checked:bg-[#eb477e]">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                          <p className="text-lg font-semibold text-[#181113]">{option}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {step > 0 && (
                  <button onClick={() => setStep(step - 1)} className="mt-6 text-[#eb477e] hover:text-[#eb477e]/80 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                    Previous
                  </button>
                )}
              </div>
            </>
          ) : (
            <div>
              <div className={`bg-white rounded-xl shadow-xl shadow-[#eb477e]/5 p-8 md:p-12 border border-[#eb477e]/5 ${result === 'low' ? 'bg-gradient-to-br from-green-50 to-green-100' : result === 'moderate' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100' : 'bg-gradient-to-br from-red-50 to-red-100'}`}>
                <div className="text-center">
                  <div className="text-6xl mb-4">{getRiskInfo(result)?.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">{getRiskInfo(result)?.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{getRiskInfo(result)?.message}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={resetQuiz} className="flex-1 px-8 py-4 rounded-xl border-2 border-[#eb477e]/20 text-[#eb477e] font-bold hover:bg-[#eb477e]/5 transition-all">Take Again</button>
                <a href="/education" className="flex-1 px-8 py-4 bg-[#eb477e] text-white rounded-xl font-bold text-center hover:bg-[#eb477e]/90 transition-all">Learn More</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
