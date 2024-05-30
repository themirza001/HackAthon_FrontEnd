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

  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 italic">Doctors</h1>
      </div>
      <div className='ml-9 mt-5 flex'>
        <DropdownHover sortByProfession={sortByProfession} />
        <SearchBar placeholder="Search for Doctor" buttonText="Search" onSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;

