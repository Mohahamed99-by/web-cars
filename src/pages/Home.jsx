import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const features = [
    {
      title: 'Premium Selection',
      description: 'Access to the latest luxury and performance vehicles from top brands worldwide',
      icon: '🚗'
    },
    {
      title: 'Instant Booking',
      description: 'Seamless digital booking process with instant confirmation in under 2 minutes',
      icon: '⚡'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock concierge service and roadside assistance for peace of mind',
      icon: '🎯'
    },
    {
      title: 'Flexible Rental',
      description: 'Customizable rental periods with special rates for extended bookings',
      icon: '📅'
    }
  ];

  const popularCars = [
    {
      name: 'Tesla Model 3',
      category: 'Electric',
      price: '150',
      specs: ['0-60 mph in 3.1s', '358 mi range', 'Autopilot'],
      image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800'
    },
    {
      name: 'BMW X5',
      category: 'SUV',
      price: '200',
      specs: ['3.0L V6 Engine', '7 Seats', 'AWD'],
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800'
    },
    {
      name: 'Mercedes C-Class',
      category: 'Luxury',
      price: '180',
      specs: ['2.0L Turbo', 'Premium Audio', 'LED Lights'],
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Business Executive',
      comment: 'The luxury vehicles and professional service exceeded my expectations. Perfect for business trips.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Travel Blogger',
      comment: 'Amazing experience! The car was in pristine condition and the booking process was seamless.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Tech Entrepreneur',
      comment: 'Outstanding service and premium vehicles. The Tesla Model S was a dream to drive!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
      rating: 5
    }
  ];

  const benefits = [
    {
      title: 'Premium Insurance',
      description: 'Comprehensive coverage included with every rental for worry-free driving'
    },
    {
      title: 'Contactless Pickup',
      description: 'Digital check-in and smart lock system for convenient vehicle access'
    },
    {
      title: 'Price Match',
      description: 'We guarantee the best rates in the market with our price match policy'
    }
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: 'https://facebook.com',
      color: 'rounded-3xl bg-[#1877f2] hover:bg-[#0d6efd]'
    },
    {
      icon: <FaInstagram />,
      url: 'https://instagram.com',
      color: 'rounded-3xl bg-[#e4405f] bg-[#d62d4c]'
    },
    {
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com',
      color: 'rounded-3xl bg-[#0077b5] bg-[#006399]'
    },
    {
      icon: <FaYoutube />,
      url: 'https://youtube.com',
      color: 'rounded-3xl bg-[#ff0000] bg-[#cc0000]'
    },
    {
      icon: <FaTiktok />,
      url: 'https://tiktok.com',
      color: 'rounded-3xl bg-[#000000] bg-[#333333]'
    }
];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-50">
        <div className="relative">
          {/* Brand Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
              LUXURY CARS
            </h1>
          </div>

          {/* Loading Animation Container */}
          <div className="relative w-72 h-36 mx-auto">
            {/* Road */}
            <div className="absolute bottom-0 w-full h-px bg-blue-500/20">
              <div className="flex space-x-16 animate-slide">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-8 h-0.5 bg-blue-500/40"></div>
                ))}
              </div>
            </div>

            {/* Car Container */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
              <div className="relative w-48">
                {/* Car Body */}
                <div className="relative h-16 bg-blue-500 rounded-lg shadow-xl overflow-hidden">
                  {/* Hood Accent */}
                  <div className="absolute right-0 h-full w-16 bg-blue-400 skew-x-[20deg]"></div>
                  
                  {/* Window */}
                  <div className="absolute top-0 right-8 w-20 h-8">
                    <div className="w-full h-full bg-blue-300/30 rounded-tr-lg skew-x-[20deg]"></div>
                  </div>

                  {/* Side Window */}
                  <div className="absolute top-0 left-12 w-16 h-8">
                    <div className="w-full h-full bg-blue-300/30 rounded-t-lg"></div>
                  </div>

                  {/* Headlight */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-4 bg-yellow-300 rounded-r-full"></div>
                    <div className="absolute top-0 right-0 w-8 h-4 bg-yellow-300/20 rounded-full blur-sm animate-pulse"></div>
                  </div>

                  {/* Body Lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-10 left-8 w-32 h-0.5 bg-blue-400/30"></div>
                    <div className="absolute top-6 right-12 w-8 h-0.5 bg-blue-400/30"></div>
                  </div>
                </div>

                {/* Wheels */}
                <div className="absolute -bottom-2 w-full flex justify-between px-6">
                  {[0, 1].map((i) => (
                    <div key={i} className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-800 border-4 border-gray-700 animate-spin">
                        <div className="absolute inset-1.5 rounded-full bg-gray-900"></div>
                        <div className="absolute inset-0 border-2 border-gray-600 rounded-full border-t-gray-400"></div>
                      </div>
                      {/* Wheel Shadow */}
                      <div className="absolute -bottom-1 w-8 h-2 bg-blue-500/10 rounded-full blur-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Loading Dots */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center justify-center space-x-1.5">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Social Media Sidebar */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm text-white 
                ${social.color} hover:text-white transition-all duration-300 group relative`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
              <div className="absolute left-full ml-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                Follow us
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[600px] h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-900"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-blue-500 text-transparent bg-clip-text">
                Luxury Driving Experience
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8">
                Elevate your journey with our premium fleet of luxury vehicles.
                From electric performance to elegant comfort, find your perfect ride.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <Link
                  to="/cars"
                  className="w-full sm:w-auto inline-block bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-center"
                >
                  Explore Fleet
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-block border-2 border-blue-500 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-20 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Premium Car Rental Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Cars Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Featured Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {popularCars.map((car, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{car.name}</h3>
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-blue-400">{car.category}</span>
                      <span className="text-sm sm:text-base text-white font-bold bg-blue-500/20 px-3 sm:px-4 py-1 rounded-full">${car.price}/day</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {car.specs.map((spec, i) => (
                        <span key={i} className="text-xs sm:text-sm text-gray-300 bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/cars"
              className="inline-block bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 sm:py-20 bg-gray-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Premium Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 sm:p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 sm:p-8 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm sm:text-base text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg sm:text-xl">
                        {i < testimonial.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">{testimonial.rating}.0</span>
                </div>
                <p className="text-sm sm:text-base text-gray-300 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-800/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join our exclusive community of luxury car enthusiasts.
            Book your premium vehicle today and elevate your journey.
          </p>
          <Link
            to="/cars"
            className="inline-block bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
