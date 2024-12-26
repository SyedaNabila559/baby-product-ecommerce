'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";  // Cart icon
import { FaRegHeart } from "react-icons/fa";  // Wishlist icon
import { FaSearch } from "react-icons/fa"; 
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [cartItemCount, setCartItemCount] = useState(0); // State to hold cart item count

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fetch cart items from localStorage when component mounts
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemCount = cartItems.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <nav className="bg-blue-200 text-darkGray-800 sticky top-0 z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex  items-center space-x-3">
          <Image src="/images/logo.png" alt="Baby and Baba Shop Logo" height={100} width={100} className="h-10  w-auto rounded" />
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-500 transition-all">Home</Link>
          <div className="relative group">
            <button className="hover:text-blue-500 transition-all">Shop</button>
            <div className="absolute left-0 hidden group-hover:block bg-blue-100 shadow-lg w-36">
              <ul className="space-y-2 py-2">
                <li><Link href="/baby-clothes" className="block px-4 py-2  hover:text-blue-400">Baby Clothes</Link></li>
                <li><Link href="/baby-essentials" className="block px-4 py-2  hover:text-blue-400">Baby Essentials</Link></li>
                <li><Link href="/toys-&-games" className="block px-4 py-2  hover:text-blue-400">Toys & Games</Link></li>
                <li><Link href="/baby-shoes" className="block px-4 py-2  hover:text-blue-400">Baby Shoes</Link></li>
              </ul>
            </div>
          </div>
          <Link href="/about" className="hover:text-blue-500 transition-all">About Us</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-all">Contact Us</Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-2">
            <input type="text" placeholder="Search for Baby Products" className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <FaSearch className="text-gray-500" />
          </div>
        </div>

        {/* Cart & Wishlist (Desktop) */}
        <div className="flex space-x-4 items-end">
          <Link href="/cart">
            <div className="relative hover:text-blue-500 transition-all">
              <AiOutlineShoppingCart size={24} />
              <span className="absolute top-0 right-0 text-xs bg-blue-500 text-white rounded-full px-1">
                {cartItemCount} {/* Dynamically display cart item count */}
              </span>
            </div>
          </Link>
          <div className="relative hover:text-blue-500 transition-all">
            <FaRegHeart size={24} />
            <span className="absolute top-0 right-0 text-xs bg-blue-500 text-white rounded-full px-1">5</span>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-100 justify-end shadow-lg py-4">
          <ul className="space-y-4 px-4">
            <li><Link href="/" className="block text-lg py-2 hover:text-blue-500">Home</Link></li>
            <div className="relative group">
            <button className="hover:text-blue-500 transition-all">Shop</button>
            <div className="absolute left-0 hidden group-hover:block bg-rose-100 shadow-lg w-36">
              <ul className="space-y-2 py-2">
                <li><Link href="/baby-clothes" className="block px-4 py-2  hover:text-blue-400">Baby Clothes</Link></li>
                <li><Link href="/baby-essentials" className="block px-4 py-2  hover:text-blue-400">Baby Essentials</Link></li>
                <li><Link href="/toys-&-games" className="block px-4 py-2  hover:text-blue-400">Toys & Games</Link></li>
                <li><Link href="/baby-shoes" className="block px-4 py-2  hover:text-blue-400">Baby Shoes</Link></li>
              </ul>
            </div>
          </div>
            <li><Link href="/about" className="block text-lg py-2 hover:text-blue-500">About Us</Link></li>
            <li><Link href="/contact" className="block text-lg py-2 hover:text-blue-500">Contact Us</Link></li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;