import React, { useState } from "react";
import './style.css'

const LoginButton = () =>{
    const [logedIn, setLogedIn] = useState(false);
    return(
        <div className="loginButton">
            {logedIn ? (
                <div className="loginButton__button"  onClick={()=>setLogedIn(false)}>
                    Logout
                </div>
            ) : (
                <div className="loginButton__button"  onClick={()=>setLogedIn(true)}>
                    Login
                </div>
            )}
        </div>
    )
}
export default LoginButton;