import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // Controls Form vs Chat
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", occupation: "" });
  const [messages, setMessages] = useState([
    { role: "model", text: "Hello! I am the COC assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Suggested Queries
  const suggestions = ["Pricing plans?", "How does it work?", "Contact support"];

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages]);

  // Handle Form Submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      setIsRegistered(true); // Switch to Chat Mode
    } catch (err) {
      alert("Something went wrong. Try again.");
    }
  };

  // Handle Chat Message
  const sendMessage = async (msgText) => {
    const text = msgText || input;
    if (!text.trim()) return;

    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      // Convert state messages to Gemini history format
      const history = newMessages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const res = await axios.post('http://localhost:5000/api/chat', { 
        message: text, 
        history: history 
      });

      setMessages([...newMessages, { role: "model", text: res.data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { role: "model", text: "Sorry, I'm having trouble connecting right now." }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      
      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white w-96 h-[500px] shadow-2xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 transition-all duration-300">
          
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <h3 className="font-bold">COC Support</h3>
            <button onClick={() => setIsOpen(false)}><FaTimes /></button>
          </div>

          {/* CONTENT AREA */}
          {!isRegistered ? (
            // --- STEP 1: REGISTRATION FORM ---
            <div className="p-6 flex flex-col justify-center h-full">
              <h2 className="text-xl font-bold mb-2 text-gray-800">Welcome! 👋</h2>
              <p className="text-sm text-gray-500 mb-4">Please tell us a bit about yourself to start chatting.</p>
              <form onSubmit={handleRegister} className="space-y-3">
                <input required placeholder="Name" className="w-full p-2 border rounded" onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Email" type="email" className="w-full p-2 border rounded" onChange={e => setFormData({...formData, email: e.target.value})} />
                <input required placeholder="Phone" className="w-full p-2 border rounded" onChange={e => setFormData({...formData, phone: e.target.value})} />
                <input required placeholder="Occupation" className="w-full p-2 border rounded" onChange={e => setFormData({...formData, occupation: e.target.value})} />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 font-semibold">Start Chatting</button>
              </form>
            </div>
          ) : (
            // --- STEP 2: CHAT INTERFACE ---
            <>
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
                 {/* Suggestions */}
                 <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {suggestions.map((s, i) => (
                      <button key={i} onClick={() => sendMessage(s)} className="text-xs bg-white border border-blue-200 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap hover:bg-blue-50">
                        {s}
                      </button>
                    ))}
                 </div>

                 {/* Messages */}
                 {messages.map((msg, idx) => (
                   <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                     <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.role === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-white border text-gray-700 rounded-bl-none shadow-sm"}`}>
                       {msg.text}
                     </div>
                   </div>
                 ))}
                 {isLoading && <div className="text-gray-400 text-xs animate-pulse">COC is typing...</div>}
                 <div ref={messagesEndRef} />
              </div>

              {/* Input Field */}
              <div className="p-3 bg-white border-t flex gap-2">
                <input 
                  className="flex-1 outline-none text-sm" 
                  placeholder="Type your query..." 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={() => sendMessage()} className="text-blue-600 hover:text-blue-800"><FaPaperPlane /></button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center w-14 h-14"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={28} />}
      </button>

    </div>
  );
};

export default ChatWidget;