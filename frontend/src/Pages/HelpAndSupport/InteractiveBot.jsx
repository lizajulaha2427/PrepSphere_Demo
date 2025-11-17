import React, { useState, useEffect, useRef } from 'react';
import { botData } from './botData';
import './InteractiveBot.css';

function InteractiveBot() {
  const [currentStep, setCurrentStep] = useState('main'); // 'main', 'account', 'practice', etc. or an answer key
  const [history, setHistory] = useState([]); // To store previous steps for "Back"
  const chatWindowRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom of chat window on new message/option
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [currentStep, history]); // Depend on currentStep and history for scroll

  const handleOptionClick = (optionId) => {
    if (optionId === 'back_to_main') {
      setCurrentStep('main');
      setHistory([]); 
      return;
    }

    setHistory([...history, currentStep]); // Add current step to history
    setCurrentStep(optionId);
  };

  const currentContent = botData[currentStep];

  const handleGoBack = () => {
    if (history.length > 0) {
      const previousStep = history.pop(); // Get last step from history
      setHistory([...history]); // Update history state
      setCurrentStep(previousStep);
    } else {
      setCurrentStep('main'); // Fallback to main if history is empty
    }
  };

  return (
    <div className="interactive-bot-container">
      <div className="bot-header">
        <img
        src="/lumi.png"
        alt="Bot Avatar"
        className="bot-avatar"
      />
        <span className="bot-title">PrepSphere Bot</span>
      </div>
      <div className="bot-chat-window" ref={chatWindowRef}>
        <div className="bot-message bot-intro-message">
          {currentContent.question || currentContent.answer}
        </div>

        {currentContent.options && (
          <div className="bot-options">
            {currentContent.options.map((option) => (
              <button
                key={option.id}
                className="bot-option-button"
                onClick={() => handleOptionClick(option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}

        {history.length > 0 && currentStep !== 'main' && (
          <button className="bot-back-button" onClick={handleGoBack}>
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}

export default InteractiveBot;