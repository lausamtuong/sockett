import React, { useState } from 'react';
import Cookies from "universal-cookie"
import axios from "axios"
import signinImage from "../assets/signup.jpg"
const Auth = () => {
    const [isSignup,setSignup] = useState(false)
    return (
        <div className="auth__form-container">
        <div className ="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup?"Sign up":"Sign In"}</p>
                <form onSubmit={}>
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label  htmlFor="fullname">Full Name</label>
                            <input name="fullname" ty
                        </div>
                    )}
                </form>
            </div>
        </div>
            
        </div>
    );
}

export default Auth;
