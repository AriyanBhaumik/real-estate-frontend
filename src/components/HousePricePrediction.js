import axios from 'axios';
import React, { useState } from 'react';

const HousePricePrediction = () => {
  const [housePrice, setHousePrice] = useState('');
  const [formData, setFormData] = useState({
    HouseSize: '',
    PropertySize: '',
    Bedrooms: '',
    Bathrooms: '',
    City: '',
    State: '',
    ZipCode: ''
  });

  // useEffect(() => {
  //   setHousePrice(housePrice);
  //   console.log("house-price", housePrice);
  // }, [housePrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://real-estate-backend-q05k.onrender.com/house-price-prediction', formData) 
      setHousePrice(response.data["house-price"]);
      console.log(response.data)
    } catch(error) {
      console.log(error.message);
    }
  };

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6">House Price Prediction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="number" 
              placeholder="House Size (sq. feet)"
              onChange={(e) => setFormData({...formData, HouseSize: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="number"
              step = "0.01"
              placeholder="Property Size (in acres)"
              onChange={(e) => setFormData({...formData, PropertySize: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="number" 
              placeholder="Number of Bedrooms"
              onChange={(e) => setFormData({...formData, Bedrooms: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="number" 
              placeholder="Number of Bathrooms"
              onChange={(e) => setFormData({...formData, Bathrooms: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="text" 
              placeholder="City"
              onChange={(e) => setFormData({...formData, City: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <select
              value={formData.state || ''}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full p-2 border rounded-md"
              required
            >
            <option value="">Select State</option>
            {states.map((state) => (
            <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

            <input 
              type="text" 
              placeholder="Zip Code"
              onChange={(e) => setFormData({...formData, ZipCode: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onSubmit={handleSubmit}
          >
            Predict House Price
          </button>
        </form>
      </div>

      {/* Render house price prediction */}
{housePrice && (
  <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100">
    <h3 className="text-2xl font-bold text-blue-900 mb-3">
      Estimated House Price:
    </h3>
    <p className="text-3xl font-semibold text-indigo-800">
      ${housePrice}
    </p>
    <p className="text-sm text-blue-600 mt-2 italic">
      Based on provided features and market analysis
    </p>
  </div>
)}
    </div>
  );
};

export default HousePricePrediction;