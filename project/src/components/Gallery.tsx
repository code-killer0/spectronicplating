import React, { useState } from 'react';

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Gold plated components",
    category: "Gold Plating"
  },
  {
    src: "https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Silver plated parts",
    category: "Silver Plating"
  },
  {
    src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Nickel plated components",
    category: "Nickel Plating"
  },
  {
    src: "https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Precision plated parts",
    category: "Precision Plating"
  },
  {
    src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Electronic components",
    category: "Electronics"
  },
  {
    src: "https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Aerospace parts",
    category: "Aerospace"
  },
  {
    src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Defense components",
    category: "Defense"
  },
  {
    src: "https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&w=400",
    alt: "Industrial parts",
    category: "Industrial"
  }
];

const categories = ["All", "Gold Plating", "Silver Plating", "Nickel Plating"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-600 mb-8">
            GALLERY
          </h2>
          
          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-yellow-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{image.category}</p>
                  <p className="text-sm text-gray-200">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors font-semibold">
            Load More Images
          </button>
        </div>
      </div>
    </section>
  );
}