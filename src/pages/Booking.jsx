import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const carsData = [
  {
    id: 1,
    name: 'Toyota Camry',
    category: 'Sedan',
    price: 50,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600',
    features: ['Automatic', '5 Seats', 'Bluetooth', 'GPS'],
    available: true,
    rating: 4.8,
    description: 'Perfect blend of comfort and efficiency'
  },
  {
    id: 2,
    name: 'Honda CR-V',
    category: 'SUV',
    price: 75,
    image: 'https://images.unsplash.com/photo-1606611013016-96e242f6a204?auto=format&fit=crop&w=600',
    features: ['Automatic', '5 Seats', 'Bluetooth', 'Backup Camera'],
    available: true,
    rating: 4.7,
    description: 'Spacious SUV ideal for family trips'
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    category: 'Luxury',
    price: 120,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=600',
    features: ['Automatic', '5 Seats', 'Leather Seats', 'Premium Sound'],
    available: true,
    rating: 4.9,
    description: 'Experience luxury at its finest'
  },
  {
    id: 4,
    name: 'BMW 7 Series',
    category: 'Luxury',
    price: 150,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600',
    features: ['Executive Seats', 'Premium Sound', 'Massage Function', 'Night Vision'],
    available: true,
    rating: 4.9,
    description: 'Ultimate luxury sedan with cutting-edge technology'
  },
  {
    id: 5,
    name: 'Tesla Model S',
    category: 'Luxury',
    price: 140,
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=600',
    features: ['Autopilot', 'Electric', 'Long Range', 'Premium Sound'],
    available: true,
    rating: 4.8,
    description: 'Revolutionary electric luxury with autopilot'
  }
];

// Add styles for progress animation
const progressAnimation = `
  @keyframes progress {
    0% { width: 0% }
    100% { width: 100% }
  }
`;

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    pickupDate: '',
    returnDate: '',
    fullName: '',
    email: '',
    phone: '',
    driverLicense: ''
  });

  useEffect(() => {
    // Find the selected car from our data
    const car = carsData.find(car => car.id === parseInt(id));
    if (car) {
      setSelectedCar(car);
    }
    setLoading(false);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you would typically send the booking data to your backend
      console.log('Booking submitted:', { carId: id, ...formData });
      
      // Show success modal
      setShowModal(true);
      
      // Navigate after delay
      setTimeout(() => {
        setShowModal(false);
        navigate('/cars');
      }, 2000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 sm:pt-20 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-gray-400">Loading car details...</p>
        </div>
      </div>
    );
  }

  if (!selectedCar) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 sm:pt-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Car not found</p>
          <Link 
            to="/cars" 
            className="text-blue-500 hover:text-blue-400 transition-colors"
          >
            ← Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16 sm:pt-20 pb-8 sm:pb-12 px-4">
      {/* Add style tag for animations */}
      <style>{progressAnimation}</style>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-4 transform transition-all duration-300 scale-100 opacity-100">
            <div className="flex flex-col items-center text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              {/* Success Message */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Booking Successful!
              </h3>
              <p className="text-gray-300 mb-6">
                Your car rental has been booked successfully. Redirecting you to the cars page...
              </p>
              
              {/* Loading Indicator */}
              <div className="w-full bg-gray-700 rounded-full h-1.5 mb-4">
                <div className="bg-green-500 h-1.5 rounded-full animate-[progress_2s_ease-in-out]"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-6xl">
        {/* Mobile Breadcrumb */}
        <div className="mb-6 sm:mb-8 text-sm breadcrumbs">
          <Link 
            to="/cars" 
            className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Cars
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Car Details Section */}
          <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Selected Vehicle</h2>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden mb-4 sm:mb-6 group">
              <img 
                src={selectedCar.image} 
                alt={selectedCar.name}
                className="w-full h-48 sm:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{selectedCar.name}</h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <span className="bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-full text-sm">
                    {selectedCar.category}
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    ${selectedCar.price}/day
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              {selectedCar.features.map((feature, index) => (
                <p key={index} className="flex items-center">
                  <span className="mr-2 text-green-400">✓</span>
                  {feature}
                </p>
              ))}
            </div>

            {/* Price Summary for Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-700 lg:hidden">
              <div className="flex justify-between items-center text-white">
                <span className="text-sm">Daily Rate:</span>
                <span className="font-bold">${selectedCar.price}</span>
              </div>
              <div className="flex justify-between items-center text-white mt-2">
                <span className="text-sm">Insurance:</span>
                <span className="text-green-400">Included</span>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Complete Your Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Driver's License Number
                </label>
                <input
                  type="text"
                  name="driverLicense"
                  value={formData.driverLicense}
                  onChange={handleChange}
                  placeholder="Enter your driver's license number"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base"
                >
                  Complete Booking
                </button>
                <Link
                  to="/cars"
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-600 text-gray-300 rounded-lg sm:rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
