import React from 'react';

const ClinicAppointment = ({ location, price, timing, verified }) => {
  return (
    <div className="flex flex-col space-y-2 border border-gray-200 rounded-md p-4">
      <h3 className="text-lg font-bold">Clinic Appointment</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <div className="flex items-center space-x-2">
        <span className="text-green-500 font-bold">₹{price}</span>
        <span className="text-sm text-gray-600">FREE</span>
      </div>
      <p className="text-sm text-gray-600">{timing}</p>
      {verified && (
        <p className="text-sm text-green-500">
          <span className="mr-1">Max. 15 mins wait + </span> Verified details
        </p>
      )}
      <button className="btn btn-primary">Book FREE Clinic Visit</button>
    </div>
  );
};

export default ClinicAppointment;
