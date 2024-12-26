'use client'
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      <div className="container mx-auto p-6 max-w-md">
        <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500 text-center">Contact Us</h2>
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
    </section>
  );
};

export default ContactSection;
