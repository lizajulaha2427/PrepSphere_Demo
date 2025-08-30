import "./Login.css";

export default function Login({ showModal, onClose }) {
  if (!showModal) return null; // don't render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close Button */}
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        {/* Logo */}
        <div className="logo">🚀</div>

        <h2 className="modal-title">Sign in</h2>

        <div className="login-options">
          <button className="login-btn google">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google"/>
            Sign in with Google
          </button>
          <button className="login-btn facebook">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="facebook"/>
            Sign in with Facebook
          </button>
          <button className="login-btn apple">
            <img src="https://www.svgrepo.com/show/475633/apple.svg" alt="apple"/>
            Continue with Apple
          </button>
          <button className="login-btn email">Sign in with email</button>
        </div>

        <p className="signup-text">
          New user? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
}
