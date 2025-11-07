
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateDevOpsAsset = async (prompt: string, context: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.reject(new Error("API key not configured."));
  }

  const fullPrompt = `
    You are a world-class senior DevOps engineer with expertise in multi-cloud environments.
    Your task is to generate a complete, functional, and production-ready configuration file based on the user's request.
    The configuration should follow all best practices for security, scalability, and maintainability.
    Add comments where necessary to explain complex parts.

    Context: Generate a ${context} file.
    User Request: "${prompt}"

    Generate only the code/configuration file content. Do not include any explanatory text before or after the code block.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: fullPrompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `Error generating content: ${error.message}`;
    }
    return "An unknown error occurred while contacting the AI service.";
  }
};
