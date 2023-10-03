import React from "react";
import '../assets/css/Signup.css'
import signupimg from "../assets/signupcopy.jpg"
import { Link } from 'react-router-dom'

const Signup = () =>
{
      const [signupData, setSignUpData] = React.useState({
            firstname:"",
            username:"",
            age:"",
            email:"",
            password:"",
            confirmpassword:""
      })

      const handleOnChange = (e) =>
      {
            const [name, value] = [e.target.name, e.target.value] ;
            setSignUpData({
                  ...signupData,
                  [name]:value
            })
      }

      const onSubmit = (e) => {
            e.preventDefault() ;
            console.log(signupData) ;
      }

      return(
            <form onSubmit={onSubmit}>
                  <div className="main">
                        <div>
                             <img src={signupimg} alt="" /> 
                        </div>
                        <div className="container-sign">
                              <h1><strong>SIGN</strong> UP</h1>
                              <input type="text" placeholder="FIRSTNAME" name="firstname" onChange={handleOnChange}></input>
                              <input type="text" placeholder="USERNAME" name="username" onChange={handleOnChange}></input>
                              <input type="text" placeholder="AGE" name="age" onChange={handleOnChange}></input>
                              <input type="email" placeholder="EMAIL ID" name="email" onChange={handleOnChange}></input>
                              <input type="password" placeholder="PASSWORD" name="password" onChange={handleOnChange}></input>
                              <input type="password" placeholder="CONFIRM PASSWORD" name="confirmpassword" onChange={handleOnChange}></input>
                              <Link to ="/login"><button type="submit">SIGNUP</button></Link>
                              <label>Already have an account? <Link to='/'>Signin</Link></label>
                        </div>    
                  </div>
                   
            </form>
      )
}

export default Signup