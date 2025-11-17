import { useContext } from "react";
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
      , { title: "Crack Coding Interviews – Striver", url: "https://www.youtube.com/watch?v=OmFLoCYeZ4I" }
    ]
  }
};

export default function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const modules = [
    { name: "Roadmaps", path: "/roadmaps" },
    { name: "Comment Posting", path: "/comments" },
    { name: "Year-based Study", path: "/yearbased" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // User Goal
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
        <div className="profile-box">
          <h3>{user?.fullName}</h3>
          <p>Welcome back!</p>

          <button className="help-btn" onClick={() => navigate("/helpandsupport")}>
            <HelpCircle size={18} /> Help & Support
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} /> Logout
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
    </div>
  );
}
