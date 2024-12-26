'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  discountPrice: number;
  image: string; // Added image property
};

type UserInfo = {
  name: string;
  email: string;
  address: string;
};

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    address: '',
  });
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.discountPrice * item.quantity, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order Placed Successfully!');
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Checkout</h1>

      {/* Display cart items */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border-t-4 border-blue-500">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty Please add some items to your cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div className="flex items-center">
                <Image
                  src={item.image} // Ensure image path is correct
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <p className="font-semibold text-blue-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.quantity} x ${item.discountPrice}</p>
                </div>
              </div>
              <div className="font-semibold text-blue-600">${(item.discountPrice * item.quantity).toFixed(2)}</div>
            </div>
          ))
        )}
      </div>

      {/* Cart Total */}
      <div className="bg-rose-100  p-6 rounded-lg shadow-md mb-6 border-t-4 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Order Summary</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-600">Subtotal</p>
          <p className="font-semibold text-blue-700">${calculateTotal().toFixed(2)}</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <p className="text-lg text-gray-600">Shipping</p>
          <p className="font-semibold text-blue-700">Free</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-blue-700">Total</p>
          <p className="text-xl font-semibold text-blue-700">${calculateTotal().toFixed(2)}</p>
        </div>
      </div>

      {/* User Info Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border-t-4 border-blue-500">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Enter Your Details</h3>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm  font-semibold text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-600 mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all"
        >
          Place Order
        </button>
      </form>

      {/* Back to Products Button */}
      <button
        onClick={() => router.push('/')}
        className="w-full py-3 mt-4 bg-blue-400 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all"
      >
        Back to Products
      </button>
    </div>
  );
};

export default Checkout;

