import React from 'react';
import Link from 'next/link'; // Import Link from next/link for navigation

const categories = ["Baby Clothes", "Baby Essentials", "Toys & Games", "Baby Shoes"];

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 ">
      <h2 className="text-center text-3xl font-bold mb-8">Top Categories</h2>
      <div className="flex flex-wrap  justify-center gap-6">
        {categories.map((category) => (
          <Link key={category} href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="bg-white p-4 shadow-md rounded-lg hover:scale-105 border-2 border-blue-300 transition  cursor-pointer">
              <h3 className="text-lg  font-semibold">{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories