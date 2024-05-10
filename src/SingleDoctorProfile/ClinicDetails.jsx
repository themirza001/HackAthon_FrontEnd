import React from 'react';

const ClinicDetails = ({ name, address, timing, payment, mapLink }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{address}</p>
      <p className="text-sm text-gray-600">
        <span className="mr-2">Timing:</span>
        {timing}
      </p>
      <div className="flex items-center space-x-2">
        <span className="text-green-500">Online Payment Available</span>
        <a href={mapLink} className="text-sm text-blue-500 underline">
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default ClinicDetails;
