import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Login from "../../Pages/LoginPage/Login";
import './Header.css';
import { AuthContext } from "../../Context/AuthContext";
import React from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => navigate("/dashboard");

  return (
    <nav className="navbar">
        <img
          src="/lumi.png"
          alt="PrepSphere Logo"
          className="logo-image"
          width={60}
          height={60}
        />
      <h2 className="logo">
        <Link to="/">PrepSphere</Link>
      </h2>

      <div className="nav-links">
        {!user ? (
          <button className="open-btn" onClick={() => setShowModal(true)}>
            Sign In/Register
          </button>
        ) : (
          <div className="profile-section">
            <span className="profile-icon" onClick={handleProfileClick}>
              &#128100;
            </span>
          </div>
        )}
      </div>

      <Login
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onLogin={login} // use context login
      />
    </nav>
  );
}