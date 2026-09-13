import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrainCircuit, BookOpen, PenTool, Sparkles, LogIn } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-6 w-6 text-indigo-600 mr-2" />
          <span className="font-bold text-xl text-slate-900">StudyFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors text-slate-600 hidden sm:block" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors text-slate-600 hidden sm:block" href="#how-it-works">
            How it works
          </Link>
          <Link href="/login">
            <Button variant="ghost" className="text-slate-600">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-600 mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Your AI-powered study companion
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-900">
                  Turn confusion into <span className="text-indigo-600">clarity.</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Understand difficult concepts in simple language, organize your learning, and prepare for exams with your personal AI tutor.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 h-12 px-8 text-base">
                    Start Studying Now
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base border-slate-300">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">Everything you need to ace your exams</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stop struggling with dense textbooks. StudyFlow gives you the tools to learn actively and effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <BrainCircuit className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Patient AI Tutor</h3>
                <p className="text-slate-500">Ask questions, get simple explanations, and request real-world examples anytime.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-violet-100 rounded-full">
                  <BookOpen className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instant Summaries</h3>
                <p className="text-slate-500">Paste your study material and instantly get key points, important terms, and summaries.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <div className="p-3 bg-pink-100 rounded-full">
                  <PenTool className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Active Recall Tools</h3>
                <p className="text-slate-500">Generate quizzes and flashcards automatically from your notes to test your knowledge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Ready to transform your study habits?</h2>
                <p className="max-w-[600px] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who are learning faster and remembering more with StudyFlow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 h-12 px-8 text-base">
                    Create Free Account
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-slate-50">
        <p className="text-xs text-slate-500">© 2024 StudyFlow AI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-slate-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-slate-500" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
