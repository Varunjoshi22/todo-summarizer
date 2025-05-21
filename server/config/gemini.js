import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("GEMINI_API_KEY is not defined in environment variables");
}

const ai = new GoogleGenAI({ apiKey });



export const generateSummary = async (todos) => {
  if (!apiKey) {
    throw new Error("Failed to initialize Gemini API");
  }

  // Format todos for the prompt
  const todoList = todos
    .filter((todo) => !todo.completed)
    .map(
      (todo, index) =>
        `${index + 1}. ${todo.title}${todo.description ? `: ${todo.description}` : ""}`
    )
    .join("\n");

  if (!todoList) {
    return "You have no pending tasks.";
  }

  const prompt = `Please create a concise and organized summary of the following pending tasks. Group related items if possible and suggest a logical order for completing them:\n\n${todoList}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // <-- updated model name
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating summary with Gemini:", error);
    throw new Error("Failed to generate summary");
  }
};