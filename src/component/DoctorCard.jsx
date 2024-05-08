import React from 'react';
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const DoctorCard = ({ doctors }) => {
  return (
    <div className="flex justify-center items-center h-screen border-r-8 bg-slate-800">
      <Carousel
        className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3" 
        autoPlay={true} 
        animation="slide" 
        interval={3500} 
      >
        {
          doctors?.map((doctor) => (
            <Paper key={doctor.id} className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mr-0 md:mr-8 mb-4 md:mb-0">
                  <img src={doctor.image} alt="" className="w-full h-auto rounded" />
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-bold mb-2">{doctor.name}</h4>
                  <div className="mb-4">{doctor.Specialization}</div>
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Consultation</button>
                  </div>
                </div>
              </div>
            </Paper>
          ))
        }
      </Carousel>
    </div>
  );
};

export default DoctorCard;
