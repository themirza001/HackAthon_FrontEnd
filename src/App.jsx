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

  // Log data outside the useEffect hook
  useEffect(() => {
    console.log(doctors); // This will log the updated data
  }, [doctors]); // Add data as a dependency

  return (
    <div>
      <h1>Data from backend:</h1>
      <div>
        <ul>
          {doctors?.map((doctors) => (
            <div key={doctors.id}>
              <li>{doctors.name}</li>
              <li>{doctors.email}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
