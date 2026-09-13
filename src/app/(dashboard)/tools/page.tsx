"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, HelpCircle, Layers, FileText, Loader2, PlayCircle } from "lucide-react";

function ToolsContent() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams?.get("tab") || "summarize";

  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleProcess = async (type: string) => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: inputText, type }),
      });

      const data = await res.json();
      setResult(data.response || "No response received.");
    } catch (error) {
      setResult("An error occurred while generating the result.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Study Tools</h1>
        <p className="text-slate-500 mt-1">Transform your notes into active learning resources.</p>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-slate-100 p-1 rounded-xl">
          <TabsTrigger value="summarize" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <FileText className="mr-2 h-4 w-4" /> Summarizer
          </TabsTrigger>
          <TabsTrigger value="explain" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <HelpCircle className="mr-2 h-4 w-4" /> Explainer
          </TabsTrigger>
          <TabsTrigger value="quiz" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <PlayCircle className="mr-2 h-4 w-4" /> Quiz Maker
          </TabsTrigger>
          <TabsTrigger value="flashcards" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Layers className="mr-2 h-4 w-4" /> Flashcards
          </TabsTrigger>
        </TabsList>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Area */}
          <Card className="border-slate-200 shadow-sm h-[600px] flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Source Material</CardTitle>
              <CardDescription>Paste your notes, textbook text, or concept here.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <Textarea
                placeholder="Paste your text here (up to 5,000 words)..."
                className="flex-1 resize-none bg-slate-50 border-slate-200 focus-visible:ring-indigo-600"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </CardContent>
            <CardFooter className="pt-2 border-t border-slate-100 p-4">
              <TabsContent value="summarize" className="m-0 w-full">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700" onClick={() => handleProcess("summarize")} disabled={isLoading || !inputText.trim()}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <FileText className="mr-2 h-4 w-4" />}
                  Generate Summary
                </Button>
              </TabsContent>
              <TabsContent value="explain" className="m-0 w-full flex gap-2">
                 <Button className="w-full bg-violet-600 hover:bg-violet-700" onClick={() => handleProcess("explain")} disabled={isLoading || !inputText.trim()}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <HelpCircle className="mr-2 h-4 w-4" />}
                  Explain Simply
                </Button>
              </TabsContent>
              <TabsContent value="quiz" className="m-0 w-full">
                <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={() => handleProcess("quiz")} disabled={isLoading || !inputText.trim()}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlayCircle className="mr-2 h-4 w-4" />}
                  Generate Practice Quiz
                </Button>
              </TabsContent>
              <TabsContent value="flashcards" className="m-0 w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => handleProcess("flashcards")} disabled={isLoading || !inputText.trim()}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Layers className="mr-2 h-4 w-4" />}
                  Create Flashcards
                </Button>
              </TabsContent>
            </CardFooter>
          </Card>

          {/* Output Area */}
          <Card className="border-slate-200 shadow-sm h-[600px] flex flex-col bg-slate-50/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Generated Result</CardTitle>
              <CardDescription>Your processed study material will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
              {isLoading ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                  <p>Processing your material...</p>
                </div>
              ) : result ? (
                <div className="prose prose-sm prose-slate max-w-none">
                  {result.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-xl bg-white p-6 text-center">
                  <BookOpen className="h-10 w-10 text-slate-300 mb-4" />
                  <p className="font-medium text-slate-600">Waiting for input</p>
                  <p className="text-sm mt-1">Paste text on the left and click generate to see the magic happen.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
}

export default function StudyToolsPage() {
  return (
    <Suspense fallback={<div>Loading tools...</div>}>
      <ToolsContent />
    </Suspense>
  );
}
