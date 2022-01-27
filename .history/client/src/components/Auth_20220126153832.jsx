import React, { useState } from 'react';
import Cookies from "universal-cookie"
import axios from "axios"
import signinImage from "../assets/signup.jpg"
const Auth = () => {
    const [isSignup,setSignup] = useState(true)
    const handleChange = (e) =>{

    }
    return (
        <div className="auth__form-container">
        <div className ="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup?"Sign up":"Sign In"}</p>
                <form onSubmit={()=>{}}>
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label  htmlFor="fullname">Họ Và Tên</label>
                            <input name="fullname" type="text" placeholder="Sâm Tường" onChange={handleChange}
                            required />
                        </div>
                    )}
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label  htmlFor="fullname">Full Name</label>
                            <input name="fullname" type="text" placeholder="Full Name" onChange={handleChange}
                            required />
                        </div>
                    )}
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label  htmlFor="fullname">Full Name</label>
                            <input name="fullname" type="text" placeholder="Full Name" onChange={handleChange}
                            required />
                        </div>
                    )}
                </form>
            </div>
        </div>
            
        </div>
    );
}

export default Auth;
