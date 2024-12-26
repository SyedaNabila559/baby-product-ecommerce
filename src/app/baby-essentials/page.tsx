'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

// Define product type
interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
}

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 13,
      name: "Product 13",
      price: 30.00,
      discountPrice: 25.00,
      image: "/images/baba1.webp",
      description: "This is a great product for your baby.",
    },
    {
      id: 14,
      name: "Product 14",
      price: 45.00,
      discountPrice: 40.00,
      image: "/images/baba2.jpeg",
      description: "Top rated product with excellent features.",
    },
    {
      id: 15,
      name: "Product 15",
      price: 60.00,
      discountPrice: 55.00,
      image: "/images/baba4.jpeg",
      description: "Best-selling product with amazing reviews.",
    },
    {
      id: 16,
      name: "Product 16",
      price: 50.00,
      discountPrice: 45.00,
      image: "/images/baba5.png",
      description: "Premium quality product.",
    },
    {
      id: 17,
      name: "Product 17",
      price: 20.00,
      discountPrice: 18.00,
      image: "/images/baba6.jpg",
      description: "Affordable and durable.",
    },
    {
      id: 18,
      name: "Product 18",
      price: 80.00,
      discountPrice: 75.00,
      image: "/images/baba7.webp",
      description: "Ultimate comfort and style.",
    },
  ];

  const router = useRouter();

  const addToCart = (product: Product) => {
    // Get the current cart from localStorage or initialize as empty array
    const cart: { id: number; name: string; image: string; price: number; discountPrice: number; quantity: number }[] =
      JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // Otherwise, add the product to the cart with full details
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        discountPrice: product.discountPrice,
        quantity: 1,
      });
    }

    // Save the updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart page
    router.push('/cart');
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Baby Essentials</h2>

        {/* Scrollable Products for Mobile */}
        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div key={product.id} className="min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
                <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>{product.description}</p>
                {product.discountPrice < product.price && (
                  <span className="bg-blue-500 text-white py-1 px-2 rounded-full text-sm absolute top-4 right-4">
                    Sale
                  </span>
                )}
                <p className="font-bold">
                  ${product.discountPrice}
                  {product.discountPrice < product.price && (
                    <span className="line-through ml-2 text-gray-500">${product.price}</span>
                  )}
                </p>
                <button
                  onClick={() => addToCart(product)}
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
              <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              {product.discountPrice < product.price && (
                <span className="bg-blue-500 text-white py-1 px-2 rounded text-sm absolute top-3 left-4">
                  Sale
                </span>
              )}
              <p className="font-bold">
                ${product.discountPrice}
                {product.discountPrice < product.price && (
                  <span className="line-through ml-2 text-gray-500">${product.price}</span>
                )}
              </p>
              <button
                onClick={() => addToCart(product)}
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