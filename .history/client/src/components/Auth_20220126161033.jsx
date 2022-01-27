import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signinImage from "../assets/signup.jpg";
const Auth = () => {
  const [isSignup, setSignup] = useState(true);
  const handleChange = (e) => {};
  const switchMode =()=>{
      setSignup((pre)=>!pre)
  }
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Đăng Ký" : "Đăng Nhập"}</p>
          <form onSubmit={() => {}}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullname">Họ Và Tên</label>
                <input
                  name="fullname"
                  type="text"
                  placeholder="Sâm Tường"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
             
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="username">Tên tài khoản</label>
                <input
                  name="username"
                  type="text"
                  placeholder="Admin123"
                  onChange={handleChange}
                  required
                />
              </div>
            
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Số Điện Thoại</label>
                <input
                  name="Phone Number"
                  type="text"
                  placeholder="05646404xx"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avartarURL">Avartar URL</label>
                <input
                  name="avartarURL"
                  type="text"
                  placeholder="Avartar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
           
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="pasword">Mật khẩu</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Mật khẩu"
                  onChange={handleChange}
                  required
                />
              </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </form>
          <div className="auth__form-container_fields-account">
            <p>
                {isSignup ? "Already have an account? ":"Don't have an account? "}
                <span onClick={switchMode}>
                        {isSignup?"Đăng nhập":"Đăng kí"}
                </span>
            </p>
          </div>
          <div cl
        </div>
      </div>
    </div>
  );
};

export default Auth;