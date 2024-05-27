import { myAxios } from "./helper";

export const userSignup=(user)=>{
    return myAxios.post('api/v1/users/signup',user).then((response)=>response.data).catch((error)=>console.log(error));
}

export const userLogin=(loginDetails)=>{
    return myAxios.post('api/v1/users/login',loginDetails).then((response)=>response.data).catch((error)=>console.log(error));
}
