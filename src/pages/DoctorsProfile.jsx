import React from 'react';
import DoctorCard from '../component/DoctorCard';

const DoctorsProfile = ({ doctors }) => {
  return(
    <>
      <div className='text-white gap-4 flex justify-center mt-5'>
          <button   className='text-center bg-green-600 pl-4 pr-4 pt-4 pb-4 rounded-lg hover:bg-white hover:text-green-600'>Doctors</button>
        </div>
      <div className='gap-6 h-auto flex flex-wrap mt-20 mb-20 justify-center '>
          {doctors.map((d) => (
              <DoctorCard key={d.id} img={d.image} name={d.heading} Specialization={d.Specialization} email={d.email} regYear={d.regYear} />
              ))}
      </div>
    </> 
)};

export default DoctorsProfile;
