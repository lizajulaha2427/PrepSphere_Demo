import React from "react";
import { useState } from "react";
import "./AboutUs.css";
import FloatingCards from "../../Components/Cell/FloatingCards";
import Header from "../../Components/Tissue/Header";

function AboutUs() {
  const [active, setActive] = useState("math");
  const [searchTerm, setSearchTerm] = useState("");

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
        { icon: "⚙️", "text": "Data Structures" },
        { icon: "🤖", text: "AI & Machine Learning" },
      ],
      media: "/cs.mp4",
    },
    data: {
      title: "Data Analysis",
      items: [
        { icon: "📊", text: "Excel Essentials" },
        { icon: "📈", text: "Python for Data Analysis" },
        { icon: "🗄️", text: "Database Management" },
      ],
      media: "/data.mp4",
    },
    science: {
      title: "Science",
      items: [
        { icon: "🔬", text: "Physics Basics" },
        { icon: "🧪", text: "Chemistry Experiments" },
        { icon: "🌍", text: "Earth Science" },
      ],
      media: "/science.mp4",
    },
  };

  const features = [
    {
      id: "voice-chat",
      title: "Voice chat",
      description: "Our realistic voice chat feels just like a real interview.",
    },
    {
      id: "powerful-interview",
      title: "Powerful interviewer",
      description:
        "Our AI interviewer will question you on everything from job-specific technicalities to items on your résumé.",
    },
    {
      id: "constructive-feedback",
      title: "Constructive feedback",
      description:
        "Get honest constructive feedback from our intelligent interview model.",
    },
  ];

  const testimonials = [
    {
      id: "katya-samson",
      name: "Katya Samson",
      role: "Dentist",
      text: "Bossed really put me through my paces. It helped me get a job in a practice I love!",
      img: "https://tse3.mm.bing.net/th/id/OIP.JvyHu2WracZxswwnCB6klgHaEK?pid=Api&P=0&h=180",
    },
    {
      id: "anonymous",
      name: "Anonymous",
      role: "Analyst",
      text: "I was super nervous for my interview but practicing really helped!",
      img: "https://static.vecteezy.com/system/resources/previews/011/947/164/original/silver-user-icon-free-png.png",
    },
    {
      id: "jim-paros",
      name: "Jim Paros",
      role: "Analyst",
      text: "Using bossed was great. It allowed me to improve my skills!",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Jim_Parsons_2016.jpg",
    },
    {
      id: "alison",
      name: "Alison",
      role: "Accountant",
      text: "It was so good, the questions it asked were so clever! It really helped me.",
      img: "https://tse1.mm.bing.net/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?pid=Api&P=0&h=180",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Check for exact section keywords first
    if (lowerCaseSearchTerm === "features") {
      document.querySelector(".third-container").scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (lowerCaseSearchTerm === "reviews" || lowerCaseSearchTerm === "testimonials") {
      document.querySelector(".fifth-container").scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (lowerCaseSearchTerm === "courses" || lowerCaseSearchTerm === "guided paths") {
      document.querySelector(".fourth-container").scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Search features
    const foundFeature = features.find(
      (feature) =>
        feature.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        feature.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
    if (foundFeature) {
      document
        .getElementById(foundFeature.id)
        .scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Search testimonials
    const foundTestimonial = testimonials.find(
      (testimonial) =>
        testimonial.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        testimonial.role.toLowerCase().includes(lowerCaseSearchTerm) ||
        testimonial.text.toLowerCase().includes(lowerCaseSearchTerm)
    );
    if (foundTestimonial) {
      document
        .getElementById(foundTestimonial.id)
        .scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Search sections (courses)
    for (const key in sections) {
      const section = sections[key];
      if (section.title.toLowerCase().includes(lowerCaseSearchTerm)) {
        setActive(key); // Activate the tab
        // Scroll to the fourth-container which holds the tabs
        document
          .querySelector(".fourth-container")
          .scrollIntoView({ behavior: "smooth" });
        return;
      }
      const foundItem = section.items.find((item) =>
        item.text.toLowerCase().includes(lowerCaseSearchTerm)
      );
      if (foundItem) {
        setActive(key); // Activate the tab
        // Scroll to the fourth-container which holds the tabs
        document
          .querySelector(".fourth-container")
          .scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // If no specific element found, perhaps scroll to a general section or show a "not found" message
    alert("No matching section, feature, review, or course found.");
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
            <form className="search-bar" onSubmit={handleSearch}>
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
              <input
                type="text"
                placeholder="Search…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
              {features.map((feature) => (
                <div className="feature" id={feature.id} key={feature.id}>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
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
                  key={sections[active].media} 
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
            <h2>
              Do you want to be the only <br></br>candidate that didn’t prepare?
            </h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div
                className="testimonial-card"
                id={testimonial.id}
                key={testimonial.id}
              >
                <img src={testimonial.img} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <p className="role">{testimonial.role}</p>
                <p className="text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER SECTION */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-col">
              <h3>PrepSphere</h3>
              <p>Your AI-powered interview preparation companion.</p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>Help Center</li>
                <li>Interview Tips</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <span>🌐</span>
                <span>🐦</span>
                <span>📸</span>
                <span>💼</span>
              </div>
            </div>
          </div>

          <p className="footer-bottom">© 2025 PrepSphere. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;