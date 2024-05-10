import React from 'react';

const DoctorCard = ({ doctor }) => {
  const { name, image, Specialization } = doctor;

  return (
    <div className="m-4 p-4 w-[350px] rounded-lg bg-slate-100 hover:bg-slate-200">
      <img className="rounded-lg res_logo" alt={name} src={image} />
      <h3 className="font-bold py-3">{name}</h3>
      <h4  className="font-bold py-3">{Specialization}</h4>
    </div>
  );
};

export default DoctorCard;