import React from 'react';

const SingleDoctorProfile = ({ name, degree, experience, rating, image }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-white p-4 rounded-lg shadow-md">
      <img className="rounded-full h-24 w-24 mb-2" src={image} alt={name} />
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-gray-600">{degree}</p>
      <p className="text-sm text-gray-600">{experience} Years Experience Overall</p>
      <div className="flex items-center space-x-1">
        <span className="text-yellow-400 text-lg">{rating}</span>
        <span className="text-sm text-gray-600">(2165 patients)</span>
      </div>
    </div>
  );
};
export default SingleDoctorProfile;