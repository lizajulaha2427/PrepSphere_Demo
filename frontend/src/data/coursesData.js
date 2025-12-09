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
        content: "Variables and Datatypes are foundational concepts present in virtually all programming languages. They are essential for storing, representing, and manipulating information within a program. A variable is essentially a container used to store a piece of data in a computer's memory. It acts as a named reference to a specific memory location, allowing programmers to access and change the stored data during the execution of a program. Datatypes classify the type of information a variable holds. They inform the compiler or interpreter how the programmer intends to use the data and how much memory space to allocate for it.",
        videoUrl: "https://www.youtube.com/embed/ORCuz7s5cCY?si=EvnLyh7hZYIf21_l"
      },
      {
        id: 2,
        title: "Functions",
        content: "Functions are self-contained blocks of code designed to perform a specific, related action. They are fundamental building blocks in almost every programming language and are crucial for structuring code, improving readability, and promoting code reuse.",
        videoUrl: "https://www.youtube.com/embed/P08Z_NC8GuY?si=vbO6d5Dx1-fjQADi"
      },
      {
        id: 3,
        title: "Async JavaScript",
        content: "Asynchronous JavaScript is a programming technique that allows the execution of long-running operations (such as fetching data from a server, file operations, or timers) without 'blocking' the main program thread. This results in highly responsive applications and efficient handling of concurrent tasks. JavaScript, being a single-threaded language, uses an internal mechanism called the Event Loop to manage these non-blocking behaviors.",
        videoUrl: "https://www.youtube.com/embed/zgt5oTD3rRc?si=-Fb3wWw7XcqdqKMr"
      },
      {
        id: 4,
        title: "DOM Manipulation",
        content: "DOM Manipulation is the process of using JavaScript (or other scripting languages) to dynamically select, access, and modify the structure, style, and content of a document (typically a web page). The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page as a tree structure of objects, where each piece of the document (elements, attributes, text) is a node or an object. ",
        videoUrl: "https://www.youtube.com/embed/uoII7VSDF3k?si=KPz3TpfI5RITbrPz"
      },
      {
        id: 5,
        title: "Modules",
        content: "Modules are an essential mechanism for organizing code into logical, reusable, and manageable units. They allow developers to break down large programs into smaller, independent files, each responsible for a specific set of functionalities.",
        videoUrl: "https://www.youtube.com/embed/FSRo41TaHFU?si=RvXAQ1gPVyiAlR6f"
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
        content: "The term 'components' is a broad concept used across many disciplines of technology and engineering to describe a distinguishable part of a larger system. A component is generally designed to be interchangeable, reusable, and encapsulate a specific function or set of functions.",
        videoUrl: "https://www.youtube.com/embed/S4VH8hddg8c?si=M5K8Z_XkgIskOVjH"
      },
      {
        id: 2,
        title: "Props & State",
        content: "In programming, particularly within the context of Front-End Development and UI frameworks like React, Vue, and Angular, Props and State are core concepts used to manage data within components and control how the user interface is rendered dynamically.They represent two distinct types of data that a component can use: external, immutable data (Props) and internal, mutable data (State).",
        videoUrl: "https://www.youtube.com/embed/xvm3X1oyTL8?si=8cl4URAW7GVrxCH3"
      },
      {
        id: 3,
        title: "Hooks",
        content: "In React, Hooks are special JavaScript functions introduced in version 16.8 that allow functional components to use features that were previously only available in class components, such as state and lifecycle methods. Hooks empower developers to:Manage component-specific state in functional components.Perform 'side effects' like data fetching or DOM manipulation.Reuse stateful logic across different components easily through custom hooks.",
        videoUrl: "https://www.youtube.com/embed/lI7IIOWM0Mo?si=Iyb0rQJUMj8SFL-R"
      },
      {
        id: 4,
        title: "Routing",
        content: "Routing is the process of selecting the most efficient path for data to travel from a source to a destination. This concept applies both to network infrastructure, where data packets move across the internet, and to software applications (particularly web development), where user requests are directed to the correct content or functions.",
        videoUrl: "https://www.youtube.com/embed/VJov5QWEKE4?si=HavYn81WGBKcP0IZ"
      },
      {
        id: 5,
        title: "Context API",
        content: "The Context API is a feature in front-end frameworks, most prominently React.js, designed to solve the problem of 'prop drilling.' Prop drilling occurs when data needs to be passed through several nested components from a common ancestor to a deeply nested descendant. The components in the middle of the hierarchy might not need the data themselves but merely act as conduits.The Context API provides a way to share data (like user authentication status, theme settings, or locale preferences) that can be considered global for a tree of React components, allowing data to be accessed by any component at any level without manually passing props down through every intermediate layer.",
        videoUrl: "https://www.youtube.com/embed/JQVBGtZMqgU?si=sf7H9FpG4cnzBBMw"
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
        content: "Python is a high-level, general-purpose programming language known for its clear, readable syntax (often compared to plain English), which emphasizes code readability and simplicity. Created by Guido van Rossum and first released in 1991, Python has become one of the most widely used languages in the world.",
        videoUrl: "https://www.youtube.com/embed/UrsmFxEIp5k?si=Cs-gvVa71AAgorAA"
      },
      {
        id: 2,
        title: "Functions",
        content: "Functions are self-contained blocks of code designed to perform a specific, related action. They are fundamental building blocks in almost every programming language and are crucial for structuring code, improving readability, and promoting code reuse.",
        videoUrl: "https://www.youtube.com/embed/P08Z_NC8GuY?si=mTD35faRGn4ARZgf"
      },
      {
        id: 3,
        title: "Object Oriented Programming",
        content: "Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of 'objects' rather than 'actions' or simple logic and functions. It is a fundamental approach used in many modern programming languages, including Python, Java, C++, and C#. OOP focuses on organizing software design around data and the procedures that manipulate that data, aiming to mimic how real-world objects interact. This methodology enhances modularity, reusability, and maintainability of code.",
        videoUrl: "https://www.youtube.com/embed/mlIUKyZIUUU?si=Txy0jWa4Ejp2Xi3q"
      },
      {
        id: 4,
        title: "Modules",
        content: "Modules are an essential mechanism for organizing code into logical, reusable, and manageable units. They allow developers to break down large programs into smaller, independent files, each responsible for a specific set of functionalities.",
        videoUrl: "https://www.youtube.com/embed/qtGUpQx0VWw?si=hb8Mj32Gii4qTxsq"
      },
      {
        id: 5,
        title: "File Handling",
        content: "File handling refers to the process of reading data from and writing data to permanent storage devices, typically hard disks or solid-state drives. It is how programs persist data between executions, as variables in memory are lost when the program ends.",
        videoUrl: "https://www.youtube.com/embed/eDBPlcWYses?si=IVAk0FfGWVQa_auK"
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
        content: "Java is a popular, object-oriented programming language and platform known for its 'Write Once, Run Anywhere' (WORA) capability, allowing code to run on any device with a Java Virtual Machine (JVM). It's a versatile, secure, and reliable language used for building everything from mobile apps (Android), web applications, enterprise software, to IoT devices and big data solutions, offering high productivity for developers.",
        videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34?si=n99tAWzHBilfBK-C"
      },
      {
        id: 2,
        title: "OOP Concepts",
        content: "OOP, or Object-Oriented Programming, is a programming model built around 'objects' that combine data (attributes) and functions (methods) to model real-world things, making code reusable, modular, and easier to manage through concepts like classes (blueprints), inheritance, polymorphism, and encapsulation, with 'I oop' also being Gen Z slang for surprise. ",
        videoUrl: "https://www.youtube.com/embed/Af3s3KsxStY?si=R1nljnmp3CHRUZT4"
      },
      {
        id: 3,
        title: "Collections Framework",
        content: "The Collections Framework in Java is a unified architecture located in the java.util package that provides a set of interfaces, implementations (classes), and algorithms for representing and manipulating groups of objects efficiently. Its primary advantages include reducing programming effort by providing ready-made data structures, increasing performance, and fostering software reuse by establishing standard interfaces for collections.",
        videoUrl: "https://www.youtube.com/embed/VE_AAUxTUCY?si=HAOuEOXbbaSpbA5z"
      },
      {
        id: 4,
        title: "Exception Handling",
        content: "Exception handling in programming is a structured mechanism used to manage runtime errors, or 'exceptions,' in a predictable and robust way, preventing a program from crashing abruptly. It separates normal program logic from error-handling logic, making code cleaner and more resilient. The core mechanism involves a combination of keywords: try, catch, finally, throw, and throws.",
        videoUrl: "https://www.youtube.com/embed/1XAfapkBQjk?si=8os9lxhkQpRzjOnO"
      },
      {
        id: 5,
        title: "Multithreading",
        content: "Multithreading is a programming concept that allows a single program or process to create and run multiple threads of execution concurrently. A thread is the smallest unit of execution that can be managed independently by a scheduler (typically the operating system). In a multithreaded application, the various threads share the same memory space and resources of the parent process but execute independently. This concurrency improves performance, responsiveness, and resource utilization in modern computing systems with multi-core processors.",
        videoUrl: "https://www.youtube.com/embed/YDH7f9dTXAs?si=iRNQHliN9fbVESP2"
      }
    ],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5VDuuL8leFQgEI_uumj2j1Aqj_TsYDj6rw&s"
  }
];
