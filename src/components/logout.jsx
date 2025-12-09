import React  from "react";
import { useNavigate } from "react-router-dom";


function Logout(){
    const navigate = useNavigate();
    
    const handleLogout =() =>{
        localStorage.removeItem("loggedIn");
        navigate("/login");
    }


return (
    <div>
        <button onClick={handleLogout}
        style={{ marginTop: 20, background: "#eee", color: "#333" }}
      >Logout</button>
    </div>
)
}
export default Logout;