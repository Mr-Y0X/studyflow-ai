"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, MoreVertical, Plus, Folders, FileText, BrainCircuit } from "lucide-react";
import Link from "next/link";

const subjects = [
  {
    id: 1,
    name: "Biology 101",
    description: "Cell biology, genetics, and evolution",
    progress: 65,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 text-emerald-700",
    stats: { materials: 12, quizzes: 4 }
  },
  {
    id: 2,
    name: "World History",
    description: "Modern history from 1900s to present",
    progress: 30,
    color: "bg-amber-500",
    lightColor: "bg-amber-50 text-amber-700",
    stats: { materials: 8, quizzes: 2 }
  },
  {
    id: 3,
    name: "Calculus I",
    description: "Limits, derivatives, and integrals",
    progress: 85,
    color: "bg-blue-500",
    lightColor: "bg-blue-50 text-blue-700",
    stats: { materials: 15, quizzes: 8 }
  },
  {
    id: 4,
    name: "Computer Science",
    description: "Intro to programming and algorithms",
    progress: 10,
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50 text-indigo-700",
    stats: { materials: 3, quizzes: 0 }
  },
];

export default function SubjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Subjects</h1>
          <p className="text-slate-500 mt-1">Manage your courses and study materials.</p>
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          <Plus className="mr-2 h-4 w-4" /> Add Subject
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id} className="group hover:shadow-md transition-all flex flex-col h-full border-slate-200">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${subject.lightColor}`}>
                  <Folders className="h-5 w-5" />
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="text-xl mt-4">{subject.name}</CardTitle>
              <CardDescription className="line-clamp-2 h-10">{subject.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4 flex-1">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>Progress</span>
                  <span>{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} className={`h-2 [&>div]:${subject.color}`} />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                  <FileText className="h-3.5 w-3.5 text-slate-400" />
                  <span>{subject.stats.materials} Docs</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-md border border-slate-100">
                  <BrainCircuit className="h-3.5 w-3.5 text-slate-400" />
                  <span>{subject.stats.quizzes} Quizzes</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 border-t border-slate-100 p-4">
              <Link href={`/subjects/${subject.id}`} className="w-full">
                <Button variant="secondary" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700">
                  Open Workspace
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}

        {/* Empty State / Add New Card */}
        <Card className="border-dashed border-2 border-slate-200 bg-transparent flex flex-col items-center justify-center h-full min-h-[300px] text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors cursor-pointer">
          <div className="p-4 rounded-full bg-slate-100 mb-4 group-hover:bg-indigo-100 transition-colors">
            <Plus className="h-8 w-8" />
          </div>
          <p className="font-medium text-lg">Create New Subject</p>
          <p className="text-sm text-center max-w-[200px] mt-2">Organize your notes, quizzes, and flashcards.</p>
        </Card>
      </div>
    </div>
  );
}
