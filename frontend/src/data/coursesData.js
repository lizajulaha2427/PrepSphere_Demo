export const courses = [
  {
    id: "frontend",
    title: "Frontend Development",
    sections: [
      {
        id: 1,
        title: "Introduction to HTML",
        content: `HTML (HyperText Markup Language) is the standard language for creating and structuring web pages using tags and elements. It defines how content like text, images, and links appear in a browser. It is a markup language, not a programming language. It annotates text to define how it is structured and displayed by web browsers. HTML is a static language, meaning it does not inherently provide interactive features but can be combined with CSS for styling and JavaScript for interactivity.`
,
        videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU"
      },
      {
        id: 2,
        title: "CSS Basics",
        content: "CSS, which stands for Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in a markup language like HTML or XML. It allows web developers to control the visual appearance of web pages, including elements such as colors, fonts, spacing, layout, and responsiveness across different devices",
        videoUrl: "https://www.youtube.com/embed/OEV8gMkCHXQ"
      },
      {
        id: 3,
        title: "JavaScript Intro",
        content: "JavaScript is a versatile, high-level, and dynamically typed programming language primarily known for bringing interactivity to web pages. It enables developers to create dynamic content, implement features like form validation, manipulate images, and build complex web applications that respond to user actions. While initially designed for client-side scripting within web browsers, its capabilities have expanded significantly with the advent of Node.js, allowing for server-side development and a wide range of other applications. JavaScript integrates seamlessly with HTML and CSS, forming the core technologies for modern web development, and its extensive ecosystem of libraries and frameworks further enhances its power and efficiency for building robust and engaging digital experiences.",
        videoUrl: "https://www.youtube.com/embed/ajdRvxDWH4w?si=5geSELlvXpbPKJNm"
      },{
        id: 4,
        title: "React Fundamentals",
        content: "React, or React.js, is a free and open-source JavaScript library developed and maintained by Meta (formerly Facebook) and a community of developers and companies. Its primary purpose is to facilitate the creation of user interfaces (UIs) for web and mobile applications, emphasizing a component-based architecture. This means UIs are built from independent, reusable components, each encapsulating its own logic and appearance, promoting modularity and maintainability. React utilizes JSX, a syntax extension that allows developers to write HTML-like code directly within JavaScript, enhancing readability and developer experience. It also employs a virtual DOM, an in-memory representation of the UI, which React uses to efficiently update the actual DOM by only rendering the necessary changes, leading to optimized performance. This combination of component-based design, JSX, and the virtual DOM makes React a powerful and popular choice for building modern, dynamic web applications.",
        videoUrl: "https://www.youtube.com/embed/RGKi6LSPDLU?si=zY6mPhYDZThvQ0E2"
      },{
        id: 5,
        title: "Responsive Design",
        content: "Responsiveness refers to the ability to react quickly, effectively, and appropriately to stimuli, demands, or changing conditions. In a professional context, this translates to prompt attentiveness and timely communication, demonstrating respect for others' time and helping to build trust and strong relationships. It is a critical component of professional success, distinguishing reliable individuals and organizations from those who appear dismissive or uninvested. In public and private sectors, responsiveness has evolved from mere compliance with formalized procedures to a proactive, citizen- or stakeholder-centered approach that involves understanding expectations and engaging in collaborative strategies to achieve shared goals",
        videoUrl: "https://www.youtube.com/embed/J_r6hBo9lO4?si=9HtaRMICoEDbgLq4"
      }
    ],
    image:"https://media.licdn.com/dms/image/v2/D5612AQEeG7oJTTK1Ew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1680514548971?e=2147483647&v=beta&t=ZflFgTlsj2QryThKQ9JiTbBZ3SyYxPoPY2NLv8-Aa3o"
  },
  {
    id: "backend",
    title: "Backend Development",
    sections: [
      {
        id: 1,
        title: "Node.js Basics",
        content: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine, enabling developers to execute JavaScript code outside of a web browser. This allows for server-side development using JavaScript, a language traditionally associated with front-end web development. Node.js is renowned for its non-blocking, event-driven architecture, making it highly efficient for handling numerous concurrent connections and I/O-intensive operations. It is widely utilized for building scalable network applications, real-time applications like chat rooms and online games, APIs, microservices, and various command-line tools, leveraging its robust ecosystem of open-source packages available through npm (Node Package Manager).",
        videoUrl: "https://www.youtube.com/embed/ooBxSg1Cl1w?si=LGREiJQd-CD-tqEf"
      },
      {
        id: 2,
        title: "Express.js Routing",
        content: "Write your Express.js content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Middlewares",
        content: "Write your middleware content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Authentication",
        content: "Write your authentication content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "MongoDB Integration",
        content: "Write your MongoDB content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://img.freepik.com/premium-vector/back-end-developer-typographic-header-software-development_277904-18665.jpg"
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
     sections: [
      {
        id: 1,
        title: "Frontend + Backend Overview",
        content: "Write your overview content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "REST API Design",
        content: "Write your API design content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Database Modeling",
        content: "Write your DB modeling content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Connecting Frontend & Backend",
        content: "Write your integration content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "Deployment",
        content: "Write your deployment content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    sections: [
      {
        id: 1,
        title: "Arrays",
        content: "Write your arrays content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "Linked List",
        content: "Write your linked list content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Stacks & Queues",
        content: "Write your stacks & queues content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Trees",
        content: "Write your trees content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "Dynamic Programming",
        content: "Write your DP content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://cdn.nishtyainfotech.com/content/learnings/data/blog/banner/68dbc545ace439.34680888.webp"
  },
  {
    id: "systemdesign",
    title: "System Design",
    sections: [
      {
        id: 1,
        title: "What is System Design?",
        content: "Write your intro content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "Load Balancing",
        content: "Write your load balancing content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Caching",
        content: "Write your caching content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Database Sharding",
        content: "Write your sharding content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "Scalable Architectures",
        content: "Write your scaling content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://www.designgurus.io/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fdesigngurus-prod.appspot.com%2Fo%2Farticle%252F650d5cc626b0f89afbc13a5a%252Fimg%3A1cdf2c5-2a0e-d78-66c5-fb120bde83e4.jpg%3Fgeneration%3D1755244408178576%26alt%3Dmedia&w=3840&q=75&dpl=dpl_5pX1iTBZonadEdnkJS5ET2Kki2K8"
  },
  {
    id: "javascript",
    title: "JavaScript Mastery",
    sections: [
      {
        id: 1,
        title: "Variables & Datatypes",
        content: "Write your JS variables content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "Functions",
        content: "Write your JS functions content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Async JavaScript",
        content: "Write your async JS content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "DOM Manipulation",
        content: "Write your DOM content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "Modules",
        content: "Write your JS modules content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto"
  },
  {
    id: "react",
    title: "React",
    sections: [
      {
        id: 1,
        title: "Components",
        content: "Write your components content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "Props & State",
        content: "Write your props & state content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Hooks",
        content: "Write your hooks content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Routing",
        content: "Write your routing content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "Context API",
        content: "Write your context API content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://kinsta.com/wp-content/uploads/2023/05/install-react.jpg"
  },
  {
    id: "python",
    title: "Python",
    sections: [
      {
        id: 1,
        title: "Python Basics",
        content: "Write your Python basics content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "Functions",
        content: "Write your Python functions content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Object Oriented Programming",
        content: "Write your Python OOPs content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Modules",
        content: "Write your Python modules content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "File Handling",
        content: "Write your Python file handling content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://bitskingdom.sfo3.cdn.digitaloceanspaces.com/2024/09/Why-Python-Heres-Why-1024x576.webp"
  },
  {
    id: "java",
    title: "Java",
    sections: [
      {
        id: 1,
        title: "Java Basics",
        content: "Write your Java basics content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 2,
        title: "OOP Concepts",
        content: "Write your Java OOPs content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 3,
        title: "Collections Framework",
        content: "Write your collections content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 4,
        title: "Exception Handling",
        content: "Write your exceptions content here...",
        videoUrl: "YOUR_VIDEO_URL"
      },
      {
        id: 5,
        title: "Multithreading",
        content: "Write your multithreading content here...",
        videoUrl: "YOUR_VIDEO_URL"
      }
    ],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5VDuuL8leFQgEI_uumj2j1Aqj_TsYDj6rw&s"
  }
];
