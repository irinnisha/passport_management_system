import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "./user_dashboard.css";

function User_dashboard() {
  const handleNavigation = (path) => {
    window.location.href = path; // Redirect to the specified path
  };

  return (
    <div className="user_dashboard">
      <div className="container">
        <div className="header">
          <div className="logo">
            <div className="logo_img">
              <img
                src="/img/bangladesh-govt-hd-logo.png"
                alt="bangladesh-govt-hd-logo.png"
              />
            </div>
            <div className="heading">
              Government of the People's Republic of Bangladesh
            </div>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
              <li>
                <a href="#">Apply E-Passport</a>
              </li>
            </ul>
            <div className="profile">
              <img src="/img/Avator.jpg" alt="Avatar" />
            </div>
          </div>
        </div>
        <div className="body">
          <div className="cardbox">
            <div className="card">
              <h3>Apply</h3>
              <button
                className="btn"
                type="button"
                onClick={() => handleNavigation("/Apply_page_1")}
              >
                Start New Application
              </button>
            </div>
            <div className="card">
              <h3>Reissue</h3>
              <button
                className="btn"
                type="button"
                onClick={() => handleNavigation("/reissue")}
              >
                Reissue or Renewal
              </button>
            </div>
            <div className="card">
              <h3>Missing/Lost</h3>
              <button
                className="btn"
                type="button"
                onClick={() => handleNavigation("/report")}
              >
                Report Lost or Stolen
              </button>
            </div>
            <div className="card">
              <h3>Status</h3>
              <button
                className="btn"
                type="button"
                onClick={() => handleNavigation("/status")}
              >
                Check Your Status
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <ul>
            <li>
              <Link to="/">Instruction</Link>
            </li>
            <li>
              <Link to="/Faq">FAQ</Link>
            </li>
            <li>
              <Link to="/apply">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User_dashboard;
