'use client'

import React, { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa'; // Chat Icon (Font Awesome)

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close of chatbot
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { sender: 'user', text: userInput }]);
      setUserInput('');

      // Simulate chatbot response (this can be replaced with actual API call)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'chatbot', text: 'How can I assist you? ' },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chatbot Icon */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          <FaCommentAlt size={30} />
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 bg-white p-4 rounded-lg shadow-lg w-80 max-w-full transition-all duration-300 ease-in-out">
          <div className="overflow-y-auto max-h-60 mb-3">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-blue-100'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              Send
            </button>
          </div>
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            X
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;