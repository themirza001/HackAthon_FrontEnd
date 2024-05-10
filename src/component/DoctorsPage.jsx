import React from 'react';
import DoctorCard from './DoctorCard.jsx';

const doctorsData = [
  {
    "name": "Dr. John Doe",
    "email": "john@example.com",
    "image": "https://example.com/images/john.jpg",
    "Specialization": "Cardiologist",
    "regId": 123456,
    "password": "password123",
    "regYear": 2015,
    "confirmPassWord": "password123"
  },
  {
    "name": "Dr. Jane Smith",
    "email": "jane@example.com",
    "image": "https://example.com/images/jane.jpg",
    "Specialization": "Pediatrician",
    "regId": 654321,
    "password": "securepass",
    "regYear": 2018,
    "confirmPassWord": "securepass"
  },
  {
    "name": "Dr. Michael Johnson",
    "email": "michael@example.com",
    "image": "https://example.com/images/michael.jpg",
    "Specialization": "Dermatologist",
    "regId": 987654,
    "password": "derma123",
    "regYear": 2016,
    "confirmPassWord": "derma123"
  },
  {
    "name": "Dr. Sarah Lee",
    "email": "sarah@example.com",
    "image": "https://example.com/images/sarah.jpg",
    "Specialization": "Neurologist",
    "regId": 456789,
    "password": "neurologist",
    "regYear": 2017,
    "confirmPassWord": "neurologist"
  },
  {
    "name": "Dr. David Brown",
    "email": "david@example.com",
    "image": "https://example.com/images/david.jpg",
    "Specialization": "Orthopedic Surgeon",
    "regId": 321654,
    "password": "ortho123",
    "regYear": 2019,
    "confirmPassWord": "ortho123"
  },
  {
    "name": "Dr. Emily Taylor",
    "email": "emily@example.com",
    "image": "https://example.com/images/emily.jpg",
    "Specialization": "Psychiatrist",
    "regId": 159753,
    "password": "psychiatrist",
    "regYear": 2020,
    "confirmPassWord": "psychiatrist"
  },
  {
    "name": "Dr. Christopher White",
    "email": "chris@example.com",
    "image": "https://example.com/images/chris.jpg",
    "Specialization": "Ophthalmologist",
    "regId": 852963,
    "password": "ophthalmo",
    "regYear": 2014,
    "confirmPassWord": "ophthalmo"
  },
  {
    "name": "Dr. Olivia Green",
    "email": "olivia@example.com",
    "image": "https://example.com/images/olivia.jpg",
    "Specialization": "ENT Specialist",
    "regId": 369852,
    "password": "ent123",
    "regYear": 2013,
    "confirmPassWord": "ent123"
  },
  {
    "name": "Dr. William Black",
    "email": "william@example.com",
    "image": "https://example.com/images/william.jpg",
    "Specialization": "General Practitioner",
    "regId": 147258,
    "password": "general123",
    "regYear": 2021,
    "confirmPassWord": "general123"
  },
  {
    "name": "Dr. Mia Lopez",
    "email": "mia@example.com",
    "image": "https://example.com/images/mia.jpg",
    "Specialization": "Gynecologist",
    "regId": 258147,
    "password": "gyno123",
    "regYear": 2012,
    "confirmPassWord": "gyno123"
  },
  {
    "name": "Dr. John Doe",
    "email": "john@example.com",
    "image": "https://example.com/images/john.jpg",
    "Specialization": "Cardiologist",
    "regId": 123456,
    "password": "password123",
    "regYear": 2015,
    "confirmPassWord": "password123"
  },
  {
    "name": "Dr. Jane Smith",
    "email": "jane@example.com",
    "image": "https://example.com/images/jane.jpg",
    "Specialization": "Pediatrician",
    "regId": 654321,
    "password": "securepass",
    "regYear": 2018,
    "confirmPassWord": "securepass"
  },
  {
    "name": "Dr. Michael Johnson",
    "email": "michael@example.com",
    "image": "https://example.com/images/michael.jpg",
    "Specialization": "Dermatologist",
    "regId": 987654,
    "password": "derma123",
    "regYear": 2016,
    "confirmPassWord": "derma123"
  },
  {
    "name": "Dr. Sarah Lee",
    "email": "sarah@example.com",
    "image": "https://example.com/images/sarah.jpg",
    "Specialization": "Neurologist",
    "regId": 456789,
    "password": "neurologist",
    "regYear": 2017,
    "confirmPassWord": "neurologist"
  },
  {
    "name": "Dr. David Brown",
    "email": "david@example.com",
    "image": "https://example.com/images/david.jpg",
    "Specialization": "Orthopedic Surgeon",
    "regId": 321654,
    "password": "ortho123",
    "regYear": 2019,
    "confirmPassWord": "ortho123"
  },
  {
    "name": "Dr. Emily Taylor",
    "email": "emily@example.com",
    "image": "https://example.com/images/emily.jpg",
    "Specialization": "Psychiatrist",
    "regId": 159753,
    "password": "psychiatrist",
    "regYear": 2020,
    "confirmPassWord": "psychiatrist"
  },
  {
    "name": "Dr. Christopher White",
    "email": "chris@example.com",
    "image": "https://example.com/images/chris.jpg",
    "Specialization": "Ophthalmologist",
    "regId": 852963,
    "password": "ophthalmo",
    "regYear": 2014,
    "confirmPassWord": "ophthalmo"
  },
  {
    "name": "Dr. Olivia Green",
    "email": "olivia@example.com",
    "image": "https://example.com/images/olivia.jpg",
    "Specialization": "ENT Specialist",
    "regId": 369852,
    "password": "ent123",
    "regYear": 2013,
    "confirmPassWord": "ent123"
  },
  {
    "name": "Dr. William Black",
    "email": "william@example.com",
    "image": "https://example.com/images/william.jpg",
    "Specialization": "General Practitioner",
    "regId": 147258,
    "password": "general123",
    "regYear": 2021,
    "confirmPassWord": "general123"
  },
  {
    "name": "Dr. Mia Lopez",
    "email": "mia@example.com",
    "image": "https://example.com/images/mia.jpg",
    "Specialization": "Gynecologist",
    "regId": 258147,
    "password": "gyno123",
    "regYear": 2012,
    "confirmPassWord": "gyno123"
  }

];

const DoctorsPage = () => {
  return (
    <div>
      <div className="w-full h-40 bg-gradient-to-r from-blue-200 to-cyan-200 flex justify-center items-center">
    <h1 className="text-2xl font-bold mb-4 italic">Doctors</h1>
</div>

      
      <div className="flex flex-wrap justify-center">
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.regId} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;