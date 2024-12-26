'use client'
import { useState } from 'react';
import Image from 'next/image';

const TryOnFeature = () => {
  const [selectedOutfit, setSelectedOutfit] = useState("/images/cloth3.jpeg");

  const outfits = [
    "/images/cloth2.jpg",
    "/images/clo.png",
    "/images/clo2.png", // Add another outfit for better selection
  ];

  const handleOutfitChange = (outfit: string) => {
    setSelectedOutfit(outfit);
  };

  return (
    <div className="try-on-feature bg-gray-50 shadow-2xl rounded-lg p-6 text-center my-6 transition-all duration-500 hover:scale-105 transform">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Try Before You Buy</h2>
      <div className="relative w-full sm:w-72 h-72 mx-auto mb-6 transition-all duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-full overflow-hidden">
          <Image src="/images/green.webp" alt="Baby Model" layout="fill" objectFit="cover" className="transition-all duration-500" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 opacity-75 rounded-full">
          <Image src={selectedOutfit} alt="Selected Outfit" layout="fill" objectFit="cover" className="transition-all duration-500 transform hover:scale-105" />
        </div>
      </div>
      <div className="outfit-options mt-6 flex justify-center space-x-6">
        {outfits.map((outfit, index) => (
          <button
            key={index}
            onClick={() => handleOutfitChange(outfit)}
            className="p-2 border-2 border-white rounded-md hover:bg-white hover:text-blue-500 hover:border-blue-500 transform transition-all duration-300 ease-in-out focus:outline-none"
          >
            <Image
              src={outfit}
              alt={`Outfit ${index + 1}`}
              width={60}
              height={60}
              className="rounded-md shadow-md transform hover:scale-110 transition-all duration-300"
            />
          </button>
        ))}
      </div>
      <p className="mt-4 text-xl font-semibold text-gray-700">Try on the outfit and see how it looks!</p>
    </div>
  );
};

export default TryOnFeature;