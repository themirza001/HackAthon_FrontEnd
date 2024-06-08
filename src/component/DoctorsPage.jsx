import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard.jsx';
import { doctorsData } from '../services/doctor-service.js';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    doctorsData()
      .then(data => {
        console.log('Fetched doctors data:', data);
        if (Array.isArray(data)) {
          setDoctors(data);
        } else {
          console.error('Expected an array but got:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching doctors data:', error);
      });
  }, []);

  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 italic">Doctors</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {Array.isArray(doctors) && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <p>No doctors available.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
