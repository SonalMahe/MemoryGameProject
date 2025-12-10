
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css'
import './login.css';

import eevee from "../assets/eevee 1.svg";
import pikachu from "../assets/pikachu.svg";
import pikachu2 from "../assets/Pikachu2-SVG-File-Free.png";
import flareon from "../assets/flareon do crl 1.svg";
import jolteon from "../assets/jolteon.svg";
import pokemonR1 from "../assets/pokemonR1.svg";
import pokemonspikes from "../assets/50_pokemon__27_jolteon_by_megbeth-d89m9wr 1.svg";
import catwithscraf from "../assets/c8aa0c00e585bdd089e76254b9d74771 1.svg";
import glaceon from "../assets/glaceon 1.svg";
import Umbreon from "../assets/Umbreon 1.svg";
import firedragon from "../assets/pokemon-firedragon.svg";
import eeveeyellow from "../assets/eeveeyellow.svg";
import vaporeon from "../assets/vaporeon_by_scratchismyname-d6o5v21 1.svg";
import  pokemon507 from "../assets/507-5079769_espeon-png-espeon-pokemon 1.svg";




function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();

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

        <div className='main'>

            <div className="top">

                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={firedragon} alt="firedragon" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={pokemonR1} alt="pokemonR1" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={pokemonspikes} alt="pokemonspikes" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={catwithscraf} alt="catwithscraf" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={glaceon} alt="glaceon" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={Umbreon} alt="Umbreon" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={eeveeyellow} alt="jolteon" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={vaporeon} alt="jolteon" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={jolteon} alt="jolteon" />
                <img className="img-top animate__animated animate__rotateIn animate__infinite animate__slower	3s" src={flareon} alt="flareon" />
        
            </div>

            <div className="auth-container">
                <h2>
                    Pokémon Memory Game 
                    <img 
                        className="img-pica animate__animated animate__fadeInBottomLeft animate__infinite animate__slower	2s" 
                        src={pikachu} alt="pichachu" 
                    />
                </h2>
                <form onSubmit={handleLogin}>

                    <label htmlFor="username">USER NAME:</label>
                    <input id='username' type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                
                    <label htmlFor="password">PASSWORD:</label>
                    <input id='password' type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    <button type='submit'>Login</button>   
                    <button type="button" onClick={() => navigate("/register")}>Sign Up</button> 
                </form>

            </div>

        </div>
    )
}
export default Login;