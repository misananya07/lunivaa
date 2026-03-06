# LUNIVA - Your Safe Space for Period Care 🌸

A friendly AI-powered menstrual health platform designed for users aged 10–55 in India, with plans for global expansion.

## Features

✨ **Period Tracker** - Track your cycle, predict your next period, and understand your patterns
💬 **AI Chat Assistant** - Get instant answers to your period questions in a friendly way
📚 **Education Hub** - Learn about cycles, hygiene, nutrition, PCOS, and bust myths
📊 **Symptom & Mood Tracker** - Log your symptoms and mood to spot patterns
🏥 **PCOS Health Screening** - Take our awareness quiz and get personalized guidance
🚨 **Emergency Guidance** - Know when to seek medical help with our decision-tree system
🌍 **Multilingual Support** - Available in English, Hindi, Tamil, Telugu, Bengali, and Marathi
🔒 **Privacy First** - Your data is secure and never shared

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Database:** Firestore
- **Deployment:** Vercel-ready
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account (for authentication and database)

### Installation

1. **Clone the repository**
```bash
cd luniva
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable Authentication (Email/Password)
- Create a Firestore database
- Copy your Firebase config

4. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

```bash
npm run build
```

## Project Structure

```
luniva/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/                # Authentication
│   ├── dashboard/            # User dashboard
│   ├── tracker/              # Period tracker
│   ├── symptoms/             # Symptom & mood log
│   ├── chat/                 # AI chat assistant
│   ├── education/            # Education hub
│   ├── screening/            # PCOS screening
│   ├── emergency/            # Emergency guidance
│   ├── settings/             # User settings
│   └── privacy/              # Privacy policy
├── components/
│   └── Navigation.tsx        # Navigation component
├── lib/
│   ├── firebase.ts           # Firebase config
│   └── AuthContext.tsx       # Auth context
└── public/                   # Static assets
```

## Features in Detail

### 1. Period Tracker
- Log period start/end dates
- Track flow intensity
- Predict next cycle using basic calculation
- View cycle history

### 2. AI Chat Assistant
- Friendly, conversational interface
- Answers common period questions
- Provides general health guidance
- Maintains conversation history

### 3. Education Hub
Categories include:
- Cycle basics
- Hygiene tips
- Nutrition guide
- Mental health
- Myth busting
- PCOS awareness
- Anemia awareness

### 4. Health Screening
- Multi-step PCOS questionnaire
- Risk assessment (Low/Moderate/High)
- Personalized guidance
- Educational resources

### 5. Emergency Guidance
Decision-tree for:
- Heavy bleeding
- Severe pain
- Missed periods
- Unusual symptoms

## Guest Mode

Users can explore LUNIVA without creating an account. Data is stored locally in the browser.

## Security & Privacy

- All data is encrypted
- Firebase Authentication for secure login
- Guest mode data stays on device
- No third-party data sharing
- HTTPS only

## Disclaimer

⚠️ **LUNIVA is a health guidance tool, not a medical device.** Always consult healthcare professionals for medical advice, diagnosis, or treatment.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

This is a production-ready application. For contributions or issues, please contact the development team.

## License

© 2024 LUNIVA. All rights reserved.

## Support

For questions or support, contact: support@luniva.app

---

Made with 💖 for menstrual health awareness
