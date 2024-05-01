import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import "./signup_style.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    nid_bc_no: "",
    email: "",
    phone_no: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/");
      if (response.data.success) {
        window.location.href = "/Login";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="Signup">
      <div className="signup_body">
        <div className="signup_body_container">
          <div className="left_side">
            <img src="" alt="" />
          </div>
          <div className="right_side">
            <form onSubmit={handleSubmit}>
              <div className="p_logo">
                <img src="/img/passport-logo.png" alt="passport-logo.png" />
              </div>
              <div className="label">
                <label htmlFor="nid_bc_no">NID/Birth Certificate Number:</label>
              </div>
              <div className="input-field">
                <input
                  name="nid_bc_no"
                  type="text"
                  value={formData.nid_bc_no}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="input-field">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="phone_no">Phone no:</label>
              </div>
              <div className="input-field">
                <input
                  name="phone_no"
                  type="text"
                  value={formData.phone_no}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="input-field">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="label">
                <label htmlFor="confirmPassword">Confirm Password:</label>
              </div>
              <div className="input-field">
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="signup_btn">
                <button type="submit" className="signup-btn glass-button">
                  Sign Up
                </button>
              </div>
              <div className="login_ac_link">
                <p>If you have an account? </p>
                <Link to="/Login">Login Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
