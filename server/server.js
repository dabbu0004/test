require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Lead = require('./models/User'); 

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//Traning bot
const systemInstruction = `
You are 'COCBot', the official customer support AI for a company called 'Creative on Coffee'.
YOUR GOAL: Help users understand Creative on Coffee's business scaling tools and capture leads.
BEHAVIOR RULES:
1. Be professional, concise, and friendly.
2. If asked about pricing, always suggest the 'Pro' plan ($29/mo) as the best value.
3. If you don't know the answer, ask them to email support@creativeoncoffee.com.
`;
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.5-flash",
  systemInstruction: systemInstruction 
});
app.post('/api/register', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    console.log("📝 New Lead Saved:", req.body.name);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Save Error:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});
app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;
  let validHistory = history || [];
  if (validHistory.length > 0 && validHistory[0].role === 'model') {
    validHistory.shift(); 
  }
  try {
    const chat = model.startChat({ history: validHistory });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    res.json({ reply: text });
  } catch (error) {
    console.error("❌ AI Error Details:", error);
    res.status(500).json({ 
      reply: "I am currently undergoing maintenance. Please try again in a moment." 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));