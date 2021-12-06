import { user_error, user_success } from "../types/userTypes";
export const logInSuccess = (payload)=>({

 type: user_success,
 payload
});

export const logInError = (payload)=>({

    type: user_error,
    payload
   });

   export function login(user, pwd) {
    return async(dispatch) => {
       try{
           const res = await login(user,pwd);
           dispatch(logInSuccess(res.data))

       }
       catch(err){
        dispatch(logInError("wrong username or pass"))
       }
        
    }}