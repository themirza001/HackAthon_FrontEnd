import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import { useEffect, useState } from 'react';
import DoctorRegister from './pages/DoctorRegister.jsx';
import UserRegister from './pages/UserRegister.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Footer from './component/Footer.jsx';
import DoctorsPage from './component/DoctorsPage.jsx';
import DoctorsProfile from './DoctorPage/DoctorsProfile.jsx';

function App() {
  const [doctors, setDoctors] = useState([""]);
  // const getDoctors = async () => {
  //   try {
  //     await axios
  //       .get('/api/v1/doctor')
  //       .then((response) => {
  //         console.log(response.data.data.doc);
  //         setDoctors(response.data.data.doc);
  //         console.log(doctors);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDoctors();
  // }, []);
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />
      <Route path='/user-register' element={<UserRegister/>} />
      <Route path='/doctor-register' element={<DoctorRegister/>} />
      <Route path='doctorcard' element={<DoctorsPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/doctor/:id' element={<DoctorsProfile />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
