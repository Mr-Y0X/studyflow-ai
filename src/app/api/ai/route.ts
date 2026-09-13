import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "dummy_key" });

export async function POST(req: NextRequest) {
  try {
    const { prompt, type, history } = await req.json();

    // DEMO MODE: If no real API key is set, return mock responses based on type
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "dummy_key") {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate network delay

      if (type === "summarize") {
        return NextResponse.json({
          response: "Here is a summary of your text:\n\n• Key Point 1: The main idea focuses on core concepts.\n• Key Point 2: Important details are highlighted here.\n• Key Point 3: This is a critical takeaway for your exam.\n\nSummary generated in Demo Mode.",
        });
      }

      if (type === "quiz") {
         return NextResponse.json({
          response: "Here is a practice quiz based on your topic:\n\n1. What is the powerhouse of the cell?\n   a) Nucleus\n   b) Mitochondria\n   c) Ribosome\n   d) Endoplasmic Reticulum\n\nCorrect Answer: b) Mitochondria. Explanation: It generates most of the cell's supply of adenosine triphosphate (ATP).\n\n(Demo Mode Quiz)",
        });
      }

      if (type === "explain") {
        return NextResponse.json({
          response: "Let me explain that simply.\n\nImagine it like building a house. The foundation is your core concept, and the walls are the details that build upon it. \n\nDoes that analogy help, or would you like me to go deeper into a specific part?\n\n(Demo Mode Explanation)",
        });
      }

      return NextResponse.json({
        response: `This is a demo response to: "${prompt}". \n\nI am acting as your AI Tutor. To get real responses, please add a valid GEMINI_API_KEY to your environment variables.`,
      });
    }

    // REAL MODE: Call Gemini API
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return NextResponse.json({ response: response.text });

  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate AI response" },
      { status: 500 }
    );
  }
}
