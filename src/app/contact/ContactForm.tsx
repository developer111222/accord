// components/ContactForm.js
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black border-b-2 border-white outline-none"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black border-b-2 border-white outline-none"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black border-b-2 border-white outline-none"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="2"
          required
          className="w-full px-4 py-3 text-white placeholder-gray-500 bg-black border-b-2 border-white outline-none resize-y"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 px-4 text-white border-2 border-white rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}