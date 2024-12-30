import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+1 234 567 890',
      link: 'tel:+1234567890'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@carental.com',
      link: 'mailto:info@carental.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: '123 Car Street, Auto City, AC 12345',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section with Floating Contact Cards */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920')] bg-cover bg-fixed bg-center opacity-5"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            {/* Hero Text */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-500 text-transparent bg-clip-text">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have questions about our services? We're here to help you find the perfect car for your needs.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : '_self'}
                  rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
                  className="group p-6 bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:text-blue-500 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-300 text-sm">{info.content}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative">
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-700/50">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your rental needs..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 relative rounded-t-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1655668687967!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="location map"
          className="relative z-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
