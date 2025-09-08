import React from "react";
import { useState } from "react";

import "./AboutUs.css";
import FloatingCards from "../../Components/Cell/FloatingCards";
import Header from "../../Components/Tissue/Header";

function AboutUs() {

  const [active, setActive] = useState("math");

  const sections = {
    math: {
      title: "Math Courses",
      items: [
        { icon: "➗", text: "Algebra Basics" },
        { icon: "📐", text: "Geometry Concepts" },
        { icon: "📊", text: "Probability & Statistics" },
      ],
      media: "/Maths.mp4",
    },
    cs: {
      title: "CS & Programming",
      items: [
        { icon: "💻", text: "JavaScript Fundamentals" },
        { icon: "⚙️", text: "Data Structures" },
        { icon: "🤖", text: "AI & Machine Learning" },
      ],
      media: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    data: {
      title: "Data Analysis",
      items: [
        { icon: "📊", text: "Excel Essentials" },
        { icon: "📈", text: "Python for Data Analysis" },
        { icon: "🗄️", text: "Database Management" },
      ],
      media: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    science: {
      title: "Science",
      items: [
        { icon: "🔬", text: "Physics Basics" },
        { icon: "🧪", text: "Chemistry Experiments" },
        { icon: "🌍", text: "Earth Science" },
      ],
      media: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  };


  return (
    <div>
      <div className="animated-bg">
        <Header></Header>
        <div className="first-container">
          <div className="first-left">
            <span className="ai-badge">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#FFA726"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ marginRight: "6px" }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 2" />
              </svg>
              AI Powered
            </span>
            <h2 className="main-heading">Ace Interviews With PrepSphere</h2>
            <p className="sub-heading">
              Get role-specific questions, expand answers when you need them,
              dive deeper into concepts, and organize everything your way.
            </p>
          </div>

          <div className="first-right">
            <form className="search-bar">
              <span className="search-icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#888"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input type="text" placeholder="Search…" />
            </form>
          </div>
        </div>
        <FloatingCards />

        <div className="third-container">
          {/* Left Side - Big Image */}
          <div className="left-side">
            <img
              src="https://cdn0.iconfinder.com/data/icons/life-skill-flat-self-improvement/512/effective_growth-512.png" // replace with your image path
              alt="Interview Practice"
              className="big-image"
            />
          </div>

          {/* Right Side - Content */}
          <div className="right-side">
            <div className="features">
              <div className="feature">
                <div>
                  <h2>Voice chat</h2>
                  <p>
                    Our realistic voice chat feels just like a real interview.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div>
                  <h2>Powerful interviewer</h2>
                  <p>
                    Our AI interviewer will question you on everything from
                    job-specific technicalities to items on your résumé.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div>
                  <h2>Constructive feedback</h2>
                  <p>
                    Get honest constructive feedback from our intelligent
                    interview model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="fourth-container">
          <p className="fourth-header">Guided paths for every journey</p>
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button
          className={active === "math" ? "active" : ""}
          onClick={() => setActive("math")}
        >
          Math Courses
        </button>
        <button
          className={active === "cs" ? "active" : ""}
          onClick={() => setActive("cs")}
        >
          CS & Programming
        </button>
        <button
          className={active === "data" ? "active" : ""}
          onClick={() => setActive("data")}
        >
          Data Analysis
        </button>
        <button
          className={active === "science" ? "active" : ""}
          onClick={() => setActive("science")}
        >
          Science
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* LEFT SIDE: Text */}
        <div className="tab-text">
          <h3>{sections[active].title}</h3>
          <ul>
            {sections[active].items.map((item, index) => (
              <li key={index}>
                <span>{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE: Media */}
        <div className="tab-media">
          {sections[active].media.endsWith(".mp4") ? (
            <video
              key={sections[active].media}  // 👈 force re-render when video changes
              autoPlay
              muted
              loop
            >
              <source src={sections[active].media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={sections[active].media} alt="Preview" />
          )}
        </div>
      </div>
    </div>
        

        <div className="fifth-container">
      <div className="testimonial-header">
        <h2>Do you want to be the only <br></br>candidate that didn’t prepare?</h2>
      </div>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img src="https://tse3.mm.bing.net/th/id/OIP.JvyHu2WracZxswwnCB6klgHaEK?pid=Api&P=0&h=180" alt="Katya Samson" />
          <h3>Katya Samson</h3>
          <p className="role">Dentist</p>
          <p className="text">
            Bossed really put me through my paces. It helped me get a job in a practice I love!
          </p>
        </div>

        <div className="testimonial-card">
          <img src="https://static.vecteezy.com/system/resources/previews/011/947/164/original/silver-user-icon-free-png.png" alt="Anonymous" />
          <h3>Anonymous</h3>
          <p className="role">Analyst</p>
          <p className="text">
            I was super nervous for my interview but practicing really helped!
          </p>
        </div>

        <div className="testimonial-card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Jim_Parsons_2016.jpg" alt="Jim Paros" />
          <h3>Jim Paros</h3>
          <p className="role">Analyst</p>
          <p className="text">
            Using bossed was great. It allowed me to improve my skills!
          </p>
        </div>

        <div className="testimonial-card">
          <img src="https://tse1.mm.bing.net/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?pid=Api&P=0&h=180" alt="Alison" />
          <h3>Alison</h3>
          <p className="role">Accountant</p>
          <p className="text">
            It was so good, the questions it asked were so clever! It really helped me.
          </p>
        </div>
      </div>
    </div>

      </div>
    </div>
  );
}

export default AboutUs;
