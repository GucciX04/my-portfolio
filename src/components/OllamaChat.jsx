import { useState, useRef } from "react";

export default function OllamaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I'm powered by Ollama AI. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate a unique session ID that persists for this component instance
  const sessionId = useRef(
    Date.now() + Math.random().toString(36).substr(2, 9)
  );

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://n8n.safehub-lcup.uk/webhook/roi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          sessionId: sessionId.current,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Ollama Response:", data);

      // Extract the AI response from the webhook data
      const botReply =
        data.output || data.response || "I received your message!";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Ollama Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "🚫 Sorry, I'm having trouble connecting to the AI service right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 z-50"
        title="Chat with Ollama AI"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04.97 4.43L1 23l6.57-1.97C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.1 0-2.07-.3-2.94-.77l-.06-.04-3.93 1.18 1.18-3.93-.04-.06C5.77 15.57 5.5 14.84 5.5 14c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-32 right-5 w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 z-50 max-h-96">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h2 className="font-semibold text-sm">Ollama AI Chat</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-75 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-gray-800 rounded-bl-sm"
                      : "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-sm text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-gray-50 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && handleSend()}
              className="flex-1 p-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
