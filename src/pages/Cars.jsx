import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cars = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Sedan', 'SUV', 'Luxury'];

  const [cars] = useState([
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
    },
    {
      id: 6,
      name: 'Audi Q7',
      category: 'SUV',
      price: 110,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600',
      features: ['7 Seats', 'Quattro AWD', 'Panoramic Roof', 'Premium Audio'],
      available: true,
      rating: 4.7,
      description: 'Premium family SUV with advanced features'
    },
    {
      id: 7,
      name: 'Honda Civic',
      category: 'Sedan',
      price: 45,
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600',
      features: ['Fuel Efficient', 'Apple CarPlay', 'Safety Suite', 'Spacious'],
      available: true,
      rating: 4.6,
      description: 'Reliable and efficient compact sedan'
    },
    {
      id: 8,
      name: 'Range Rover Sport',
      category: 'SUV',
      price: 130,
      image: 'https://images.unsplash.com/photo-1606664466768-2dd90d17e3aa?auto=format&fit=crop&w=600',
      features: ['Off-Road Ready', 'Luxury Interior', 'Air Suspension', 'Premium Sound'],
      available: true,
      rating: 4.8,
      description: 'Luxury SUV with exceptional off-road capability'
    },
    {
      id: 9,
      name: 'Toyota Corolla',
      category: 'Sedan',
      price: 40,
      image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=600',
      features: ['Fuel Efficient', 'Safety Features', 'Bluetooth', 'Reliable'],
      available: true,
      rating: 4.5,
      description: 'Economic and reliable compact sedan'
    },
    {
      id: 10,
      name: 'Porsche Cayenne',
      category: 'SUV',
      price: 160,
      image: 'https://images.unsplash.com/photo-1606664665151-83f13d05ab63?auto=format&fit=crop&w=600',
      features: ['Sport Mode', 'Premium Interior', 'Dynamic Chassis', 'Premium Sound'],
      available: true,
      rating: 4.9,
      description: 'Sports car performance in an SUV package'
    }
  ]);

  const filteredCars = selectedCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="container mx-auto mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-center">
          Explore Our Fleet
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto text-base sm:text-lg mb-6 sm:mb-8 px-4">
          Choose from our selection of premium vehicles for your perfect journey
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50 transform scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cars Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCars.map((car) => (
            <div 
              key={car.id} 
              className="bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="bg-blue-500 bg-opacity-90 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    ${car.price}/day
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{car.name}</h2>
                    <p className="text-gray-400 text-xs sm:text-sm">{car.description}</p>
                  </div>
                  <span className="bg-blue-500 bg-opacity-20 text-blue-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {car.category}
                  </span>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="flex text-yellow-500 mr-2 text-sm sm:text-base">
                      {'★'.repeat(Math.floor(car.rating))}
                    </div>
                    <span className="text-gray-400 text-xs sm:text-sm">{car.rating} / 5</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center text-gray-400 text-xs sm:text-sm"
                      >
                        <span className="mr-1 sm:mr-2 text-blue-400">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-4">
                  <Link 
                    to={`/booking/${car.id}`}
                    className="flex-1 bg-blue-500 text-white text-center py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/50"
                  >
                    Book Now
                  </Link>
                  <a 
                    href={`https://wa.me/1234567890?text=I'm interested in renting the ${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-green-500 text-green-400 rounded-lg sm:rounded-xl hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.790.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
