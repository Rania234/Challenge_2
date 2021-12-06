import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import { login,user_success } from '../redux/actions/userActions'


   
const Login = () => {
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const dispatch = useDispatch()
    const loginHandler=(user,pwd)=>{
        dispatch(login({user,pwd}))
    }
    return (
        <div  >
            <div>
        <span>Login page</span>
        </div>
        <form >
        <input type="email" name="email" placeholder="Email" onChange={(e)=>{setUser(e.target.value)}}/>
        <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPwd(e.target.value)}} />
       
        <button onClick={()=>loginHandler(user,pwd)}>Valider</button>
        </form>
      </div>
    )


}
export default Login ;