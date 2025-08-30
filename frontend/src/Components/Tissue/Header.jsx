import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../../Pages/LoginPage/Login";
import './Header.css';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="navbar">
      {/* Name (Logo) links to About Us */}
      <h2 className="logo">
        <Link to="/">PrepSphere</Link>
      </h2>

      <div className="nav-links">
        
        {/* Sign In button triggers modal */}
        <button className="open-btn" onClick={() => setShowModal(true)}>
          Sign In/Register
        </button>
      </div>

      {/* Login Modal */}
      <Login showModal={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
}
