import axios from 'axios';
import React, { useState } from 'react';

const PropertyListing = () => {
  //const[Property, setProperty] = useState('');
    const [formData, setFormData] = useState({
      state: '',
      district: '',
      areaCode: '',
      bedroomCount: '',
      bathroomCount: '',
      basement: '',
      storeys: '',
      squareFeet: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      axios.post('https://real-estate-backend-q05k.onrender.com/post-listing', formData)
    .then((response) => {
      //setProperty(response.data);
      console.log(response.data);
    }).catch((error) => {
      console.log(error.message);
    })
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
      <div className="max-w-4xl mx-auto p-14">
        <div className="bg-white shadow-lg rounded-lg mt-6">
          <h2 className="text-2xl font-bold mb-6">List Your Property</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input 
                placeholder="Property Name"
                onChange={(e) => setFormData({...formData, title: e.target.value})}
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
                placeholder="City"
                onChange={(e) => setFormData({...formData, district: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
  
              <input 
                placeholder="Area/Region Code"
                onChange={(e) => setFormData({...formData, areaCode: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
  
              <input 
                type="number" 
                placeholder="Number of Bedrooms"
                onChange={(e) => setFormData({...formData, bedroomCount: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
  
              <input 
                type="number" 
                placeholder="Number of Bathrooms"
                onChange={(e) => setFormData({...formData, bathroomCount: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
  
              <select 
                onChange={(e) => setFormData({...formData, basement: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Basement</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
  
              <input 
                type="number" 
                placeholder="Number of Storeys"
                onChange={(e) => setFormData({...formData, storeys: e.target.value})}
                className="w-full p-2 border rounded-md"
                required
              />
  
              <input 
                type="number" 
                placeholder="Area (sq ft)"
                onChange={(e) => setFormData({...formData, squareFeet: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
  
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              List Property
            </button>
          </form>
        </div>
      </div>
    );
  };

export default PropertyListing;