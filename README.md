<div align="center">  
  <div>
    <img src="https://img.shields.io/badge/-Next.js_15-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Vapi_AI-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Storyblok-white?style=for-the-badge&logo=storyblok&color=09B3AF" alt="storyblok" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
    <img src="https://img.shields.io/badge/-Google_Gemini-black?style=for-the-badge&logoColor=white&logo=google&color=4285F4" alt="gemini" />
  </div>

  <h1 align="center">Prep AI</h1>
  <h3 align="center">AI-Powered Interview Preparation Platform</h3>

   <p align="center">
     Practice real interviews with AI voice agents, receive instant feedback, and ace your next job interview.
    </p>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [API Routes](#-api-routes)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

**Prep AI** is a cutting-edge interview preparation platform that leverages AI voice technology to simulate realistic job interviews. Built with Next.js 15 and powered by Vapi's voice AI, the platform provides candidates with an immersive practice environment complete with real-time conversations and detailed performance feedback.

### What Makes Prep AI Unique?

- **🎙️ Voice-First Experience**: Natural conversation with AI interviewers using Vapi's advanced voice technology
- **🤖 AI-Powered Question Generation**: Dynamic interview questions tailored to your role, experience level, and tech stack using Google Gemini
- **📊 Intelligent Feedback System**: Comprehensive performance analysis across 5 key categories
- **📝 Headless CMS Integration**: Content management through Storyblok for easy updates without code changes [see here]("https://github.com/chibuchi001/nkwa/blob/f4390f27fe2d6230d358acf562d6dc2cf1d04c23/app/(root)/page.tsx#L26-L37"), [here](https://github.com/chibuchi001/nkwa/blob/f4390f27fe2d6230d358acf562d6dc2cf1d04c23/app/(root)/interview/%5Bid%5D/page.tsx#L29-L39), [and here](https://github.com/chibuchi001/nkwa/blob/f4390f27fe2d6230d358acf562d6dc2cf1d04c23/lib/storyBlok.ts#L1-L10)
- **🔥 Real-Time Processing**: Instant transcription and feedback generation
- **📱 Fully Responsive**: Seamless experience across all devices

---

## ✨ Features

### 🔐 **Secure Authentication**
- Email/password authentication powered by Firebase
- Protected routes and user session management
- Personalized dashboard for each user

### 🎨 **Smart Interview Generation**
- AI-generated questions based on:
  - Job role (Frontend, Backend, Full Stack, etc.)
  - Experience level (Junior, Mid, Senior)
  - Technical stack (React, Node.js, Python, etc.)
  - Interview type (Technical, Behavioral, Mixed)
- Customizable number of questions (5-20)

### 🎤 **AI Voice Interviews**
- Real-time voice conversation with AI interviewer
- Natural language processing for realistic interactions
- Live transcription display during interviews
- Visual feedback (speaking indicators, connection status)

### 📈 **Comprehensive Feedback**
Detailed scoring across 5 dimensions:
- **Communication Skills** - Clarity, articulation, response structure
- **Technical Knowledge** - Understanding of concepts and technologies
- **Problem-Solving** - Analytical thinking and solution approach
- **Cultural & Role Fit** - Alignment with job requirements
- **Confidence & Clarity** - Delivery, engagement, and presence

Additional insights:
- Overall impression score (0-100)
- Specific strengths highlighted
- Actionable areas for improvement
- Category breakdowns with detailed comments

### 🎯 **Interview Management**
- Dashboard view of all past interviews
- Ability to retake interviews
- Interview history with timestamps
- Progress tracking

### 🎨 **Modern UI/UX**
- Sleek dark mode interface
- Smooth animations and transitions
- Gradient cards and visual effects
- Responsive design for all screen sizes
- Custom-designed components

### 📝 **Content Management (Storyblok)**
- Manage UI text and labels without code deployment
- Update interview prompts and configurations
- Multi-language support ready
- Preview changes before publishing
- [see here]("https://github.com/chibuchi001/nkwa/blob/f4390f27fe2d6230d358acf562d6dc2cf1d04c23/app/(root)/page.tsx#L26-L37"), [here](https://github.com/chibuchi001/nkwa/blob/f4390f27fe2d6230d358acf562d6dc2cf1d04c23/app/(root)/interview/%5Bid%5D/page.tsx#L29-L39), [and here](https://github.com/chibuchi001/nkwa/blob/f4390f27fe2d6230d358acf562d6dc2cf1d04c23/lib/storyBlok.ts#L1-L10)

---

## ⚙️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library

### **Backend & Services**
- **Firebase** - Authentication and Firestore database
- **Vapi AI** - Voice AI for realistic interview conversations
- **Google Gemini** - AI-powered question and feedback generation
- **Storyblok** - Headless CMS for content management

### **Validation & Utils**
- **Zod** - Schema validation
- **Day.js** - Date formatting
- **clsx & tailwind-merge** - Dynamic class names

---

## 🏗 Architecture

```
┌─────────────────┐
│   Next.js App   │
│   (Frontend)    │
└────────┬────────┘
         │
    ┌────┴────────────────────┐
    │                         │
┌───▼────────┐      ┌────────▼──────┐
│  Firebase  │      │  Vapi Voice   │
│  (Auth &   │      │  AI Assistant │
│  Database) │      └───────────────┘
└────────────┘
    │
    │
┌───▼────────────┐   ┌─────────────┐
│ Google Gemini  │   │ Storyblok   │
│ (AI Question & │   │ (Headless   │
│  Feedback Gen) │   │    CMS)     │
└────────────────┘   └─────────────┘
```

### Data Flow

1. **User Authentication**: Firebase handles secure login/signup
2. **Interview Creation**: User inputs preferences → Gemini generates questions
3. **Voice Interview**: Vapi conducts real-time voice conversation
4. **Transcription**: Messages captured and stored in real-time
5. **Feedback Generation**: Transcript analyzed by Gemini → Structured feedback
6. **Content Delivery**: UI text and configs fetched from Storyblok

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git**
- **Firebase Project** (for authentication and database)
- **Vapi Account** (for voice AI)
- **Google AI Studio** (for Gemini API)
- **Storyblok Account** (for CMS)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/prep-ai.git
cd prep-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Vapi AI Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id

# Google Gemini AI
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

# Storyblok CMS
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_storyblok_preview_token

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Firebase Client (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin (Server-side)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY="your_private_key"
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

### Required Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_VAPI_WEB_TOKEN` | Vapi public API token | [Vapi Dashboard](https://vapi.ai) → API Keys |
| `NEXT_PUBLIC_VAPI_ASSISTANT_ID` | Your Vapi assistant ID | Vapi Dashboard → Assistants |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google Gemini API key | [Google AI Studio](https://makersuite.google.com/app/apikey) |
| `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN` | Storyblok preview token | Storyblok → Settings → Access Tokens |
| `NEXT_PUBLIC_FIREBASE_*` | Firebase config values | Firebase Console → Project Settings |
| `FIREBASE_PRIVATE_KEY` | Service account key | Firebase Console → Service Accounts |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_BASE_URL` | Application base URL | `http://localhost:3000` |

---

## 📁 Project Structure

```
prep-ai/
├── app/
│   ├── (auth)/              # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (root)/              # Protected routes
│   │   ├── interview/
│   │   │   └── [id]/
│   │   │       ├── page.tsx         # Interview page
│   │   │       └── feedback/
│   │   │           └── page.tsx     # Feedback display
│   │   └── page.tsx         # Dashboard
│   ├── api/
│   │   └── vapi/
│   │       └── generate/    # Question generation endpoint
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Agent.tsx            # Main voice agent component
│   ├── InterviewCard.tsx    # Interview display card
│   └── ui/                  # shadcn components
├── lib/
│   ├── actions/
│   │   ├── auth.action.ts   # Authentication logic
│   │   └── general.action.ts # Interview & feedback logic
│   ├── firebase/
│   │   ├── config.ts        # Firebase initialization
│   │   └── admin.ts         # Admin SDK
│   ├── storyblok.ts         # Storyblok setup
│   ├── vapi.sdk.ts          # Vapi SDK wrapper
│   └── utils.ts
├── constants/
│   └── index.ts             # App constants
├── types/
│   └── index.d.ts           # TypeScript definitions
└── public/
    ├── covers/              # Interview cover images
    └── *.svg               # Icons and assets
```

---

## 🔧 Key Components

### `Agent.tsx`
The core voice interview component that:
- Manages Vapi connection lifecycle
- Captures real-time transcriptions
- Handles call states (inactive, connecting, active, finished)
- Displays speaking indicators
- Triggers feedback generation

### `InterviewCard.tsx`
Displays interview information including:
- Role and type badges
- Tech stack icons
- Creation timestamp
- Action buttons (Start/View Feedback)

### Interview Generation Flow
```typescript
// 1. User submits interview preferences
POST /api/vapi/generate

// 2. Gemini generates questions
const questions = await generateQuestions({
  role, level, techstack, type, amount
});

// 3. Store in Firestore
await createInterview({ userId, ...data });

// 4. Redirect to interview page
router.push(`/interview/${interviewId}`);
```

### Feedback Generation Flow
```typescript
// 1. Interview ends, transcript captured
const messages = [...transcriptHistory];

// 2. Send to Gemini for analysis
const feedback = await generateFeedback(messages);

// 3. Parse structured response
const parsedFeedback = {
  categoryScores: [...],
  strengths: [...],
  areasForImprovement: [...],
  totalScore: number,
  finalAssessment: string
};

// 4. Store and display
await saveFeedback(parsedFeedback);
```

---

## 🛣 API Routes

### `POST /api/vapi/generate`
Generates interview questions using Google Gemini.

**Request Body:**
```typescript
{
  role: string;
  level: "Junior" | "Mid" | "Senior";
  techstack: string;
  type: "Technical" | "Behavioral" | "Mixed";
  amount: number;
}
```

**Response:**
```typescript
{
  questions: string[];
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Add environment variables
- Deploy

3. **Update Environment Variables**
- Change `NEXT_PUBLIC_BASE_URL` to your production URL
- Ensure all API keys are set

### Post-Deployment Checklist
- ✅ Test authentication flow
- ✅ Verify Vapi voice connection
- ✅ Test interview creation
- ✅ Confirm feedback generation
- ✅ Check Storyblok content loading

---

## 🎨 Storyblok CMS Setup

### Creating Content Types

1. **Interview Home Page**
```
Content Type: interview_home
Fields:
- title (Text)
- description (Textarea)
- callButtonText (Text)
- endButtonText (Text)
- homeCTAButtonText (Text)
```

2. **Interview Configuration**
```
Content Type: interview_gen
Fields:
- title (Text)
- agent_name (Text)
- agent_role (Text)
- callButtonText (Text)
- endButtonText (Text)
- interviewerName (Text)
```

3. **Create Stories**
- Navigate to Content → New Story
- Select content type
- Fill in fields
- Publish

### Fetching Content
```typescript
import { getStoryblokApi } from "@storyblok/react/rsc";

const { data } = await storyblokApi.get("cdn/stories/interview-home", {
  version: "draft", // or "published"
});

const content = data.story.content;
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Vapi AI** for the incredible voice AI technology
- **Google Gemini** for powerful AI capabilities
- **Storyblok** for flexible content management
- **Firebase** for reliable backend services
- **Vercel** for seamless deployment

---

## 📞 Support

For issues and questions:
- 📧 Email: support@prepai.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/prep-ai/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/prep-ai/discussions)

---

<div align="center">
  <p>Built with ❤️ by developers, for developers</p>
  <p>⭐ Star us on GitHub — it motivates us a lot!</p>
</div>