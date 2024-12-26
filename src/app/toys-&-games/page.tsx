'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
  quantity?: number; // Quantity will be added when it's in the cart
};

const PopularProducts: React.FC = () => {
  // Define the products array with the proper types
  const products: Product[] = [
    {
      id: 25,
      name: "Product 25",
      price: 30.00,
      discountPrice: 25.00,
      image: "/images/toy1.png",
      description: "This is a great product for your baby.",
    },
    {
      id: 26,
      name: "Product 26",
      price: 45.00,
      discountPrice: 40.00,
      image: "/images/toy2.png",
      description: "Top-rated product with excellent features.",
    },
    {
      id: 27,
      name: "Product 27",
      price: 60.00,
      discountPrice: 55.00,
      image: "/images/toy3.png",
      description: "Best-selling product with amazing reviews.",
    },
    {
      id: 28,
      name: "Product 28",
      price: 50.00,
      discountPrice: 45.00,
      image: "/images/toy4.png",
      description: "Premium quality product.",
    },
    {
      id: 29,
      name: "Product 29",
      price: 20.00,
      discountPrice: 18.00,
      image: "/images/toy5.png",
      description: "Affordable and durable.",
    },
    {
      id: 30,
      name: "Product 30",
      price: 80.00,
      discountPrice: 75.00,
      image: "/images/toy6.png",
      description: "Ultimate comfort and style.",
    },
  ];

  const router = useRouter();

  // Add the correct type to the product parameter
  const addToCart = (product: Product) => {
    // Ensure the cart is typed correctly as an array of Product
    const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity! += 1; // Using non-null assertion since we already add quantity
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/cart');
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-black">Toys And Games</h2>

        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div key={product.id} className="relative min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
                <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-2">
                  <span className="text-gray-400 line-through mr-2">${product.price}</span>
                  <span className="text-xl font-bold text-blue-600">${product.discountPrice}</span>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 py-2 px-4 bg-blue-500 text-white hover:bg-blue-400 rounded-lg transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">Sale</span>
              <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-2">
                <span className="text-gray-400 line-through mr-2">${product.price}</span>
                <span className="text-xl font-bold text-blue-600">${product.discountPrice}</span>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 py-2 px-4 bg-blue-500 text-white hover:bg-blue-400 rounded-lg transition duration-200"
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