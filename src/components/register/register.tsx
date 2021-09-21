import React from "react"
import { useState } from "react"
import "./register.css"
import { useHistory } from "react-router-dom"


const Register = ()=> {

    const history = useHistory()

    /*const [user, setUser]= useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })*/

    //const [name1, setName]= useState("")
    const [email1, setEmail]= useState("")
    const [password1,setPassword]= useState("")
    const [reEnterPassword, setReEnterPassword]= useState("")

    /*const handleChange=(e: any) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }*/
   
    const register = () => {
        
        if( email1 && password1&&(password1===reEnterPassword)){
            //localStorage.setItem("Name", JSON.stringify(name1))
            localStorage.setItem("Email", JSON.stringify(email1))
            localStorage.setItem("Password", JSON.stringify(password1))
            localStorage.setItem("Re-enter", JSON.stringify(reEnterPassword))
            alert("account created")
            history.push("/")
            }else {
            alert("invlid input")
        }
        
    }

    
    return (
        <div className="register">
          
          <h1>Register</h1>
          
          <input type="email" name="email" value={email1} placeholder="Enter your Email" onChange= {(event) => setEmail(event.target.value)}></input>
          <input type="password" name="password" value={password1} placeholder="Enter your Password" onChange= {(event) => setPassword(event.target.value)}></input>
          <input type="password" name="password" value={reEnterPassword} placeholder="Re-Enter Password" onChange= {(event) => setReEnterPassword(event.target.value)}></input>
          <div> </div>
          <button type="submit" onClick = { register}>Register</button>
          <div>or</div>
          <button onClick = {() => history.push("/")}>Login</button>
          
        </div>
    )
} 

export default Register