import React from 'react';

function Locations() {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Explore Locations
      </h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {[
          'Abu Dhabi',
          'Sharjah & Ajman',
          'Dubai',
          'Fujairah',
          'Ras Al Khaimah',
          'Umm Al Quwain',
        ].map((city) => (
          <div
            key={city}
            className="bg-white border border-gray-300 px-6 py-3 rounded-lg shadow-sm text-gray-700"
          >
            {city}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;
