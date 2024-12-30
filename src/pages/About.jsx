import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: '10+', text: 'Years Experience' },
    { number: '150+', text: 'Premium Cars' },
    { number: '5000+', text: 'Happy Clients' },
    { number: '24/7', text: 'Customer Support' },
  ];

  const features = [
    {
      title: 'Premium Fleet',
      description: 'Access to the latest luxury and performance vehicles, all maintained to the highest standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: 'Flexible Rentals',
      description: 'Choose from daily, weekly, or monthly rental options to suit your needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service to assist you whenever you need help.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920')] bg-cover bg-fixed bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-500 text-transparent bg-clip-text">
              Luxury Car Rental Experience
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the thrill of driving premium vehicles with our exceptional car rental service. 
              Where luxury meets convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-center">
              Our Commitment
            </h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Since our establishment, we've been dedicated to providing an unmatched car rental experience. 
                Our fleet features the latest models from prestigious brands, ensuring you drive in style and comfort.
              </p>
              <p>
                We understand that every journey is unique, which is why we offer flexible rental options and 
                personalized service to meet your specific needs. Whether it's a business trip, special occasion, 
                or weekend getaway, we're here to make your drive memorable.
              </p>
              <p>
                Our commitment to excellence extends beyond our vehicles. We pride ourselves on transparent pricing, 
                comprehensive insurance coverage, and professional maintenance services to ensure your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our premium fleet and experience the difference of luxury car rental.
          </p>
          <Link
            to="/cars"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Browse Our Fleet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
