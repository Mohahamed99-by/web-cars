import React, { useState } from 'react';

const TouristAreas = () => {
  const [activeArea, setActiveArea] = useState(null);

  const touristAreas = [
    {
      name: 'Marrakech',
      description: 'The Red City with its famous Djemaa el-Fna square and historic medina',
      image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800',
      attractions: ['Djemaa el-Fna', 'Koutoubia Mosque', 'Jardin Majorelle']
    },
    {
      name: 'Chefchaouen',
      description: 'The Blue Pearl of Morocco, known for its striking blue-painted buildings',
      image: 'https://dubaitravelblog.com/wp-content/uploads/2017/09/hiking-chefchaouen-houses.jpg',
      attractions: ['Medina', 'Plaza Uta el-Hammam', 'Kasbah Museum']
    },
    {
      name: 'Fes',
      description: 'The cultural capital with the world\'s largest car-free urban area',
      image: 'https://content.r9cdn.net/rimg/dimg/3e/75/4c51003a-city-26641-1655cc09179.jpg?crop=true&width=1366&height=768&xhint=1490&yhint=1280',
      attractions: ['Al Quaraouiyine', 'Bab Boujloud', 'Tanneries']
    },
    {
      name: 'Sahara Desert',
      description: 'Experience the magic of the desert with camel treks and luxury camps',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwLqbxgEIY4ECyXskRr3JFaQ_WFdKI2_kEw&s',
      attractions: ['Merzouga Dunes', 'Camel Trekking', 'Desert Camping']
    },
    {
      name: 'Casablanca',
      description: 'The economic hub of Morocco, home to the iconic Hassan II Mosque',
      image: 'https://media.gettyimages.com/id/166006884/photo/morocco.jpg?s=612x612&w=0&k=20&c=mibpR4BCigoUXRoZtT_W1QzqW0l-b1MuGhtp0pjy_p8=',
      attractions: ['Hassan II Mosque', 'Corniche', 'Old Medina']
    },
    {
      name: 'Essaouira',
      description: 'A coastal city known for its stunning beaches and vibrant arts scene',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Essaouira_Atlantic.jpg',
      attractions: ['Skala de la Ville', 'Essaouira Beach', 'Medina']
    },
    {
      name: 'Agadir',
      description: 'A modern city by the sea, famous for its beaches and resorts',
      image: 'https://t3.ftcdn.net/jpg/00/57/84/30/360_F_57843073_fk8NHHLOk7wHimEt5DxpjAInEQW7q2bL.jpg',
      attractions: ['Agadir Beach', 'Souk El Had', 'Kasbah of Agadir']
    },
    {
      name: 'Rabat',
      description: 'The capital city, known for its historic sites and relaxed atmosphere',
      image: 'https://t4.ftcdn.net/jpg/10/90/83/09/360_F_1090830984_zMG8HiJsJC07iNWTCqteVAGYVNEgy1ej.jpg',
      attractions: ['Hassan Tower', 'Kasbah of the Udayas', 'Rabat Medina']
    }
  ];
  
  return (
    <section className="py-8 md:py-16 bg-gray-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Discover Morocco's Treasures
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Experience the magic of Morocco's most enchanting destinations
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-stretch gap-2 h-[600px] overflow-hidden">
          {touristAreas.map((area, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveArea(index)}
              onMouseLeave={() => setActiveArea(null)}
              className={`relative flex-1 group overflow-hidden rounded-2xl border border-gray-700 transition-all duration-700 ease-in-out
                         ${activeArea === index ? 'flex-[5]' : 'flex-[0.5] hover:flex-[1]'}`}
            >
              <div className="absolute inset-0">
                <img 
                  src={area.image} 
                  alt={area.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900"></div>
              </div>

              <div className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-700
                             ${activeArea === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                <h3 className="text-2xl font-bold mb-2 text-white">{area.name}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-400">Top Attractions</h4>
                  <ul className="flex flex-wrap gap-2">
                    {area.attractions.map((attraction, idx) => (
                      <li key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {attraction}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700
                             ${activeArea === index ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-3xl font-bold text-white writing-mode-vertical transform -rotate-180"
                    style={{ writingMode: 'vertical-rl' }}>
                  {area.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {touristAreas.map((area, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden border border-gray-700">
              <img 
                src={area.image} 
                alt={area.name} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-xl font-bold mb-2 text-white">{area.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-blue-400">Top Attractions</h4>
                  <ul className="flex flex-wrap gap-2">
                    {area.attractions.map((attraction, idx) => (
                      <li key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full text-xs">
                        {attraction}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristAreas;