import React, { useState } from 'react';
import HomePage from './components/HomePage';
import HousePricePrediction from './components/HousePricePrediction';
import LoanPredictor from './components/LoanPredictor';
import Navigation from './components/Navigation';
import PropertyListing from './components/PropertyListing';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'loan':
        return <LoanPredictor />;
      case 'property':
        return <PropertyListing />;
      case 'housePrediction':
        return <HousePricePrediction />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-10">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;