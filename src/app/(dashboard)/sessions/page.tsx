"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, CheckCircle2, BrainCircuit, Flag } from "lucide-react";

export default function SessionsPage() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [sessionType, setSessionType] = useState<"focus" | "break">("focus");
  const [goal, setGoal] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      // Handle session end (e.g., play sound, switch to break)
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(sessionType === "focus" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressValue = sessionType === "focus"
    ? ((25 * 60 - time) / (25 * 60)) * 100
    : ((5 * 60 - time) / (5 * 60)) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Study Session</h1>
          <p className="text-slate-500 mt-1">Deep focus mode. No distractions.</p>
        </div>
        <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
          End Session
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Timer Section */}
        <div className="md:col-span-5 space-y-6">
          <Card className="border-slate-200 shadow-sm text-center">
            <CardHeader className="pb-0">
              <div className="flex justify-center gap-2 mb-4">
                <Button
                  variant={sessionType === "focus" ? "default" : "outline"}
                  size="sm"
                  className={sessionType === "focus" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                  onClick={() => { setSessionType("focus"); setTime(25 * 60); setIsActive(false); }}
                >
                  Focus
                </Button>
                <Button
                  variant={sessionType === "break" ? "default" : "outline"}
                  size="sm"
                  className={sessionType === "break" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                  onClick={() => { setSessionType("break"); setTime(5 * 60); setIsActive(false); }}
                >
                  Short Break
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6 pb-8">
              <div className="relative flex items-center justify-center mx-auto w-64 h-64">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="text-slate-100"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * progressValue) / 100}
                    className={`transition-all duration-1000 ease-linear ${
                      sessionType === "focus" ? "text-indigo-600" : "text-emerald-500"
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-6xl font-bold text-slate-800 tracking-tighter">
                    {formatTime(time)}
                  </span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-2">
                    {sessionType === "focus" ? "Time to focus" : "Relax"}
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  size="lg"
                  className={`w-32 h-14 rounded-full ${isActive ? 'bg-amber-500 hover:bg-amber-600' : 'bg-slate-900 hover:bg-slate-800'}`}
                  onClick={toggleTimer}
                >
                  {isActive ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                  {isActive ? "Pause" : "Start"}
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-14 w-14 rounded-full border-slate-200"
                  onClick={resetTimer}
                >
                  <RotateCcw className="h-5 w-5 text-slate-600" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm bg-indigo-50/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 rounded-md">
                  <BrainCircuit className="h-5 w-5 text-indigo-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Stuck on a concept?</p>
                  <p className="text-xs text-slate-500">Ask your AI tutor for help.</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-100">
                Ask AI
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Notes & Goal Section */}
        <div className="md:col-span-7 space-y-6">
          <Card className="border-slate-200 shadow-sm h-full flex flex-col">
            <CardHeader className="pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Flag className="h-4 w-4 text-slate-400" /> Current Goal
                </CardTitle>
                <Button variant="ghost" size="sm" className="h-8 text-indigo-600">
                  <CheckCircle2 className="mr-2 h-4 w-4" /> Mark Done
                </Button>
              </div>
              <Input
                placeholder="What do you want to accomplish in this session?"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="mt-2 border-slate-200 bg-slate-50 focus-visible:ring-indigo-600"
              />
            </CardHeader>
            <CardContent className="flex-1 p-0 flex flex-col">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">Scratchpad Notes</p>
                <span className="text-xs text-slate-400">Autosaved</span>
              </div>
              <Textarea
                placeholder="Jot down important points, formulas, or questions here..."
                className="flex-1 resize-none border-0 rounded-none focus-visible:ring-0 p-4 bg-white"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
