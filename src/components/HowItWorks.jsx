import React from 'react';

function HowItWorks() {
  return (
    <section className="py-16 bg-white px-4">
      <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
        How it works?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Buyer Section */}
        <div className="border p-8 rounded-lg shadow-md bg-gray-50">
          <h4 className="text-2xl font-bold text-blue-700 mb-4">For Buyers</h4>
          <p className="text-lg text-gray-600">
            Post your requirements, sit back, and wait for suppliers to contact
            you. Choose among suppliers based on ratings and reviews to find the
            best match.
          </p>
        </div>
        {/* Supplier Section */}
        <div className="border p-8 rounded-lg shadow-md bg-gray-50">
          <h4 className="text-2xl font-bold text-blue-700 mb-4">
            For Suppliers
          </h4>
          <p className="text-lg text-gray-600">
            Complete your profile and get notified about new opportunities.
            Connect with buyers to grow your business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
