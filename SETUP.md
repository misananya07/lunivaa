# LUNIVA - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Firebase Setup

1. Go to https://console.firebase.google.com/
2. Click "Add Project" and create a new project named "luniva"
3. Enable Authentication:
   - Go to Authentication → Sign-in method
   - Enable "Email/Password"
4. Create Firestore Database:
   - Go to Firestore Database
   - Click "Create database"
   - Start in test mode
5. Get your config:
   - Go to Project Settings → General
   - Scroll to "Your apps" → Web app
   - Copy the config values

### Step 3: Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=luniva-xxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=luniva-xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=luniva-xxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

### Step 4: Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000

## 🎯 Testing the App

1. **Guest Mode**: Click "Continue as Guest" on login page
2. **Create Account**: Sign up with email/password
3. **Track Period**: Go to Tracker and log your period
4. **Chat with AI**: Ask questions in the Chat page
5. **Take Quiz**: Complete the PCOS screening

## 📦 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

Or use the Vercel website:
1. Push code to GitHub
2. Import repository on vercel.com
3. Add environment variables
4. Deploy!

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#your-color',
  }
}
```

### Add More Languages
Edit `app/settings/page.tsx` and add to the languages array.

### Modify AI Responses
Edit `app/chat/page.tsx` in the `getAIResponse` function.

## 🔧 Troubleshooting

**Firebase errors?**
- Check if `.env.local` exists and has correct values
- Verify Firebase project is active
- Ensure Authentication and Firestore are enabled

**Build errors?**
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Run `npm run build`

**Styling issues?**
- Clear browser cache
- Check if Tailwind CSS is properly configured

## 📱 Mobile Testing

Test on mobile:
```bash
npm run dev -- -H 0.0.0.0
```
Then visit `http://your-ip:3000` on your phone.

## 🎉 You're Ready!

LUNIVA is now running. Start tracking, learning, and chatting!

For questions: support@luniva.app
