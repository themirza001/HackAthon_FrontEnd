import React from 'react';
import { useParams } from 'react-router-dom';
import SingleDoctorProfile from '../SingleDoctorProfile/SingleDoctorProfile';
import doctorsData from '../assets/DoctorsData/DoctorsData.js';
import ClinicAppointment from '../SingleDoctorProfile/ClinicAppointment.jsx';
import ClinicDetails from '../SingleDoctorProfile/ClinicDetails.jsx';

const DoctorsProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(doctor => doctor.id === parseInt(id));

  if (!doctor) {
    return <div className="text-center text-red-500">Doctor not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Doctor Profile Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <SingleDoctorProfile
            name={doctor.name}
            degree="MBBS"
            experience="5+ years"
            rating="5/10"
            image={doctor.image}
          />
        </div>

        {/* Clinic Appointment and Details Section */}
        <div className="w-full lg:w-2/3">
          <div className="mb-8">
            <ClinicAppointment
              location="Impressions Dental Specialities (Sahakaranagar)"
              price="₹400"
              timing="Mon-Fri: 09:30 AM - 08:00 PM, Sat: 09:30 AM - 06:30 PM"
              verified={true}
              callToActionText="Book Now"
              callToActionLink="#" // Replace with actual booking link
            />
          </div>

          <div>
            <ClinicDetails
              name="Impressions Dental Specialities"
              address="Number 864, Prakriti, D Block, 60 Feet Road, Landmark: Above Third Wave Coffee, Bangalore"
              timing="Mon-Fri: 09:30 AM - 08:00 PM, Sat: 09:30 AM - 06:30 PM"
              payment="Online Payment Available"
              mapLink="https://www.google.com/maps/place/Impressions+Dental+Specialities+(Sahakaranagar)" // Replace with actual map link
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsProfile;
