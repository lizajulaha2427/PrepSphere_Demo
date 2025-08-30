import React from 'react'
import './AboutUs.css'
import FloatingCards from '../../Components/Cell/FloatingCards'
import Header from '../../Components/Tissue/Header'

function AboutUs() {
  return (
    <div>
      <div className="animated-bg">
      <Header></Header>
      <div className="first-container">
        <div className="first-left">
        <span className="ai-badge">
            <svg width="16" height="16" fill="none" stroke="#FFA726" strokeWidth="2" viewBox="0 0 24 24" style={{marginRight: '6px'}}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 2" />
            </svg>
            AI Powered
          </span>
          <h2 className="main-heading">Ace Interviews With PrepSphere</h2>
          <p className="sub-heading">
            Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way.
          </p>
        </div>

      <div className="first-right">
        <form className="search-bar">
          <span className="search-icon">
            <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input type="text" placeholder="Search…" />
        </form>
      </div>
      </div>
      <FloatingCards />
      <div>
      </div> 
      </div>
    </div>
  )
}

export default AboutUs