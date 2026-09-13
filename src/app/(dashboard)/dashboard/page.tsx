"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, BookOpen, Clock, Target, Flame, Lightbulb, PlayCircle, Plus } from "lucide-react";
import Link from "next/link";

const recentSessions = [
  { id: 1, subject: "Biology", topic: "Cell Division", duration: "45 min", date: "Today, 10:00 AM" },
  { id: 2, subject: "History", topic: "World War II", duration: "60 min", date: "Yesterday, 2:30 PM" },
  { id: 3, subject: "Math", topic: "Calculus Limits", duration: "30 min", date: "Yesterday, 9:00 AM" },
];

const upcomingGoals = [
  { id: 1, title: "Finish Biology Chapter 4", deadline: "Tomorrow" },
  { id: 2, title: "Take Math Practice Quiz", deadline: "In 3 days" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome back, Student! 👋</h1>
          <p className="text-slate-500 mt-1">Here is an overview of your learning journey.</p>
        </div>
        <Link href="/sessions">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <PlayCircle className="mr-2 h-4 w-4" /> Start New Session
          </Button>
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 Days</div>
            <p className="text-xs text-slate-500">Keep it up!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12h 30m</div>
            <p className="text-xs text-slate-500">+2h from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-slate-500">Across 2 semesters</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Concepts Mastered</CardTitle>
            <Target className="h-4 w-4 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-slate-500">Verified by AI quizzes</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Study Sessions</CardTitle>
              <CardDescription>Your latest learning activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-md border border-slate-200">
                        <BookOpen className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-slate-900">{session.topic}</p>
                        <p className="text-xs text-slate-500">{session.subject}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm text-slate-900">{session.duration}</p>
                      <p className="text-xs text-slate-500">{session.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick AI Actions</CardTitle>
              <CardDescription>Get instant help from your tutor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/tutor?prompt=explain">
                  <Button variant="outline" className="w-full justify-start h-auto py-3 px-4 border-indigo-100 bg-indigo-50/50 hover:bg-indigo-100/50 text-indigo-700">
                    <Lightbulb className="mr-3 h-5 w-5 text-indigo-600" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">Explain a concept</div>
                      <div className="text-xs text-indigo-600/70 font-normal">Simplify difficult topics</div>
                    </div>
                  </Button>
                </Link>
                <Link href="/tools?tab=summarize">
                  <Button variant="outline" className="w-full justify-start h-auto py-3 px-4 border-violet-100 bg-violet-50/50 hover:bg-violet-100/50 text-violet-700">
                    <BookOpen className="mr-3 h-5 w-5 text-violet-600" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">Summarize text</div>
                      <div className="text-xs text-violet-600/70 font-normal">Extract key points</div>
                    </div>
                  </Button>
                </Link>
                <Link href="/tools?tab=quiz">
                  <Button variant="outline" className="w-full justify-start h-auto py-3 px-4 border-pink-100 bg-pink-50/50 hover:bg-pink-100/50 text-pink-700">
                    <Target className="mr-3 h-5 w-5 text-pink-600" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">Generate quiz</div>
                      <div className="text-xs text-pink-600/70 font-normal">Test your knowledge</div>
                    </div>
                  </Button>
                </Link>
                <Link href="/tutor">
                  <Button variant="outline" className="w-full justify-start h-auto py-3 px-4 border-sky-100 bg-sky-50/50 hover:bg-sky-100/50 text-sky-700">
                    <BrainCircuit className="mr-3 h-5 w-5 text-sky-600" />
                    <div className="text-left">
                      <div className="font-semibold text-sm">Ask anything</div>
                      <div className="text-xs text-sky-600/70 font-normal">Open chat with AI Tutor</div>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingGoals.map((goal) => (
                  <div key={goal.id} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <div className="h-4 w-4 rounded-full border-2 border-slate-300"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{goal.title}</p>
                      <p className="text-xs text-slate-500">{goal.deadline}</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full text-xs text-indigo-600 h-8 mt-2">
                  <Plus className="mr-1 h-3 w-3" /> Add Goal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
