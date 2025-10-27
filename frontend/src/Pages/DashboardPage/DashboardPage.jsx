import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import './DashboardPage.css';
import { AuthContext } from "../../Context/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const modules = [
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Comment Posting", path: "/comments" },
    { name: "Year-based Study", path: "/yearbased" }
  ];

  const handleLogout = () => {
    logout();           // clear user from context and localStorage
    navigate("/");      // redirect to home or login page
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
       {user ? (
  <div className="profile">
    <h3>{user.fullName}</h3>  {/* Name here */}
    <p>Welcome back!</p>
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  </div>
) : (
  <div className="profile">
    <h3>Guest</h3>
    <p>Please sign in</p>
  </div>
)}

      </aside>

      <main className="main-content">
        <h2 className="dashboard-title">Your Modules</h2>
        <div className="modules-container">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="module-box"
              onClick={() => navigate(mod.path)}
            >
              {mod.name}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}