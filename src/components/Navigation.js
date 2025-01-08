import React from 'react';

const Navigation = ({ setCurrentPage }) => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              {/* Make Real Estate Platform text clickable to go to home page */}
              <span 
                onClick={() => setCurrentPage('home')}
                className="font-semibold text-gray-500 text-lg cursor-pointer"
              >
                Real Estate Platform
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => setCurrentPage('home')}
                className="py-4 px-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('loan')}
                className="py-4 px-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              >
                Loan Predictor
              </button>
              <button 
                onClick={() => setCurrentPage('property')}
                className="py-4 px-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              >
                Property Listing
              </button>
              <button 
                onClick={() => setCurrentPage('housePrediction')}
                className="py-4 px-2 text-gray-500 hover:text-blue-500 focus:outline-none"
              >
                House Price Prediction
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;