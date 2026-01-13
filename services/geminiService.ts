
import { GoogleGenAI } from "@google/genai";

export const getAiResponse = async (prompt: string, history: any[] = []) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
    config: {
      temperature: 0.7,
      topP: 0.95,
      topK: 64,
    }
  });
  return response.text;
};
