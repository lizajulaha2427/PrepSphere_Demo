import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login({ showModal, onClose , onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (!showModal) return null;

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
    const userData = res.data;

    // Make sure userData has fullName
    if (!userData.fullName && userData.user?.fullName) {
      userData.fullName = userData.user.fullName;
    }

    localStorage.setItem("user", JSON.stringify(userData));

    // Update AuthContext
    if (onLogin) onLogin(userData);

    alert("✅ Logged in successfully!");
    onClose();
  } catch (err) {
    alert(err.response?.data?.message || "❌ Login failed!");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>

        <h2 className="modal-title">Sign in</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="signup-text">
          New user? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
