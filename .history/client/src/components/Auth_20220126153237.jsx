import React from 'react';
import Cookies from "universal-cookie"
import axios from "axios"
import signinImage from "../assets/signup.jpg"
const Auth = () => {
    const [isSignup,setSignup] = const [state, setstate] = useState(initialState);(false)
    return (
        <div className="auth__form-container">
        <div className ="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup?"Sign up":"Sign In"}</p>
            </div>
        </div>
            
        </div>
    );
}

export default Auth;
