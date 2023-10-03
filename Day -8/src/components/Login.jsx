import React, { useState } from 'react'
import loginimg from "../assets/login-new.jpg"
import '../assets/css/Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { login } from './redux/UserSlice'
import { useDispatch } from 'react-redux'



const Login = () => {
  const navigate = useNavigate() ;
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;

const dispatch = useDispatch() ;

const onSubmit = (e) => {
    e.preventDefault() ;
    dispatch(
      login({
      email:email,
      password:password,
    })
    );
    if(email === 'admin@gmail.com' && password === '12345')
    {
      navigate("/adminDashboard")
    }

    
}
  return (
    <div>
      <div className="main" onSubmit={(e) => onSubmit(e)}>
            <img src={loginimg} alt="" />
            <form>
                  <div className="container">
                        <label className="heading">LOGIN</label>
                        <input type="email" name ="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL' />
                        <input type="password" name ="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}placeholder='PASSWORD'/>
                        <label>Forget Password? <Link to='/'>Click here</Link></label>
                        <Link to="/adminDashboard"><button type="submit">LOGIN</button></Link>
                        <label>Already have an account? <Link to='/signup'>SignUp</Link></label>
                  </div>
            </form>
      </div>
    </div>
  )
}

export default Login