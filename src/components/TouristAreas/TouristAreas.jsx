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
      name: 'Tetouan',
      description: 'The vibrant city of Tetouan, known for its colorful markets and bustling streets',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c375?auto=format&fit=crop&w=800',
      attractions: ['Merzouga Dunes', 'Camel Trekking', 'Desert Camping']
    },
    {
      name: 'Tanger',
      description: 'The bustling city of Tanger, known for its vibrant markets and bustling streets',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c375?auto=format&fit=crop&w=800',
      attractions: ['Merzouga Dunes', 'Camel Trekking', 'Desert Camping']
    }
  ];

  return (
    <section className="py-16 bg-gray-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Discover Morocco's Treasures
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the magic of Morocco's most enchanting destinations, from ancient medinas to endless desert dunes
          </p>
        </div>

        <div className="flex justify-center items-stretch gap-2 h-[600px] overflow-hidden">
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
                <div className={`absolute inset-0 bg-blue-500/0 transition-opacity duration-700 
                              ${activeArea === index ? 'opacity-0' : 'group-hover:bg-blue-500/10'}`}></div>
              </div>

              <div className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-700
                             ${activeArea === index ? 'opacity-100 translate-y-0' : 
                               'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'}`}>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {area.name}
                </h3>
                <div className={`transition-all duration-700 ${activeArea === index ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-gray-300 mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-400">Top Attractions</h4>
                    <ul className="flex flex-wrap gap-2">
                      {area.attractions.map((attraction, idx) => (
                        <li 
                          key={idx} 
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm
                                   hover:bg-blue-500/40 hover:text-white transition-all duration-300"
                        >
                          {attraction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700
                             ${activeArea === index ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
                <h3 className="text-3xl font-bold text-white writing-mode-vertical transform -rotate-180"
                    style={{ writingMode: 'vertical-rl' }}>
                  {area.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristAreas;
