import React from 'react';
import Map2 from './Map2.js';

const HomePage = () => {
  return (
    <div className="pt-10 min-h-screen"> {/* pt-20 ensures space for Navigation */}
      <div className="max-w-6xl mx-auto p-4">
        {/* Map Component */}
        <div className="w-full h-[700px] bg-white-100 rounded-lg mt-4">
          <Map2 />
        </div>
      </div>
    </div>
  );
};

export default HomePage;