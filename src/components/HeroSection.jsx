import React from 'react';

function HeroSection() {
  return (
    <section className="bg-blue-50 text-center py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-4">
          Ready to dive into HABOT?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth.
        </p>
        <button className="px-10 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300">
          Sign up Today!
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
