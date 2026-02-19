import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", occupation: "" });
  const [messages, setMessages] = useState([{ role: "model", text: "Hello! I am the COC assistant. How can I help you today?" }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = ["Pricing plans?", "How does it work?", "Contact support"];

  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isLoading]);
  useEffect(() => {
    if (isOpen && chatWindowRef.current) {
      gsap.fromTo(chatWindowRef.current, 
        { opacity: 0, scale: 0.8, y: 50, transformOrigin: "bottom right" }, 
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.2)" }
      );
    }
  }, [isOpen]);
  useEffect(() => {
    if (messagesContainerRef.current && isRegistered) {
      const lastChild = messagesContainerRef.current.lastElementChild?.previousElementSibling; 
      if (lastChild) {
        gsap.fromTo(lastChild, 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [messages, isRegistered]);
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', formData);
      setIsRegistered(true);
    } catch {
      alert("Registration failed. Please try again.");
    }
  };
  const sendMessage = async (overrideText) => {
    const text = overrideText || input.trim();
    if (!text) return;
    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    try {
      const history = newMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
      const { data } = await axios.post('http://localhost:5000/api/chat', { message: text, history });
      setMessages(prev => [...prev, { role: "model", text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "model", text: "Connection error. Please try again." }]);
    }
    setIsLoading(false);
  };
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div  ref={chatWindowRef}className="bg-white w-[calc(100vw-2rem)] md:w-96 h-[70vh] md:h-[500px] max-h-[600px] shadow-2xl rounded-2xl border border-gray-100 flex flex-col mb-4 overflow-hidden">
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-sm z-10">
            <h3 className="font-bold tracking-wide">COC Support</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1.5 rounded-full transition-colors">
              <FaTimes />
            </button>
          </div>
          {!isRegistered ? (
            <div className="flex-1 p-6 flex flex-col justify-center bg-gray-50 overflow-y-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Welcome! 👋</h2>
                <p className="text-sm text-gray-500 mt-2">Please register to start chatting.</p>
              </div>
              <form onSubmit={handleRegister} className="space-y-3">
                {["Name", "Email", "Phone", "Occupation"].map((field) => (
                  <input key={field} required  type={field === "Email" ? "email" : "text"} placeholder={field} className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-white"onChange={e => setFormData({ ...formData, [field.toLowerCase()]: e.target.value })} />
                ))}
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 font-bold transition-colors shadow-md mt-4">
                  Start Chatting
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4" ref={messagesContainerRef}>
                {messages.length < 3 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {suggestions.map((s, i) => (
                      <button  key={i}  onClick={() => sendMessage(s)} className="text-xs bg-white border border-blue-200 text-blue-600 px-4 py-2 rounded-full whitespace-nowrap hover:bg-blue-50 transition-colors shadow-sm snap-start" >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] p-3.5 text-sm rounded-2xl shadow-sm ${
                      msg.role === "user" 
                        ? "bg-blue-600 text-white rounded-br-sm" 
                        : "bg-white border border-gray-100 text-gray-800 rounded-bl-sm"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-100 text-gray-500 text-xs px-4 py-2 rounded-full shadow-sm animate-pulse">
                     COC typing...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center">
                <input className="flex-1 outline-none text-sm bg-gray-50 p-3 rounded-xl focus:bg-white focus:ring-1 focus:ring-blue-200 transition-all" placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} />
                <button  onClick={() => sendMessage()}  disabled={!input.trim()}className="p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md">
                  <FaPaperPlane size={16}/>
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button onClick={() => setIsOpen(!isOpen)}className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 z-50"  >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={26} />}
      </button>
    </div>
  );
};
export default ChatBot;