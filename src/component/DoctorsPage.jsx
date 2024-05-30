import React from 'react';
import DoctorCard from './DoctorCard.jsx';
import doctorsData from '../assets/DoctorsData/DoctorsData.js';

const DoctorsPage = () => {
  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 italic">Doctors</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
