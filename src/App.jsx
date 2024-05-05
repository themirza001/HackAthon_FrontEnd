import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';
//import api from './api/axiosConfig.js';

import { useEffect, useState } from 'react';
import Doctors from './pages/Doctors.jsx';
import axios from 'axios';
import { object } from 'prop-types';
import DoctorsProfile from './pages/DoctorsProfile.jsx';

function App() {
  const [doctors, setDoctors] = useState([]);
  const getDoctors = async () => {
    try {
      await axios
        .get('/api/v1/doctor')
        .then((response) => {
          console.log(response.data.data.doc);
          setDoctors(response.data.data.doc);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <>
    <Header />
    <Routes>
      <Route path='/doctors' element={<DoctorsProfile doctors={doctors} />} />
    </Routes>
    </>
  );
}

export default App;
