import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css'
import './login.css'
import pikachu from "../assets/pikachu.svg";
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
import eevee from "../assets/eevee 1.svg";
import pokemon507 from "../assets/507-5079769_espeon-png-espeon-pokemon 1.svg";
import pokemonwithpichachu from "../assets/pokemonwith-pichachu.svg";




function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "{}");

        if (users[username] && users[username] === password) {
            localStorage.setItem("loggedIn", username);

            alert("Successfully Logged In");
            localStorage.setItem("loggedIn", true);
            navigate("/game")

        } else {
            alert("Invalid username or password");
        }
    }
    return (

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
                        className="img-pica animate__animated animate__fadeInBottomLeft animate__infinite animate__slower	3s"
                        src={pikachu} alt="pichachu"
                    />
                </h2>
                <br />

                <form onSubmit={handleLogin}>

                    <img className="img animate__animated animate__rotateInDownLeft" src={eevee} alt="eevee" />
                    <label htmlFor="username" className="label animate__animated animate__flipInX animate">USER NAME:</label>
                    <input
                        className="button label animate__animated animate__flipInX animate"
                        id='username'
                        type="text"
                        placeholder='Enter Username'
                        value={username} onChange={(e) => setUsername(e.target.value)} required
                    />
                    <br />
                    <br />

                    <img className="img animate__animated animate__rotateInDownLeft" src={pokemon507} alt="pokemon507" />
                    <label htmlFor="password" className="label animate__animated animate__flipInX animate">PASSWORD:</label>
                    <input
                        className="button label animate__animated animate__flipInX animate"
                        // id='password' 
                        type="password"
                        placeholder='Enter your Password'
                        value={password} onChange={(e) => setPassword(e.target.value)} required
                    />

                    <div className="auth">
                        <img className="bottom-img animate__animated animate__fadeInBottomLeft animate__infinite animate__slower	3s" src={pokemonwithpichachu} alt="pokemonwithpichachu" />
                        <div>
                            <button type='submit' className=" button label animate__animated animate__flipInX animate">Login</button>
                            <button type="button" className="button label animate__animated animate__flipInX animate" onClick={() => navigate("/register")}>Sign Up</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )
}
export default Login;