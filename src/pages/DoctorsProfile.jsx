import React from 'react';
import DoctorCard from '../component/DoctorCard';

const DoctorsProfile = ({ doctors }) => {
  return(
   <DoctorCard  doctors={doctors}/> 
)};

export default DoctorsProfile;
