import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[80vh] bg-cover bg-center md:h-[60vh] lg:h-[80vh]" 
      style={{ backgroundImage: 'url(/images/hero.png)' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero Content */}
      <div className="container mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8 py-12 md:py-16 lg:py-20">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight animate-fadeSlideUp">
          Discover the Best Baby Products
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-lg md:text-xl text-white opacity-90 mb-6 sm:mb-8 animate-fadeIn">
          Everything your little one needs all in one place Shop now and find the perfect products for your baby!
        </p>

        {/* Shop Now Button */}
        <Link href="/product" passHref
           className="inline-block px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-400 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl animate-fadeSlideUp">
            <span className="flex items-center justify-center">
              <span className="mr-2">🛒</span>Shop Now
            </span>
         
        </Link>
      </div>

      {/* Scrolling Text Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-400 p-3 sm:p-4 text-center text-white font-bold overflow-hidden">
        <div className="animate-scrollText whitespace-nowrap">
          <p>Exclusive Baby Sale! Dont Miss Out! &nbsp;|&nbsp; Huge Discounts on All Items! &nbsp;|&nbsp; Limited Time Offer!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;