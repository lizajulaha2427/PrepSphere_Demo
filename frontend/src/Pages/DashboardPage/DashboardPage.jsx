import { useContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";
import { AuthContext } from "../../Context/AuthContext";
import { HelpCircle, LogOut, ArrowRight } from "lucide-react";


// 🔹 Function to extract YouTube video ID from any URL
function extractVideoId(url) {
  try {
    const urlObj = new URL(url);

    // Standard youtube link ?v=ID
    if (urlObj.searchParams.get("v")) {
      return urlObj.searchParams.get("v");
    }

    // Short link youtu.be
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }

    // Channel or non-video link (cannot embed)
    if (url.includes("channel")) return null;

    return null;
  } catch {
    return null;
  }
}

// 🔹 All recommendations (goal + year)
export const recommendationsData = {
  "CS Fundamentals": {
    "1st Year": [
      {
        title: "Computer Fundamentals Full Course – Gate Smashers",
        url: "https://www.youtube.com/watch?v=JvuzquUe5gk"
      },
      {
        title: "Operating System Basics – Gate Smashers",
        url: "https://www.youtube.com/watch?v=JvuzquUe5gk"
      }
    ],
    "2nd Year": [
      {
        title: "DBMS Complete Playlist – Gate Smashers",
        url: "https://www.youtube.com/watch?v=kBdlM6hNDAE"
      },
      {
        title: "Computer Networks Full Playlist – Knowledge Gate",
        url: "https://www.youtube.com/watch?v=IPvYjXCsTg8"
      },
      {
        title: "Discrete Structures",
        url: "https://www.youtube.com/watch?v=wGLTV8MgLlA"
      },
      
    ],
    "3rd Year": [
      {
        title: "OS + CN + DBMS Revision Playlist",
        url: "https://www.youtube.com/watch?v=t1ZbE9glgYI"
      }
    ],
    "4th Year": [
      {
        title: "Placement Full Course – Love Babbar",
        url: "https://www.youtube.com/watch?v=J4l5AZnW1dE"
      }
    ]
  },

  DSA: {
    "1st Year": [
      {
        title: "Beginner DSA – Kunal Kushwaha",
        url: "https://www.youtube.com/watch?v=zgYwdXVAf8E"
      }
    ],
    "2nd Year": [
      {
        title: "Love Babbar Complete DSA Playlist",
        url: "https://www.youtube.com/watch?v=5_5oE5lgrhw"
      }
    ],
    "3rd Year": [
      {
        title: "Striver SDE Sheet Playlist",
        url: "https://www.youtube.com/watch?v=odrfUCS9sQk"
      }
    ],
    "4th Year": [
      {
        title: "Last-Minute DSA Revision",
        url: "https://www.youtube.com/watch?v=4iFALQ1ACdA"
      }
    ]
  },

  Roadmaps: {
    "1st Year": [
      {
        title: "Full CS Roadmap – Code With Harry",
        url: "https://www.youtube.com/watch?v=kjUu1eZNiQQ"
      }
    ],
    "2nd Year": [
      {
        title: "Software Engineer Roadmap – Harkirat Singh",
        url: "https://www.youtube.com/watch?v=0rXqBQAb5ow"
      }
    ]
  },

  "Interview Preparations": {
    "2nd Year": [
      { title: "Resume Building Tips", url: "https://www.youtube.com/watch?v=Gx3ypoE4_cY" }
    ],
    "3rd Year": [
      { title: "Top 100 Interview Questions", url: "https://www.youtube.com/watch?v=NyjTQ1KS_1w" }
    ],
    "4th Year": [
      { title: "Crack Coding Interviews – Striver", url: "https://www.youtube.com/watch?v=Jt8Qqa3zWjo" }
    ]
  },
  "All of Them": {
    "1st Year": [
      {
        title: "Computer Fundamentals Full Course – Gate Smashers",
        url: "https://www.youtube.com/watch?v=JvuzquUe5gk"
      },
      {
        title: "Operating System Basics – Gate Smashers",
        url: "https://www.youtube.com/watch?v=JvuzquUe5gk"
      },{
        title: "Beginner DSA – Kunal Kushwaha",
        url: "https://www.youtube.com/watch?v=zgYwdXVAf8E"
      }
    ],
    "2nd Year": [
      {
        title: "DBMS Complete Playlist – Gate Smashers",
        url: "https://www.youtube.com/watch?v=kBdlM6hNDAE"
      },
      {
        title: "Computer Networks Full Playlist – Knowledge Gate",
        url: "https://www.youtube.com/watch?v=IPvYjXCsTg8"
      },
      {
        title: "Discrete Structures",
        url: "https://www.youtube.com/watch?v=wGLTV8MgLlA"
      },{
        title: "Love Babbar Complete DSA Playlist",
        url: "https://www.youtube.com/watch?v=5_5oE5lgrhw"
      }
      
    ],
    "3rd Year": [
      {
        title: "OS + CN + DBMS Revision Playlist",
        url: "https://www.youtube.com/watch?v=t1ZbE9glgYI"
      },
      {
        title: "Striver SDE Sheet Playlist",
        url: "https://www.youtube.com/watch?v=odrfUCS9sQk"
      }
    ],
    "4th Year": [
      {
        title: "Placement Full Course – Love Babbar",
        url: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=1&t=274s"
      },
      {
        title: "Last-Minute DSA Revision",
        url: "https://www.youtube.com/watch?v=4iFALQ1ACdA"
      }
      , { title: "Crack Coding Interviews", url: "https://www.youtube.com/watch?v=OmFLoCYeZ4I" }
      , { title: "Frontend Web Development Bootcamp Course ", url: "https://www.youtube.com/watch?v=zJSY8tbf_ys" }
    ]
  }
};

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const defaultImg = "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80";
  const [profileImg, setProfileImg] = useState(defaultImg);

  const userKeyId = user?.email || user?.id || "guest";
  const storageKey = `profileImg_${userKeyId}`;
  const modules = [
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Reviews", path: "/reviews" },
    { name: "Year-based Study", path: "/yearbased" },
  ];

  useEffect(() => {
    // Load saved image only for this user
    if (!userKeyId) return;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setProfileImg(saved);
    } else {
      setProfileImg(defaultImg);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userKeyId]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setProfileImg(base64);
      try {
        localStorage.setItem(storageKey, base64);
      } catch (err) {
        console.error("Could not save image to localStorage:", err);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProfileImg(defaultImg);
    localStorage.removeItem(storageKey);
  };


  const userGoal = user?.goal || "";

  // User Selected Years (array)
  const selectedYears = user?.years || [];

  // Final Recommendations for ALL selected years
  let recommendations = [];

  if (userGoal && selectedYears.length > 0) {
    selectedYears.forEach((year) => {
      const yearVideos = recommendationsData[userGoal]?.[year] || [];
      recommendations = [...recommendations, ...yearVideos];
    });
  }

  return (
    <div className="dash-wrap">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">

        <div className="profile-section">
          <p>Welcome back!</p>
          <img src={profileImg} className="profile-avatar" alt="profile" />

          <h3>{user?.fullName}</h3>
          <p className="email-display">{user?.email}</p>

          <label className="upload-btn" style={{ cursor: "pointer" }}>
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>

  <button className="remove-btnn" onClick={handleRemoveImage}>
    Remove Image
  </button>
          <button
            className="change-pass-btn"
            onClick={() => setOpenPasswordModal(true)}
          >
            Change Password
          </button>
        </div>
        <div className="profile-box">
          

          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} /> Logout
          </button>
          <button className="help-btn" onClick={() => navigate("/helpandsupport")}>
            <HelpCircle size={18} /> Help & Support
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        <h2>Your Modules</h2>

        <div className="modules-grid">
          {modules.map((mod) => (
            <div
              key={mod.name}
              className="module-card"
              onClick={() => navigate(mod.path)}
            >
              <span>{mod.name}</span>
              <ArrowRight size={18} />
            </div>
          ))}
        </div>

        {/* RECOMMENDATION SECTION */}
        <h2 className="yt-heading">
          Recommended Videos for:
          <span> {userGoal} — {selectedYears.join(", ")} </span>
        </h2>

        <div className="video-grid">
          {recommendations.length === 0 ? (
            <p style={{ color: "red", fontWeight: "bold" }}>
              No recommendations available.
            </p>
          ) : (
            recommendations.map((item, index) => {
              const videoId = extractVideoId(item.url);

              return (
                <div key={index} className="video-card">
                  <h3>{item.title}</h3>

                  {videoId ? (
                    <iframe
                      width="100%"
                      height="200"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={item.title}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p style={{ color: "orange" }}>
                      ⚠ This video cannot be embedded (channel link).
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>
      </main>
      {openPasswordModal && (
        <div className="modal-overlayy">
          <div className="modal-boxx">
            <h3>Change Password</h3>

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              onClick={async ()=> {
                if (newPassword !== confirmPassword) {
                  setMsg("Passwords do not match!");
                  return;
                }
            try {
              const res = await fetch("http://localhost:4000/api/auth/change-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: user.email,
                  newPassword,
                }),
              });

              const data = await res.json();
              setMsg(data.msg);

              if (res.ok) {
                setTimeout(() => setOpenPasswordModal(false), 1500);
              }

            } catch (err) {
              setMsg("Server error");
            }
          }}
            >
              Update Password
            </button>

            {msg && <p className="msg">{msg}</p>}

            <button
              className="close-btnn"
              onClick={() => setOpenPasswordModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
