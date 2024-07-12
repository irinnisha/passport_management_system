import React, { useState } from "react"
import "./signup_style.css";
import "./styles.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const Navigate = useNavigate()

    const [ user, setUser] = useState({
      nid_bc_no: "",
        email:"",
        phone_no:"",
        password:"",
        confirmPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Signup = () => {
        const { nid_bc_no, email,phone_no, password, confirmPassword } = user
        if( nid_bc_no && email && phone_no, password && (password === confirmPassword)){
            axios.post("http://localhost:9002/Signup", user)
            .then( res => {
                alert(res.data.message)
                Navigate("/Login")
            })
        } else {
            alert("invlid input")
        }
        
    }


  return (
    <div className="Signup">
    {console.log("User",user)}
      <div className="signup_body">
        <div className="signup_body_container">
          <div className="left_side">
            <img src="" alt="" />
          </div>
          <div className="right_side">
          
              <div className="p_logo">
                <img src="/img/passport-logo.png" alt="passport-logo.png" />
              </div>
              <div className="label">
                <label htmlFor="nid_bc_no">NID/Birth Certificate Number:</label>
              </div>
              <div className="input-field">
                <i className="fa-solid fa-id-card"></i>
                <input
                  name="nid_bc_no"
                  type="text"
                  value={user.nid_bc_no}
                  onChange={handleChange}
                  required
                  placeholder="Enter your NID/Birth Certificate Number"
                />
              </div>
              <div className="label">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="input-field">
                <input
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Email"
                />
              </div>
              <div className="label">
                <label htmlFor="phone_no">Phone no:</label>
              </div>
              <div className="input-field">
                <input
                  name="phone_no"
                  type="text"
                  value={user.phone_no}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Phone no."
                />
              </div>
              <div className="label">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="input-field">
                <input
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <div className="label">
                <label htmlFor="confirmPassword">Confirm Password:</label>
              </div>
              <div className="input-field">
                <input
                  name="confirmPassword"
                  type="password"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Enter your Confirm Password"
                />
              </div>
              <div className="signup_btn">
                <button type="submit" className="signup-btn" onClick={Signup}>
                  Sign Up
                </button>
              </div>
              <div className="login_ac_link ">
                <p>If you have an account? </p>
                <a className="glass-button" href="/Login">Login Here</a>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;