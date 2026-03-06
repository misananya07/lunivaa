import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq client
// Note: We initialize it, but check for API key in the handler to return better errors
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || 'dummy_key_for_init',
});

const SYSTEM_PROMPT = `You are Luna, a warm, calm, and supportive menstrual health assistant for LUNIVA. Your role is to:

- Provide educational guidance about menstrual health, cycles, symptoms, and wellness
- Use a friendly, non-clinical tone that makes users feel safe and supported
- Offer general health information, NOT medical diagnosis or treatment
- Always encourage users to consult healthcare professionals for medical concerns
- Be empathetic and understanding about sensitive topics
- Keep responses concise and easy to understand
- Use inclusive language

Remember: You provide education and support, not medical advice.`;

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.GROQ_API_KEY) {
      console.error('GROQ_API_KEY is missing from environment variables');
      return NextResponse.json(
        { error: 'Service configuration error: Missing API Key. Please add GROQ_API_KEY to .env.local' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format: messages array is required' },
        { status: 400 }
      );
    }

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        // Using correct current model
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 500,
      });

      const responseContent = chatCompletion.choices[0]?.message?.content;

      if (!responseContent) {
        throw new Error('No content received from AI service');
      }

      return NextResponse.json({ message: responseContent });
    } catch (apiError: any) {
      console.error('Groq API specific error:', apiError);
      // Return the specific API error message if available
      return NextResponse.json(
        { error: `AI Service Error: ${apiError.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('General API route error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error: ' + (error.message || 'Unknown error') },
      { status: 500 }
    );
  }
}
