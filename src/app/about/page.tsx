import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-black mb-2">About Us</h2>
          <p className="text-lg text-gray-600">Discover our story values and the people behind our success</p>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Our Story</h3>
          <p className="text-gray-700">
            Established in 2015 we began as a small team dedicated to creating quality products that enhance lives
            Over the years we have grown into a reputable company with a focus on innovation and customer satisfaction
            Our mission is to deliver excellence in every product we offer and to make a positive impact on the community
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Our Core Values</h3>
          <ul className="text-gray-700 space-y-4 list-disc list-inside">
            <li><strong>Integrity</strong>: We believe in doing the right thing always</li>
            <li><strong>Innovation</strong>: Constantly pushing the boundaries to improve our products</li>
            <li><strong>Customer Focus</strong>: Putting our customers at the heart of everything we do</li>
            <li><strong>Community</strong>: Giving back and supporting the communities we serve</li>
          </ul>
        </div>

        {/* Team Members */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-blue-600 mb-6">Meet the Team</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Profile 1 */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-60">
              <Image src="/images/t1.jpg" alt="Team Member 1" height={500} width={500} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-500">Alice Smith</h4>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-2">Passionate about innovation and customer experience</p>
            </div>

            {/* Profile 2 */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-60">
              <Image src="/images/t2.png" alt="Team Member 2" height={500} width={500} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-500">John Doe</h4>
              <p className="text-gray-600">Head of Product</p>
              <p className="text-gray-500 mt-2">Dedicated to creating quality products that exceed expectations</p>
            </div>

            {/* Profile 3 */}
            <div className="bg-white rounded-lg shadow-lg p-4 w-60">
              <Image src="/images/t3.jpg" alt="Team Member 3"height={500} width={500} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-blue-500">Emily Johnson</h4>
              <p className="text-gray-600">Marketing Manager</p>
              <p className="text-gray-500 mt-2">Driven by creativity and a love for customer engagement</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Join Our Journey</h3>
          <p className="text-gray-600 mb-6">We are always looking for talented individuals to join our team and help shape the future of our company</p>
          <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;