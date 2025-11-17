import React from 'react';
import Header from '../../Components/Tissue/Header';
import InteractiveBot from "./InteractiveBot";
import './HelpAndSupport.css';

function HelpAndSupportPage() {

  return (
    <div className="help-page-wrapper animated-bg">
      <Header />
      <div className="help-container">
        <h1 className="help-main-heading">Help & Support</h1>
        <p className="help-sub-heading">Get instant answers from our interactive bot or contact us directly.</p>

        <div className="interactive-bot-section">
          <InteractiveBot />
        </div>

        <div className="contact-section">
          <h2>Still Need Help?</h2>
          <p>If the bot couldn't fully answer your question, or for specific issues, feel free to reach out to us directly.</p>
          <button className="contact-button">Contact Support</button>
          <div className="contact-info">
            <p>Email: <a href="mailto:support@prepsphere.com">support@prepsphere.com</a></p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpAndSupportPage;
