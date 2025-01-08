import { Heart } from 'lucide-react';
import React from 'react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      price: 90000,
      beds: 2,
      baths: 2,
      sqft: 1352,
      type: 'House for sale',
      address: '1333 County Road 216, Eureka Springs, AR 72632',
      agency: 'KELLER WILLIAMS MARKET PRO REALTY',
      images: ['/api/placeholder/800/500'],
      priceChange: 'Price cut: $4,900 (12/31)'
    },
    {
      id: 2,
      price: null,
      beds: 3,
      baths: 3,
      sqft: 424,
      type: 'Auction',
      address: '132 Catherine Park Rd, Hot Springs, AR 71913',
      agency: 'THOMAS BLACKMON REALTY',
      images: ['/api/placeholder/800/500'],
      label: 'Elevated tree cabin'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {properties.map(property => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <img 
              src={property.images[0]} 
              alt={property.address}
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-gray-100">
              <Heart className="w-6 h-6" />
            </button>
            {property.priceChange && (
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm">
                {property.priceChange}
              </div>
            )}
            {property.label && (
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm">
                {property.label}
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div className="text-2xl font-bold">
                {property.price ? `$${property.price.toLocaleString()}` : '--'}
              </div>
              <div className="px-2 py-1 bg-gray-100 rounded text-sm">•••</div>
            </div>
            <div className="mt-2 flex gap-2 text-sm text-gray-600">
              <span>{property.beds} beds</span>
              <span>|</span>
              <span>{property.baths} ba</span>
              <span>|</span>
              <span>{property.sqft.toLocaleString()} sqft</span>
              <span>-</span>
              <span>{property.type}</span>
            </div>
            <div className="mt-2 text-sm">{property.address}</div>
            <div className="mt-1 text-sm text-gray-500">{property.agency}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Properties;