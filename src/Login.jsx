import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login_style.css";
import "./styles.css";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate(); 

  const [user, setUser] = useState({
    nid_bc_no: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9002/Login", user)
      .then(res => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/User_dashboard"); // Navigate to user dashboard after login
      })
      .catch(error => {
        console.error("Login Error:", error);
      });
  };


  return (
    <div className="Login">
      <div className="lg_body">
        <div className="lg_form">
          <form onSubmit={handleLogin}>
            <div className="p_logo">
              <img src="/img/passport-logo.png" alt="passport-logo.png" />
            </div>

            <div className="label">
              <label htmlFor="nid_bc_no">NID/Birth Certificate Number:</label>
            </div>
            <div className="input-field">
              <input
                id="nid_bc_no"
                name="nid_bc_no"
                type="text"
                value={user.nid_bc_no}
                onChange={handleChange}
                required
                placeholder="Enter your NID/Birth Certificate Number"
              />
            </div>

            <div className="label">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="on"
                value={user.password}
                onChange={handleChange}
                required
                placeholder="Enter your Password"
              />
            </div>



            <div className="label">
              <label htmlFor="captcha">CAPTCHA</label>
            </div>
            <div className="captcha_field">
              <div
                className="g-recaptcha"
                data-sitekey="6LdaqsApAAAAAC80kJJZ-poxgKEFCYESm5XWMUVS"
              ></div>
            </div>

            <div className="login_btn">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>

            <div className="register_ac_link">
              <p>Don't have an account? </p>
              <a className="register-btn" onClick={() => navigate("/Signup")}>
                Register Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
