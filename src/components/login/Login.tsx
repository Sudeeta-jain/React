import React, { useState } from "react"
import "./Login.css"
import { useHistory } from 'react-router-dom';


const Login = ()=> {

  const history = useHistory()

  const [user, setUser]= useState({
    email:"",
    password:"",
  })

  const handleChange=(e: any) =>{
    const {name, value} = e.target
    setUser({
        ...user,
        [name]:value
    })
  }

  
  const handleLogin =(e: any) =>{
    e.preventDefault();
    var strpass= (localStorage.getItem('Email')?.replace(/"/g, ""));
    var strpass1= (localStorage.getItem('Password')?.replace(/"/g, ""));
    console.log(strpass)
    if (strpass===(user.email) && strpass1===(user.password)){
        alert("Login Successfully")
        history.push("/home")
      } else{
        alert("Wrong Credentials")
        history.push("/")
      }
    } 
    return (
        <div className="login">
          {console.log("User",user)}
          {/*console.log("test",strpass)*/}
          <h1>Login</h1>
          <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
          <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
          <div> </div>
          <button type="submit" onClick = {handleLogin}>Login</button>
          <div>or</div>
          <button onClick={() => history.push("/register")}>Register</button>

          
        </div>
    )
} 

export default Login