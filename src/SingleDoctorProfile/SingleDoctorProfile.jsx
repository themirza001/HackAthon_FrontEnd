import React from 'react';

const SingleDoctorProfile = ({ name, degree, experience, rating, image }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img className="rounded-full h-24 w-24 mb-4 border-4 border-white shadow-md" src={image} alt={name} />
      <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
      <p className="text-sm text-gray-200 mb-1">{degree}</p>
      <p className="text-sm text-gray-200 mb-3">{experience} Years Experience Overall</p>
      <div className="flex items-center space-x-2">
        <span className="text-yellow-400 text-lg font-semibold">{rating}</span>
        <span className="text-sm text-gray-200">(2165 patients)</span>
      </div>
    </div>
  );
};

export default SingleDoctorProfile;
