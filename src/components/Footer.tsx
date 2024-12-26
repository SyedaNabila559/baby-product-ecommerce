import React from 'react';


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Link from 'next/link';


const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-200 text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl text-gray-800 font-semibold mb-4">Our Company</h3>
          <p className="text-gray-700">
            We are dedicated to providing high-quality products and exceptional customer service
            Our mission is to improve lives with innovative solutions
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl text-gray-800 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/product" className="hover:underline">Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
           
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl text-gray-700 font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-800 mb-4">Connect with us on social media:</p>
          <div className="flex space-x-4">
            <Link href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-rose-600 p-3 rounded-full hover:bg-gray-200 transition duration-300">
              <FaFacebookF />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-rose-600 p-3 rounded-full hover:bg-gray-200 transition duration-300">
              <FaTwitter />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer" className="bg-white text-rose-600 p-3 rounded-full hover:bg-gray-200 transition duration-300">
              <FaInstagram />
            </Link>
            <Link  href="" rel="noopener noreferrer" className="bg-white text-rose-600 p-3 rounded-full hover:bg-gray-200 transition duration-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-2xl text-gray-700 font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-800 mb-4">Stay updated with our latest news and offers:</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded text-rose-600 outline-none focus:ring-2 focus:ring-rose-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-700 hover:text-black transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-800 mt-12">
        <p>&copy; {new Date().getFullYear()} Our Company All rights reserved</p>
        <p>
          Designed by <span className='text-rose-600'>SYEDA</span> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;