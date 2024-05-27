export const isDoctorLoggedIn=()=>{
    let data=localStorage.getItem("data");
    if(data==null) return false;
    else
         return true;
    }
    
    
    export const doctorDoLogin=(data,next)=>{
        localStorage.setItem("data",JSON.stringify(data));
        next();
    }
    
    export const doDoctorLogout=(next)=>{
        localStorage.removeItem("data");
        next();
    }
    
    export const getCurrentDoctorDetail=()=>{
        if(isUserLoggedIn){
            return JSON.parse(localStorage.getItem("data")).data;
        }else{
            return false;
        }
    }