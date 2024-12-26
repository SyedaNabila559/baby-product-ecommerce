'use client'
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackSection: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate: number) => {
    setRating(rate);
    setSubmitted(false);
  };

  const submitFeedback = () => {
    if (rating === 0) {
      alert("Please select a rating before submitting.");
      return;
    }
    setSubmitted(true);
    setRating(0);
    setFeedback('');
  };

  const submitContactForm = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName('');
    setEmail('');
    setMessage('');
    alert("Message Sent! Thank you for reaching out.");
  };

  return (
    <section className="bg-gradient-to-br from-blue-100 to-white py-12">
      <div className="container mx-auto p-6 max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Feedback Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">Rate Your Experience</h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={30}
                  className={`cursor-pointer transition-colors duration-200 ${
                    (hover || rating) > i ? 'text-blue-500' : 'text-gray-300'
                  }`}
                  onClick={() => handleRating(i + 1)}
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(rating)}
                />
              ))}
            </div>
            <textarea
              className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring focus:rose-blue-300"
              rows={3}
              placeholder="Any suggestions for improvement?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button
              onClick={submitFeedback}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Submit Feedback
            </button>
            {submitted && (
              <p className="text-green-500 text-center mt-3">Thank you for your feedback!</p>
            )}
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-rose-200">
            <h2 className="text-2xl font-semibold mb-4 text-black text-center">Contact Us</h2>
            <input
              type="text"
              className="w-full p-3 mb-4 border border-blue-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-full p-3 mb-4 border border-blue-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="w-full p-3 mb-4 border border-blue-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              rows={3}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={submitContactForm}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
