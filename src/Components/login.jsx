import './login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css'

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefult();

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[username] && users[username].password === password) {
        localStorage.setItem("loggedin", username);

        alert("Successfully Logged In");
        navigate("/game")
        
        } else {
            alert("Invalid username or password");
        }
    }
    return(
        <div>
            <form onSubmit={handleLogin}>

                <label htmlFor="username">USER NAME:</label>
                <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
               
                <label htmlFor="password">PASSWORD:</label>
                <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <button type='submit'>Login</button>   
                <button type="button" onClick={() => navigate("/register")}>Create a New Account</button> 
            </form>

        </div>
    )
}
export default Login;