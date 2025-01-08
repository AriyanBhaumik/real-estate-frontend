import React, { useState } from 'react';
import USAMap from "react-usa-map";

// Sample property data - in a real app, this would come from an API
const propertyData = {
    "California": [
        { id: 1, title: "Luxury Beach House", price: "$2,500,000", beds: 4, baths: 3, sqft: 3200, address: "123 Ocean Ave" },
        { id: 2, title: "Downtown Condo", price: "$850,000", beds: 2, baths: 2, sqft: 1100, address: "456 Market St" },
    ],
    "New York": [
        { id: 3, title: "Manhattan Penthouse", price: "$5,900,000", beds: 3, baths: 3.5, sqft: 2800, address: "789 5th Ave" },
        { id: 4, title: "Brooklyn Brownstone", price: "$2,200,000", beds: 4, baths: 2.5, sqft: 2500, address: "101 Bedford Ave" },
    ],
    // Add more states and properties as needed
};

const Map = () => {
    const [currentState, setCurrentState] = useState('');
    const [currState, setCurrState] = useState('');

    const mapHandler = (e) => {
        const statecont = e.target.innerHTML;
        const stateName = statecont.replace(/<\/?title>/g, '');
        setCurrState(e.target.dataset.name);
        setCurrentState(stateName);
    };

    const statesCustomConfig = () => {
        if (currState) {
            return {
                [currState]: { fill: '#86efac' } // Using Tailwind's green-300 color
            };
        }
        return {};
    };

    const getPropertiesForState = () => {
        return propertyData[currentState] || [];
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="mb-8">
                <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
                {currentState && (
                    <h2 className="text-2xl font-bold mt-4 text-center">Properties in {currentState}</h2>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentState && getPropertiesForState().map((property) => (
                    <div 
                        key={property.id} 
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
                    >
                        {/* Property Image Placeholder */}
                        <div className="h-48 bg-gray-200 w-full"></div>
                        
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{property.title}</h3>
                            <p className="text-2xl font-bold text-green-600 mb-2">{property.price}</p>
                            
                            <div className="space-y-2 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                        </svg>
                                        {property.beds} beds
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                                        </svg>
                                        {property.baths} baths
                                    </span>
                                    <span className="flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                                        </svg>
                                        {property.sqft.toLocaleString()} sqft
                                    </span>
                                </div>
                                <p className="text-gray-500">{property.address}</p>
                            </div>

                            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
                {currentState && getPropertiesForState().length === 0 && (
                    <div className="col-span-full text-center py-8">
                        <p className="text-gray-500">No properties available in {currentState}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Map;