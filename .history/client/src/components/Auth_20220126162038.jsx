import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signinImage from "../assets/bg.gif";
const initialState ={
    fullname:"",
    username:'',
    password:'',
    confirmPassword:'',
    avatarURL:'',
    phoneNumber:''
}
const Auth = () => {
const [form,setForm] = useState(initialState)
  const [isSignup, setSignup] = useState(true);
  const handleChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) =>{
      e.preventDefault()
      log
  }
  const switchMode =()=>{
      setSignup((pre)=>!pre)
  }
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Đăng Ký" : "Đăng Nhập"}</p>
          <form onSubmit={handleSubmit}>
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
                  name="PhoneNumber"
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
            <div className="auth__form-container_fields-content_button">
                <button type="submit" className="">{!isSignup?"Đăng Nhập " : "Đăng ký"}</button>
            </div>  
          </form>
          <div className="auth__form-container_fields-account">
            <p>
                {isSignup ? "Already have an account? ":"Don't have an account? "}
                <span onClick={switchMode}>
                        {isSignup?"Đăng nhập":"Đăng kí"}
                </span>
            </p>
          </div>
        </div>
      </div>
          <div className="auth__form-container_image">
              <img src={signinImage} alt='signin'/>
          </div>
    </div>
  );
};

export default Auth;
