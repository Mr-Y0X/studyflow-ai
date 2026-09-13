# StudyFlow AI - Smart Study Companion

StudyFlow is a complete, polished, production-quality MVP of an AI-powered study companion app. It helps students study, understand difficult concepts in simple language, organize their learning, and prepare for exams using AI.

## Features

- **Polished Landing & Auth Pages:** A beautiful marketing page and modern demo authentication flows.
- **Student Dashboard:** Track study streaks, active subjects, and access quick AI tools.
- **Subject Workspaces:** Organize learning materials and track progress per course.
- **AI Tutor (Gemini Integration):** A patient AI assistant to explain concepts and answer questions.
- **Study Tools:** Summarizer, Concept Explainer, Quiz Generator, and Flashcard Creator.
- **Study Sessions:** Focused Pomodoro timer with integrated notes and goals.
- **Progress Tracking:** Visual analytics on study time, streaks, and quiz performance.
- **Settings:** Profile and preference management, including AI API key configuration.
- **Robust Demo Mode:** All AI features have a fallback demo mode that works without API keys.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **State Management:** Zustand
- **AI Integration:** Google Gemini API (`@google/genai`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm i
   ```
3. Set up environment variables. Create a `.env.local` file in the root directory:
   ```env
   # Optional: Add your Google Gemini API key here for real AI responses.
   # If left blank, the app will run in a robust Demo Mode.
   GEMINI_API_KEY="your_api_key_here"
   ```
4. Run the development server:
   ```bash
   npm run start:dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and API routes.
  - `(auth)`: Login and Signup pages.
  - `(dashboard)`: All authenticated app views (Dashboard, Subjects, Tutor, Tools, Sessions, Progress, Settings).
  - `api/ai`: The server-side API route for Google Gemini integration.
- `src/components`: Reusable UI components (layout components and shadcn components).
- `src/lib`: Utility functions and Zustand store setup.

## Next Steps

To take this MVP to production, consider implementing:
1. **Real Database Integration:** Connect a database like Supabase or PostgreSQL (via Prisma) to persist user data, subjects, notes, and study session history.
2. **Real Authentication:** Implement NextAuth.js, Clerk, or Supabase Auth.
3. **Advanced AI Integrations:** Add support for file uploads (PDF parsing) to allow users to summarize entire textbooks.
