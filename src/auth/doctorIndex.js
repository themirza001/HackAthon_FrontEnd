export const isDoctorLoggedIn=()=>{
    let data=localStorage.getItem("data");
    if(data!=null) return true;
    else
         return false;
    }
    
    
    export const doctorDoLogin = (data, next) => {
        localStorage.setItem("data", JSON.stringify({ ...data, role: 'doctor' }));
        next();
      };
    
    export const doDoctorLogout=(next)=>{
        localStorage.removeItem("data");
        next();
    }
    
    export const getCurrentDoctorDetail = () => {
        if (isDoctorLoggedIn()) {
          return JSON.parse(localStorage.getItem("data")).data;
        } else {
          return false;
        }
      };