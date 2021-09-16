import React from "react"
import { useState } from "react"
import "./register.css"
import { useHistory } from "react-router-dom"


const Register = ()=> {

    const history = useHistory()

    const [user, setUser]= useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange=(e: any) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    
   
    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            localStorage.setItem("MyUser", JSON.stringify(user))
            
            history.push("/login")
            }else {
            alert("invlid input")
        }
        
    }

    
    return (
        <div className="register">
          {console.log("User",user)}
          <h1>Register</h1>
          <input type="text" name="name" value={user.name} placeholder="Enter your Name" onChange= {handleChange}></input>
          <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange= {handleChange}></input>
          <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange= {handleChange}></input>
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter your Password" onChange= {handleChange}></input>
          <div> </div>
          <button type="submit" onClick = { register}>Register</button>
          <div>or</div>
          <button onClick = {() => history.push("/login")}>Login</button>
          
        </div>
    )
} 

export default Register