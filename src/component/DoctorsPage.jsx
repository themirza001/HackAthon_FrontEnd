<<<<<<< HEAD
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
=======
// import React from 'react';
// import DoctorCard from './DoctorCard.jsx';
// import doctorsData from '../assets/DoctorsData/DoctorsData.js';

// const DoctorsPage = () => {
//   return (
//     <div>
//       <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex justify-center items-center">
//         <h1 className="text-2xl font-bold mb-4 italic">Doctors</h1>
//       </div>

//       <div className="flex flex-wrap justify-center">
//         {doctorsData.map((doctor) => (
//           <DoctorCard key={doctor.id} doctor={doctor} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorsPage;





import React, { useState } from 'react';
import DoctorCard from './DoctorCard.jsx';
import doctorsData from '../assets/DoctorsData/DoctorsData.js';
import SearchBar from '../pages/SearchBar.jsx';
import DropdownHover from '../pages/DropdownHover.jsx';


const DoctorsPage = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  const sortByProfession = () => {
    const sortedDoctors = [...filteredDoctors].sort((a, b) => a.Specialization.localeCompare(b.Specialization));
    setFilteredDoctors(sortedDoctors);
  };

  const handleSearch = (query) => {
    const filtered = doctorsData.filter((doctor) =>
      doctor.name.toLowerCase().includes(query.toLowerCase()) || doctor.Specialization.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };
>>>>>>> cf138ad0e14dada51c2f9d0701d2adf8e097f86b

  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 italic">Doctors</h1>
      </div>
<<<<<<< HEAD

      <div className="flex flex-wrap justify-center">
        {Array.isArray(doctors) && doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <p>No doctors available.</p>
        )}
=======
      <div className='ml-9 mt-5 flex'>
        <DropdownHover sortByProfession={sortByProfession} />
        <SearchBar placeholder="Search for Doctor" buttonText="Search" onSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
>>>>>>> cf138ad0e14dada51c2f9d0701d2adf8e097f86b
      </div>
    </div>
  );
};

export default DoctorsPage;

