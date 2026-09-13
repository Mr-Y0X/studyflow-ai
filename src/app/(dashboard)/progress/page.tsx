"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Flame, Target, Trophy, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Progress</h1>
        <p className="text-slate-500 mt-1">Track your learning journey and celebrate your wins.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-indigo-600 text-white border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-indigo-100">Study Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5 Days</div>
            <p className="text-xs text-indigo-200 mt-1 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +2 days from last week
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">12h 30m</div>
            <p className="text-xs text-slate-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Quiz Average</CardTitle>
            <Target className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">85%</div>
            <p className="text-xs text-emerald-600 mt-1 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +5% improvement
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Goals Met</CardTitle>
            <Trophy className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">14</div>
            <p className="text-xs text-slate-500 mt-1">Sessions completed</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Subject Progress</CardTitle>
            <CardDescription>How you&apos;re doing across your courses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">Biology 101</span>
                <span className="text-slate-500">65%</span>
              </div>
              <Progress value={65} className="h-2 bg-slate-100 [&>div]:bg-emerald-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">Calculus I</span>
                <span className="text-slate-500">85%</span>
              </div>
              <Progress value={85} className="h-2 bg-slate-100 [&>div]:bg-blue-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">World History</span>
                <span className="text-slate-500">30%</span>
              </div>
              <Progress value={30} className="h-2 bg-slate-100 [&>div]:bg-amber-500" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">Computer Science</span>
                <span className="text-slate-500">10%</span>
              </div>
              <Progress value={10} className="h-2 bg-slate-100 [&>div]:bg-indigo-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Milestones you&apos;ve hit recently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-full">
                <Flame className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">5-Day Streak</p>
                <p className="text-sm text-slate-500">You&apos;ve studied for 5 consecutive days. Keep the momentum going!</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-full">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Ace in Biology</p>
                <p className="text-sm text-slate-500">Scored 100% on the Cell Division AI practice quiz.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 bg-slate-50">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-slate-900">Marathon Learner</p>
                <p className="text-sm text-slate-500">Completed a 2-hour focused study session for Calculus.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
