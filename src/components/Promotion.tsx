import React from 'react';

const Promotions: React.FC = () => {
  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Seasonal Promotions</h2>
        <div className="space-y-4">
          <p className="bg-blue-300 text-white p-4 rounded-lg">New Arrival Sale - Up to 50% Off!</p>
          <p className="bg-blue-500 text-white p-4 rounded-lg">Babies First Winter Essentials - Discounted Prices!</p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;