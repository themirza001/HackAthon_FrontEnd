import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const { id, name, image, Specialization } = doctor;

  const handleData = () => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="m-4 p-4 w-[350px] rounded-lg bg-slate-100 hover:bg-slate-200">
      <img className="rounded-lg res_logo" alt={name} src={image} />
      <h3 className="font-bold py-3">{name}</h3>
      <h4 className="font-bold py-3">{Specialization}</h4>
      <button className='bg-green-800 hover:bg-green-650 p-2 rounded-md' onClick={handleData}>View Profile</button>
    </div>
  );
};

export default DoctorCard;
