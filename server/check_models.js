require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Get the key from .env
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ ERROR: GEMINI_API_KEY is missing from .env file!");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function checkAvailableModels() {
  console.log("🔍 Checking available models for your API Key...");
  try {
    // This fetches the list of ALL models your key can access
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.models || data.models.length === 0) {
      console.log("⚠️ No models found. Your API Key might be invalid or has no access.");
      return;
    }

    console.log("\n✅ SUCCESS! Here are the valid model names you can use:");
    console.log("-------------------------------------------------------");
    const chatModels = data.models.filter(m => m.supportedGenerationMethods.includes("generateContent"));
    chatModels.forEach(model => {
      // We only care about models that support chat
      console.log(`Model Name: "${model.name.replace('models/', '')}"`);
    });
    console.log("-------------------------------------------------------");
    console.log("👉 Please copy one of the names above into your server.js file.");

  } catch (error) {
    console.error("❌ Diagnostic Failed:", error.message);
  }
}

checkAvailableModels();