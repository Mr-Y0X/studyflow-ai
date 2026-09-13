"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrainCircuit, Send, User, RefreshCw, Copy, Lightbulb } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface Message {
  role: "user" | "ai";
  content: string;
}

const suggestedPrompts = [
  "Explain this like I'm a beginner",
  "Give me a real-world example",
  "Quiz me on this topic",
  "Summarize this in 5 bullet points",
];

function TutorContent() {
  const searchParams = useSearchParams();
  const initialPrompt = searchParams?.get("prompt");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Hi there! I'm your AI Study Tutor. What would you like to learn today? You can ask me to explain concepts, summarize text, or quiz you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt && messages.length === 1) {
      if (initialPrompt === "explain") {
        setInput("Can you explain a difficult concept simply?");
      }
    }
  }, [initialPrompt, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent, customPrompt?: string) => {
    e?.preventDefault();
    const promptToSend = customPrompt || input;

    if (!promptToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: promptToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: promptToSend, type: "chat" }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", content: data.response || "Sorry, I couldn't process that." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "Error communicating with AI server. Please check your connection." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col max-w-4xl mx-auto w-full gap-4">
      <div className="flex items-center gap-3 pb-2 border-b">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <BrainCircuit className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Tutor</h1>
          <p className="text-sm text-slate-500">Your personal patient teacher.</p>
        </div>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden border-slate-200 shadow-sm">
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-6 pb-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-4 max-w-[85%] ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                <Avatar className={`h-8 w-8 mt-1 ${msg.role === "ai" ? "bg-indigo-100" : "bg-slate-200"}`}>
                  {msg.role === "ai" ? (
                    <BrainCircuit className="h-4 w-4 text-indigo-600 mx-auto mt-2" />
                  ) : (
                    <User className="h-4 w-4 text-slate-600 mx-auto mt-2" />
                  )}
                </Avatar>

                <div className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-tr-none"
                        : "bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200"
                    }`}
                  >
                    {msg.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>

                  {msg.role === "ai" && idx > 0 && (
                    <div className="flex items-center gap-2 mt-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-slate-600" onClick={() => copyToClipboard(msg.content)}>
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-slate-600">
                        <RefreshCw className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 max-w-[85%]">
                <Avatar className="h-8 w-8 mt-1 bg-indigo-100">
                  <BrainCircuit className="h-4 w-4 text-indigo-600 mx-auto mt-2 animate-pulse" />
                </Avatar>
                <div className="p-4 rounded-2xl bg-slate-100 rounded-tl-none border border-slate-200 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-.3s]" />
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-.5s]" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 bg-white border-t border-slate-100">
          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestedPrompts.map((prompt) => (
                <Button
                  key={prompt}
                  variant="outline"
                  size="sm"
                  className="text-xs rounded-full bg-slate-50 border-slate-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200"
                  onClick={() => handleSubmit(undefined, prompt)}
                >
                  <Lightbulb className="mr-1.5 h-3 w-3" />
                  {prompt}
                </Button>
              ))}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question, paste notes, or request an explanation..."
              className="flex-1 rounded-full bg-slate-50 border-slate-200 focus-visible:ring-indigo-600 px-4 py-6"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              className="h-12 w-12 rounded-full bg-indigo-600 hover:bg-indigo-700 shrink-0 shadow-sm"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-5 w-5 ml-1" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default function TutorPage() {
  return (
    <Suspense fallback={<div>Loading tutor...</div>}>
      <TutorContent />
    </Suspense>
  );
}
