import React, {useState} from 'react';
import { useNavigate} from "react-router-dom";

export default function Register() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();

function handleRegister(e) {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);

   // Check if username already exists
    if (userExists) {
        alert("Username already exists. Please choose a different one.");
        return;
    }
    // Add new user to the users array
    users.push({ username, password, email });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    navigate("/login");
    }

return (
    <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

            <button type="submit">Register</button>

            <button onClick={() => navigate("/login")} style={{ marginLeft: '10px' }}>
                Go to Login
            </button>
        </form>
    </div>
    );
}


