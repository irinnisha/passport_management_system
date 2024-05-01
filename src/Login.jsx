import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLoginForm } from "./validation";

import "./login_style.css";
import "./styles.css";

function Login() {
  const { formData, errors, handleInputChange } = useLoginForm();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/Login", formData); // Update the URL
      if (response.data.success) {
        window.location.href = "/User_dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
    }
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
                value={formData.nid_bc_no}
                onChange={handleInputChange}
                required
              />
              {errors.nid_bc_no && <p className="error">{errors.nid_bc_no}</p>}
            </div>

            <div className="label">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="input-field">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="forget_password">
              <a href="#">Forget Password?</a>
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
              <button className="login-btn glass-button" type="submit">
                Login
              </button>
            </div>

            <div className="register_ac_link">
              <p>Don't have an account? </p>
              <Link to="/">
                <button className="register-btn glass-button">
                  Register Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
