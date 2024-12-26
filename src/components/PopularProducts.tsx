'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // For redirecting to the cart page

// Define Product type with quantity
type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
  quantity?: number;  // quantity is optional when displaying products
};

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 30.00,
      discountPrice: 25.00,
      image: "/images/jhula.jpg",
      description: "This is a great product for your baby.",
    },
    {
      id: 2,
      name: "Product 2",
      price: 45.00,
      discountPrice: 40.00,
      image: "/images/pop2.jpg",
      description: "Top rated product with excellent features.",
    },
    {
      id: 3,
      name: "Product 3",
      price: 60.00,
      discountPrice: 55.00,
      image: "/images/pop3.jpeg",
      description: "Best-selling product with amazing reviews.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 50.00,
      discountPrice: 45.00,
      image: "/images/pop4.jpeg",
      description: "Premium quality product.",
    },
    {
      id: 5,
      name: "Product 5",
      price: 20.00,
      discountPrice: 18.00,
      image: "/images/pop5.webp",
      description: "Affordable and durable.",
    },
    {
      id: 6,
      name: "Product 6",
      price: 80.00,
      discountPrice: 75.00,
      image: "/images/pop6.webp",
      description: "Ultimate comfort and style.",
    },
  ];

  const router = useRouter(); // For navigating to the cart page

  const addToCart = (product: Product) => {
    // Get the current cart from localStorage or initialize as empty array
    const cart: (Product & { quantity: number })[] = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Otherwise, add the product to the cart with an initial quantity of 1
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
        <h2 className="text-3xl font-semibold mb-8">Popular Products</h2>

        {/* Scrollable Products for Mobile */}
        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div key={product.id} className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
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
            <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
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