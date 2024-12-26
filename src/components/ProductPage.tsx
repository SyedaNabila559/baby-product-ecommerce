'use client'

import { useState } from 'react';
import Image from 'next/image';

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const [inCart, setInCart] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<{ color: string; size: string }[]>([]);

  const productImages = [
    "/images/baby1.png",
    "/images/sky2.webp",
    "/images/red.png",
    "/images/pink2.png",
    "/images/white2.png",
    "/images/green2.webp"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, { color: selectedColor, size: selectedSize }]);
    setInCart(true);
    setTimeout(() => {
      setInCart(false);
    }, 2000);
  };

  const handleRemoveFromCart = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const handleReviewSubmit = () => {
    setReviews([...reviews, reviewText]);
    setReviewText("");
    setShowReviewForm(false);
  };

  return (
    <div className="product-page bg-white text-gray-800">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="image-slider relative">
            <Image
              src={productImages[currentImageIndex]}
              alt="Product Image"
              width={500}
              height={500}
              className="object-cover"
            />
            <button
              onClick={handlePreviousImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              ◀
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              ▶
            </button>
          </div>

          <div className="product-info">
            <h1 className="text-3xl font-semibold">stylish Frocks</h1>
            <p className="text-lg text-gray-600 mt-2">Soft, breathable, and stylish baby clothes made from premium cotton fabric.</p>

            <div className="rating mt-4 flex items-center">
              <span className="text-blue-500">★★★★☆</span>
              <p className="ml-2 text-gray-600">(150 reviews)</p>
            </div>

            <div className="mt-6">
              <label className="block text-lg font-medium">Color</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setSelectedColor("blue")}
                  className={`w-8 h-8 rounded-full ${selectedColor === 'blue' ? 'border-4 border-blue-500' : 'bg-blue-300'}`}
                />
                <button
                  onClick={() => setSelectedColor("pink")}
                  className={`w-8 h-8 rounded-full ${selectedColor === 'pink' ? 'border-4 border-blue-400' : 'bg-blue-300'}`}
                />
                <button
                  onClick={() => setSelectedColor("green")}
                  className={`w-8 h-8 rounded-full ${selectedColor === 'green' ? 'border-4 border-blue-500' : 'bg-blue-400'}`}
                />
              </div>

              <label className="block mt-4 text-lg font-medium">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-6/12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
              </select>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg w-6/12 hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>

            {inCart && (
              <div className="popup mt-4 text-center text-lg font-semibold text-blue-500">
                Product added to cart!
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="mt-4 text-gray-600">
            This baby clothing set is made of the finest cotton fabric ensuring maximum comfort and breathability for your baby
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <div className="mt-4">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="text-blue-500">★★★★★</span>
                <p className="ml-2 text-gray-600">{review}</p>
              </div>
            ))}

            <div className="mt-2">
              <button 
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="text-blue-600"
              >
                Write a Review
              </button>
            </div>

            {showReviewForm && (
              <div className="mt-4">
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your review here..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <button 
                  onClick={handleReviewSubmit}
                  className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Submit Review
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Cart Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <div className="mt-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between mb-2 border-b border-gray-300 py-2">
                  <div>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;