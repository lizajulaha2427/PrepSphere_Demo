export const botData = {
  main: {
  question: "Hello! I'm your PrepSphere AI Assistant. How can I assist you today?",
  options: [
    { id: "account", text: "My Account & Billing" },
    { id: "practice", text: "Interview Practice Sessions" },
    { id: "platform_features", text: "Platform Features" },
    { id: "troubleshooting", text: "Troubleshooting & Tech Help" },

    { id: "exam_prep", text: "Exam Prep & Study Help" },
    { id: "payments_refunds", text: "Payments & Refund Policy" },
    { id: "learning_content", text: "Courses & Learning Content" },
    { id: "mobile_app", text: "Mobile App Support" },
    { id: "career_guidance", text: "Career Guidance & Resume Help" },

    { id: "partnerships_other", text: "Partnerships & Other" },
  ],
},


  // --- Account & Billing ---
  account: {
    question: "What would you like to know about your account or billing?",
    options: [
      { id: "account_profile", text: "Profile Management" },
      { id: "account_subscription", text: "Subscription & Payments" },
      { id: "account_security", text: "Security & Privacy" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  account_profile: {
    question: "What specifically about your profile?",
    options: [
      { id: "account_reset_password", text: "Change/Reset Password" },
      { id: "account_update_details", text: "Update Personal Details" },
      { id: "account_delete_account", text: "Delete My Account" },
      { id: "back_to_account", text: "← Back to Account Options" },
    ],
  },
  account_reset_password: {
    answer: "To reset your password, go to the login page and click 'Forgot Password'. Follow the secure link sent to your registered email address.",
  },
  account_update_details: {
    answer: "You can update your personal information, such as email or name, in your Dashboard under 'Settings' > 'Profile Information'.",
  },
  account_delete_account: {
    answer: "To delete your account, please go to 'Settings' > 'Account Management' and follow the instructions. Be aware this action is irreversible.",
  },
  account_subscription: {
    question: "What about your subscription or payments?",
    options: [
      { id: "account_plans", text: "View Pricing Plans" },
      { id: "account_update_billing", text: "Update Payment Method" },
      { id: "account_cancel_subscription", text: "Cancel Subscription" },
      { id: "account_invoice", text: "Access Invoices/Receipts" },
      { id: "back_to_account", text: "← Back to Account Options" },
    ],
  },
  account_plans: {
    answer: "You can view all our available pricing plans and their features on the 'Pricing' page of our website.",
  },
  account_update_billing: {
    answer: "You can update your billing information and payment method in your Dashboard under 'Settings' > 'Billing Details'.",
  },
  account_cancel_subscription: {
    answer: "To cancel your subscription, navigate to 'Settings' > 'Subscription' in your Dashboard and follow the cancellation steps. Your access will continue until the end of your current billing cycle.",
  },
  account_invoice: {
    answer: "All your past invoices and payment receipts are available for download in your Dashboard under 'Settings' > 'Billing History'.",
  },
  account_security: {
    question: "Regarding account security:",
    options: [
      { id: "account_2fa", text: "Two-Factor Authentication (2FA)" },
      { id: "account_suspicious", text: "Report Suspicious Activity" },
      { id: "back_to_account", text: "← Back to Account Options" },
    ],
  },
  account_2fa: {
    answer: "PrepSphere supports 2FA for enhanced security. You can enable or disable it in your Dashboard under 'Settings' > 'Security'.",
  },
  account_suspicious: {
    answer: "If you notice any suspicious activity on your account, please change your password immediately and contact our support team at security@prepsphere.com.",
  },

  // --- Interview Practice Sessions ---
  practice: {
    question: "How can I help with interview practice?",
    options: [
      { id: "practice_start_session", text: "How to Start a Session" },
      { id: "practice_types", text: "Types of Practice Sessions" },
      { id: "practice_feedback", text: "Understanding AI Feedback" },
      { id: "practice_customization", text: "Customizing Sessions" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  practice_start_session: {
    answer: "To start an interview practice session, go to your Dashboard, select a desired role, and click 'Start New Session'. You'll be guided through setting up your preferences.",
  },
  practice_types: {
    answer: "PrepSphere offers various practice types: role-specific, behavioral, technical, and resume-based interviews. You can select your preference before starting a session.",
  },
  practice_feedback: {
    answer: "Our AI provides comprehensive feedback on your answers' relevance, clarity, confidence, and structure. It also suggests improvements and additional points you could have covered.",
  },
  practice_customization: {
    answer: "You can customize your practice sessions by uploading your resume, choosing specific skill sets, and adjusting the difficulty level of questions in the session setup.",
  },

  // --- Platform Features ---
  platform_features: {
    question: "What would you like to know about PrepSphere's features?",
    options: [
      { id: "platform_voice_chat", text: "Voice Chat Functionality" },
      { id: "platform_interviewer_ai", text: "AI Interviewer Capabilities" },
      { id: "platform_guided_paths", text: "Guided Learning Paths" },
      { id: "platform_resume_analysis", text: "Resume Analysis" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  platform_voice_chat: {
    answer: "Our realistic voice chat simulates a real interview environment, helping you practice verbal communication and answer delivery under pressure.",
  },
  platform_interviewer_ai: {
    answer: "The AI interviewer asks probing questions, follows up on your answers, and can even ask about specific items on your uploaded resume, just like a human interviewer.",
  },
  platform_guided_paths: {
    answer: "Guided paths offer structured learning modules for specific roles or skills, providing curated questions, resources, and practice exercises to help you master an area.",
  },
  platform_resume_analysis: {
    answer: "Upload your resume, and our AI will analyze it to generate personalized questions and identify areas where you might need more preparation based on your experience.",
  },

  // --- Troubleshooting & Tech Help ---
  troubleshooting: {
    question: "What technical issue are you facing?",
    options: [
      { id: "troubleshooting_audio_video", text: "Audio/Video Issues" },
      { id: "troubleshooting_performance", text: "Loading/Performance Problems" },
      { id: "troubleshooting_bug_report", text: "Report a Bug" },
      { id: "troubleshooting_compatibility", text: "Browser Compatibility" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  troubleshooting_audio_video: {
    answer: "Please ensure your microphone and camera permissions are enabled for PrepSphere in your browser settings. Check that no other applications are using them. If issues persist, try restarting your browser or computer.",
  },
  troubleshooting_performance: {
    answer: "If you're experiencing slow loading or performance issues, try clearing your browser's cache and cookies. Ensure you have a stable internet connection and try using an updated browser like Chrome, Firefox, or Edge.",
  },
  troubleshooting_bug_report: {
    answer: "To report a bug, please provide a detailed description of the issue, including steps to reproduce it, screenshots, and information about your browser and operating system. You can submit this through our 'Contact Support' form.",
  },
  troubleshooting_compatibility: {
    answer: "PrepSphere is optimized for modern web browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Ensure your browser is up-to-date for the best experience.",
  },

  // --- Partnerships & Other ---
  partnerships_other: {
    question: "What other inquiries do you have?",
    options: [
      { id: "partnerships_inquiry", text: "Partnership Opportunities" },
      { id: "partnerships_career", text: "Careers at PrepSphere" },
      { id: "partnerships_feedback", text: "General Feedback/Suggestions" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  partnerships_inquiry: {
    answer: "For all partnership inquiries, please email our business development team at partnerships@prepsphere.com with your proposal details.",
  },
  partnerships_career: {
    answer: "Interested in joining the PrepSphere team? Visit our 'Careers' page for current job openings and information on how to apply.",
  },
  partnerships_feedback: {
    answer: "We value your feedback! Please send your suggestions, comments, or general feedback to feedback@prepsphere.com. Your input helps us improve PrepSphere.",
  },

  // Go Back options for sub-levels
  back_to_account: {
    question: "What would you like to know about your account or billing?",
    options: [
      { id: "account_profile", text: "Profile Management" },
      { id: "account_subscription", text: "Subscription & Payments" },
      { id: "account_security", text: "Security & Privacy" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
    // --- Exam Prep & Study Help ---
  exam_prep: {
    question: "What would you like help with regarding exam preparation?",
    options: [
      { id: "exam_tips", text: "General Study Tips" },
      { id: "exam_time_management", text: "Time Management" },
      { id: "exam_resources", text: "Recommended Resources" },
      { id: "exam_stress", text: "Stress Management" },
      { id: "back_to_main", text: "← Back to Main Topics" }
    ],
  },
  exam_tips: {
    answer: "Effective study includes spaced repetition, active recall, practice tests, and summarizing concepts in your own words. Study consistently instead of cramming."
  },
  exam_time_management: {
    answer: "Try using the Pomodoro technique, weekly planning, and prioritizing tasks. Allocate more time to difficult topics and revise lighter topics frequently."
  },
  exam_resources: {
    answer: "PrepSphere offers curated mock tests, quizzes, and guided learning paths. You can also use resources like official documentation, YouTube channels, and standard textbooks."
  },
  exam_stress: {
    answer: "Manage exam stress through proper sleep, short breaks, breathing exercises, and staying consistent. Avoid last-minute pressure by planning ahead."
  },

  // --- Payments & Refund Policy ---
  payments_refunds: {
    question: "What do you want to know about payments or refunds?",
    options: [
      { id: "refund_policy", text: "Refund Policy Details" },
      { id: "payment_failed", text: "Payment Failed Issues" },
      { id: "invoice_help", text: "Invoice/Receipt Issues" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  refund_policy: {
    answer: "Refunds are available within 7 days of purchase if less than 20% of platform content has been used. Contact support with your registered email to initiate a refund request."
  },
  payment_failed: {
    answer: "If your payment failed, check your bank card details, ensure international transactions are enabled, or try another payment method. You can also retry after a few minutes."
  },
  invoice_help: {
    answer: "If you cannot access your invoice, visit Dashboard → Billing History. If it still doesn't appear, email support with your order ID."
  },

  // --- Courses & Learning Content ---
  learning_content: {
    question: "What would you like to explore about our learning content?",
    options: [
      { id: "course_availability", text: "Course Availability" },
      { id: "course_levels", text: "Course Difficulty Levels" },
      { id: "course_certificates", text: "Course Certificates" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  course_availability: {
    answer: "PrepSphere offers role-based interview prep, guided learning paths, coding exercises, and concept explainers. More courses are added regularly."
  },
  course_levels: {
    answer: "Courses come in Beginner, Intermediate, and Advanced levels. You can switch levels at any time based on your comfort."
  },
  course_certificates: {
    answer: "Certificates are provided after completing specific guided learning paths or performance challenges. These certificates showcase your progress and skills."
  },

  // --- Mobile App Support ---
  mobile_app: {
    question: "Need help with our mobile app?",
    options: [
      { id: "mobile_login_issue", text: "Login Issues" },
      { id: "mobile_notifications", text: "Fix Notifications" },
      { id: "mobile_sync", text: "Sync Issues" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  mobile_login_issue: {
    answer: "If you're unable to log in, ensure your credentials are correct and your app is updated. Try clearing cache or reinstalling the app."
  },
  mobile_notifications: {
    answer: "Allow notifications in your phone settings and enable alerts inside the app under Settings → Notifications."
  },
  mobile_sync: {
    answer: "If your progress is not syncing, check internet connection and ensure you're logged into the same account on all devices."
  },

  // --- Career Guidance & Resume Help ---
  career_guidance: {
    question: "How can we help with your career or resume?",
    options: [
      { id: "career_paths", text: "Career Paths Guidance" },
      { id: "resume_tips", text: "Resume Writing Tips" },
      { id: "job_search", text: "Job Search Advice" },
      { id: "back_to_main", text: "← Back to Main Topics" },
    ],
  },
  career_paths: {
    answer: "PrepSphere offers guidance for software roles, data science, product management, and more. Explore guided paths for structured learning."
  },
  resume_tips: {
    answer: "Keep resumes simple, highlight achievements with measurable impact, and tailor them for each job role. Avoid unnecessary details."
  },
  job_search: {
    answer: "Focus on strong LinkedIn presence, networking, consistent applications, and mock interview preparation to improve your chances."
  },

};