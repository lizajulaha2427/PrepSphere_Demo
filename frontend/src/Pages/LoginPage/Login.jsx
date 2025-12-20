import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login({ showModal, onClose , onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgot, setForgot] = useState(false);
const [otpStep, setOtpStep] = useState(false);
const [otp, setOtp] = useState("");
const [newPassword, setNewPassword] = useState("");


  if (!showModal) return null;
const handleForgotPassword = async () => {
  try {
    setLoading(true);
    await axios.post("http://localhost:4000/api/auth/forgot-password", { email });
    alert("📩 OTP sent to your email");
    setOtpStep(true);
  } catch (err) {
    alert(err.response?.data?.msg || "Failed to send OTP");
  } finally {
    setLoading(false);
  }
};
const verifyResetOtp = async () => {
  try {
    setLoading(true);
    await axios.post("http://localhost:4000/api/auth/verify-otp", {
      email,
      otp,
      purpose: "reset",
    });
    alert("✅ OTP verified");
    setForgot(true); // move to password reset
  } catch (err) {
    alert(err.response?.data?.msg || "OTP verification failed");
  } finally {
    setLoading(false);
  }
};
const resetPassword = async () => {
  try {
    setLoading(true);
    await axios.post("http://localhost:4000/api/auth/reset-password", {
      email,
      newPassword,
    });
    alert("🔐 Password reset successful!");
    setForgot(false);
    setOtpStep(false);
  } catch (err) {
    alert(err.response?.data?.msg || "Reset failed");
  } finally {
    setLoading(false);
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await axios.post("http://localhost:4000/api/auth/login", { email, password });
    const userData = res.data;

    if (userData.token) localStorage.setItem("token", userData.token);
    if (userData.user) {
      localStorage.setItem("user", JSON.stringify(userData.user));

      // ✅ update context so dashboard gets updated
      if (onLogin) onLogin(userData.user);
    }

    onClose();
  } catch (err) {
    alert(err.response?.data?.msg || "❌ Login failed!");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>

        <h2 className="modal-title">Sign in</h2>

        {!forgot && !otpStep && (
  <>
    <form className="login-form" onSubmit={handleLogin}>
      <input type="email" placeholder="Email" required value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="login-btn" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>

    <button className="forgot-btn" onClick={handleForgotPassword}>
  Forgot Password?
</button>

  </>
)}

{otpStep && !forgot && (
  <>
    <input className="login-inp"
      type="text"
      placeholder="Enter OTP"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
    />
    <button onClick={verifyResetOtp} className="loginn-btn">
      Verify OTP
    </button>
  </>
)}

{forgot && (
  <>
    <input className="login-inp"
      type="password"
      placeholder="New Password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />
    <button onClick={resetPassword} className="loginn-btn">
      Reset Password
    </button>
  </>
)}


        <p className="signup-text">
          New user? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
