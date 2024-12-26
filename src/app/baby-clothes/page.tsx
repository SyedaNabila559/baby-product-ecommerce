'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // For redirecting to the cart page

// Defining types for Product and CartItem
interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 7,
      name: "Product 7",
      price: 30.00,
      discountPrice: 25.00,
      image: "/images/clo.png",
      description: "This is a great product for your baby.",
    },
    {
      id: 8,
      name: "Product 8",
      price: 45.00,
      discountPrice: 40.00,
      image: "/images/clo2.png",
      description: "Top rated product with excellent features.",
    },
    {
      id: 9,
      name: "Product 9",
      price: 60.00,
      discountPrice: 55.00,
      image: "/images/cloth3.jpeg",
      description: "Best-selling product with amazing reviews.",
    },
    {
      id: 10,
      name: "Product 10",
      price: 50.00,
      discountPrice: 45.00,
      image: "/images/cloth4.jpg",
      description: "Premium quality product.",
    },
    {
      id: 11,
      name: "Product 11",
      price: 20.00,
      discountPrice: 18.00,
      image: "/images/clo5.png", 
      description: "Affordable and durable.",
    },
    {
      id: 12,
      name: "Product 12",
      price: 80.00,
      discountPrice: 75.00,
      image: "/images/clo6.png",
      description: "Ultimate comfort and style.",
    },
  ];

  const router = useRouter(); // For navigating to the cart page

  // Function to handle adding products to the cart
  const addToCart = (product: Product) => {
    const cart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/cart');
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Baby Clothes</h2>

        {/* Mobile view */}
        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4">
            {products.map((product) => (
              <div key={product.id} className="relative min-w-[250px] bg-white p-6 rounded-lg shadow-lg">
                {product.price > product.discountPrice && (
                  <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    Sale
                  </span>
                )}
                <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>{product.description}</p>
                <p className="font-bold text-lg">
                  <span className="text-blue-500">${product.discountPrice}</span>
                  <span className="text-gray-500 line-through ml-2 text-sm">${product.price}</span>
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

        {/* Desktop view */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white p-6 rounded-lg shadow-lg">
              {product.price > product.discountPrice && (
                <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  Sale
                </span>
              )}
              <Image src={product.image} alt={product.name} height={500} width={500} className="w-full h-64 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="font-bold text-lg">
                <span className="text-blue-500">${product.discountPrice}</span>
                <span className="text-gray-500 line-through ml-2 text-sm">${product.price}</span>
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