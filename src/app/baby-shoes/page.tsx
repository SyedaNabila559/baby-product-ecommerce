'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // For redirecting to the cart page

// Define a type for the products
interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
  quantity?: number; // Optional quantity property for cart items
}

const PopularProducts: React.FC = () => {
  // Define the products with the correct type
  const products: Product[] = [
    {
      id: 19,
      name: "Product 19",
      price: 30.00,
      discountPrice: 25.00,
      image: "/images/s1.png",
      description: "This is a great product for your baby.",
    },
    {
      id: 20,
      name: "Product 20",
      price: 45.00,
      discountPrice: 40.00,
      image: "/images/s2.png",
      description: "Top rated product with excellent features.",
    },
    {
      id: 21,
      name: "Product 21",
      price: 60.00,
      discountPrice: 55.00,
      image: "/images/s3.png",
      description: "Best-selling product with amazing reviews.",
    },
    {
      id: 22,
      name: "Product 22",
      price: 50.00,
      discountPrice: 45.00,
      image: "/images/s4.png",
      description: "Premium quality product.",
    },
    {
      id: 23,
      name: "Product 23",
      price: 20.00,
      discountPrice: 18.00,
      image: "/images/s5.png",
      description: "Affordable and durable.",
    },
    {
      id: 24,
      name: "Product 24",
      price: 80.00,
      discountPrice: 75.00,
      image: "/images/s6.png",
      description: "Ultimate comfort and style.",
    },
  ];

  const router = useRouter(); // For navigating to the cart page

  const addToCart = (product: Product) => {
    // Get the current cart from localStorage or initialize as empty array
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item: Product) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 0) + 1;
    } else {
      // Otherwise, add the product to the cart with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart page
    router.push('/cart');
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Baby Shoes</h2>

        {/* Scrollable Products for Mobile */}
        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div key={product.id} className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg relative">
                {/* Sale Tag */}
                <div className="absolute top-2 left-2 bg-blue-500 text-white py-1 px-3 rounded-full text-xs font-semibold">Sale</div>
                <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>{product.description}</p>
                <p className="font-bold">${product.discountPrice}</p>
                <button
                  onClick={() => addToCart(product)} // Add to Cart button
                  className="mt-4 py-2 px-4 border-2 border-blue-500 hover:bg-blue-300 text-black rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid for Larger Screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg relative">
              {/* Sale Tag */}
              <div className="absolute top-3 left-4 bg-blue-500 text-white py-1 px-3 rounded text-xs font-semibold">Sale</div>
              <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="font-bold">${product.discountPrice}</p>
              <button
                onClick={() => addToCart(product)} // Add to Cart button
                className="mt-4 py-2 px-4 border-2 border-blue-500 hover:bg-blue-300 text-black rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;