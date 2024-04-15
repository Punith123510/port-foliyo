import React, { useState } from 'react';

const Contact = ({ contactData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the server or handle it as needed
    console.log(formData);
    // Reset form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center border p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4">{contactData?.description}</p>
          <ul className="text-left">
            <li className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {contactData?.address}
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-envelope mr-2"></i>
              {contactData?.contactEmail}
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone mr-2"></i>
              {contactData?.phoneNumber}
            </li>
          </ul>
        </div>
        <div className="text-center border p-4 rounded-md shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded-md"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded-md"
              rows="4"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
