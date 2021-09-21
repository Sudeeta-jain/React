import React from "react"
import "./home.css"
import { useHistory } from "react-router-dom"

const Home = ()=> {

    const history = useHistory()
    return (
        <div className="home">
            <h1>WELCOME TO HOMEPAGE</h1>
            <button onClick = { () => history.push("/")}>Logout</button>
        </div>
    )
} 

export default Home