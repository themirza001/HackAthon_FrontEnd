import { myAxios } from './helper';

export const doctorSignup = (doctor) => {
  return myAxios
    .post('api/v1/doctors/signup', doctor)
    .then((response) => response.data);
};

<<<<<<< HEAD
export const doctorSignup=(doctor)=>{
    return myAxios.post('api/v1/doctors/signup',doctor).then((response)=>response.data);
}

export const doctorLogin=(loginDetails)=>{
    return myAxios.post('api/v1/doctors/login',loginDetails).then((response)=>response.data);
}
export const doctorsData = () => {
    return myAxios.get('/api/v1/doctors').then(response => response.data.data.doc);
  };
  
  
  


=======
export const doctorLogin = (loginDetails) => {
  return myAxios
    .post('api/v1/doctors/login', loginDetails)
    .then((response) => response.data);
};
export const doctorLogout = (next) => {
  return myAxios
    .post('api/v1/doctors/logout')
    .then((response) => {
      response.data;
      location.reload(true);
      next();
    })
    .catch((error) => console.log(error));
};
>>>>>>> cf138ad0e14dada51c2f9d0701d2adf8e097f86b
