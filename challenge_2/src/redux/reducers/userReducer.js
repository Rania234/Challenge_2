import { user_error,user_success } from "../types/userTypes";
const initialState = {
    user: "",
    pwd : "",
    loggedIn : false,
}
const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case user_success:
           if (payload==="")
           return {...state}
            else 
           return {...state,payload}
           default : return state;

    }
}
export default userReducer