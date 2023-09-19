import React from "react";
import '../assets/css/Login.css';
import loginimg from "../assets/Login page -img.jpg";
const Login = () =>{
      const [data, setData] = React.useState({
            username:"",
            password:""
      })
      const handleOnChange = (e) => {
            const [name, value] = [e.target.name, e.target.value] ;
            setData({
                  ...data,
                  [name]:value
            })
      }
      const onSubmit = (e) => {
            e.preventDefault() ;
            console.log(data) ;
      }
      return(
            <form onSubmit={onSubmit}>
                  <div className="main">
                        <div>
                              <img src={loginimg}/>
                        </div>
                        <div className="container">
                              <h1>LOGIN</h1>
                              <input type="text" placeholder="USERNAME" name="username" onChange={handleOnChange}></input>
                              <input type="text" placeholder="PASSWORD" name="password" onChange={handleOnChange}></input>
                              <button type="submit">LOGIN</button>
                        </div>    
                  </div>
                   
            </form>
      )
}
export default Login;
