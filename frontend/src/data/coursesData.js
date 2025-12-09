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
        content: "Express.js, often referred to simply as Express, is a minimal and flexible Node.js web application framework designed to streamline the development of robust web applications and APIs. It provides a powerful set of features for handling HTTP requests and responses, including a robust routing system that allows developers to define specific actions for different URL patterns and HTTP methods. Express's lightweight and unopinionated nature provides developers with the freedom to structure their applications as they see fit, while its extensive middleware system enables the easy integration of functionalities like parsing requests, managing sessions, and implementing authentication. This combination of flexibility, ease of use, and a rich ecosystem of third-party modules makes Express a popular choice for building scalable and high-performance server-side applications within the Node.js environment.",
        videoUrl: "https://www.youtube.com/embed/SccSCuHhOw0?si=Exh5wuFszZ3psN7G"
      },
      {
        id: 3,
        title: "Middlewares",
        content: "Middleware is a layer of software that functions as a bridge, or software glue, connecting disparate applications, systems, and databases so they can communicate and exchange data efficiently. It sits between the operating system and the applications that run on it, abstracting the complexity of underlying networks, hardware, and different programming languages. By providing common services like data management, security, and messaging, middleware allows developers to focus on core business logic rather than building custom integrations for every interaction, thus simplifying application development and modernization",
        videoUrl: "https://www.youtube.com/embed/n2c0mf1sza4?si=pjkEDLj8jvI5KTh6"
      },
      {
        id: 4,
        title: "Authentication",
        content: "Authentication is the critical process of verifying a user's or system's identity before granting access to digital resources. It serves as the primary line of defense in cybersecurity, ensuring that only legitimate entities with valid credentials can interact with sensitive systems and data. This process typically involves a user providing an identifier, such as a username, and then offering a form of proof that can be validated by the system against a stored record",
        videoUrl: "https://www.youtube.com/embed/19RpMEonSu8?si=OCbuSvKHrgo8h9Er"
      },
      {
        id: 5,
        title: "MongoDB Integration",
        content: "MongoDB is a popular, open-source NoSQL database management system that utilizes a document-oriented data model, storing data in flexible, JSON-like documents. This approach contrasts with traditional relational databases that rely on tables and rows, offering greater flexibility in handling diverse and evolving data structures. MongoDB's document model allows for easy mapping to objects in application code, simplifying development and enabling agile methodologies. Key features include dynamic schemas, powerful ad hoc queries, rich indexing capabilities, and real-time aggregation for data analysis. Designed for scalability and high availability, MongoDB incorporates native sharding and built-in replication, making it suitable for modern, distributed applications and handling large volumes of data, such as in IoT and real-time analytics scenarios.",
        videoUrl: "https://www.youtube.com/embed/c2M-rlkkT5o?si=yt3haQeP_XSWqtRt"
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
        content: "Frontend and backend represent the two fundamental components of any web application, working in tandem to deliver a complete user experience. The frontend, also known as client-side development, focuses on everything a user directly sees and interacts with in their browser, including the visual layout, interactive elements like buttons and forms, and dynamic content. It utilizes languages such as HTML for structure, CSS for styling, and JavaScript for interactivity. In contrast, the backend, or server-side development, operates behind the scenes, handling data storage, processing requests, and managing application logic. This involves server-side languages like Python, Java, or Node.js, interacting with databases (e.g., SQL, MongoDB) to store and retrieve information, and building APIs to facilitate communication with the frontend, ultimately ensuring the application's functionality and performance.",
        videoUrl: "https://www.youtube.com/embed/vP3TRAsjZss?si=DUUiP2UlKBAAHumr"
      },
      {
        id: 2,
        title: "REST API Design",
        content: "REST API design adheres to the Representational State Transfer (REST) architectural style, emphasizing a stateless, client-server interaction where resources are identified by URIs and manipulated using standard HTTP methods (GET, POST, PUT, DELETE). A well-designed REST API prioritizes a clear and consistent uniform interface, ensuring resources are easily discoverable and their representations are communicated effectively, typically in formats like JSON. This approach promotes scalability, flexibility, and loose coupling between client and server, allowing independent evolution of components while maintaining a predictable and intuitive interaction model for developers. Key principles include statelessness, where each request from client to server contains all necessary information, and the use of hypermedia as the engine of application state (HATEOAS), guiding clients through available actions and transitions.",
        videoUrl: "https://www.youtube.com/embed/pJ83mmqcvoQ?si=tc5WoXQ-IAMb8fnl"
      },
      {
        id: 3,
        title: "Database Modeling",
        content: "Database modeling is the process of creating a visual representation or blueprint of a database, outlining its structure, the types of data it will store, and the relationships between different data elements. This systematic approach ensures that data is organized efficiently, promoting data integrity, consistency, and ease of retrieval. Data models, which can be conceptual, logical, or physical, translate business requirements into technical specifications, guiding the design and implementation of database systems. By defining entities, attributes, and relationships, database modeling facilitates clear communication among stakeholders, reduces development errors, and ultimately leads to more robust, scalable, and maintainable database solutions.",
        videoUrl: "https://www.youtube.com/embed/TUcPS6dsWx4?si=Fa9JcevwXRUD7pED"
      },
      {
        id: 4,
        title: "Connecting Frontend & Backend",
        content: "Connecting the frontend and backend is a fundamental aspect of building dynamic web applications, enabling the user interface (frontend) to interact with the server-side logic and data storage (backend). This connection is primarily facilitated through Application Programming Interfaces (APIs), most commonly RESTful APIs, which define a set of rules for how the frontend can request and receive data from the backend. When a user interacts with the frontend, such as submitting a form or clicking a button, the frontend sends an HTTP request (e.g., GET, POST, PUT, DELETE) to a specific API endpoint on the backend. The backend then processes this request, potentially interacting with a database, and sends an HTTP response containing data or a confirmation back to the frontend, which then updates the user interface accordingly. This seamless communication ensures that applications can be both visually appealing and functionally robust, delivering a comprehensive user experience",
        videoUrl: "https://www.youtube.com/embed/fFHyqhmnVfs?si=MNPY6KoB_1GQAfZ2"
      },
      {
        id: 5,
        title: "Deployment",
        content: "Deployment refers to the strategic positioning of people and equipment for a specific mission or purpose, most commonly used in military contexts for sending troops into duty. However, the term is also used in other fields, such as software development and corporate settings.",
        videoUrl: "https://www.youtube.com/embed/9srnyNC1e_o?si=w2kdUA8AnIMHoQFM"
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
        content: "An array is a fundamental linear data structure in computer programming used to store a collection of elements, all of the same data type, in contiguous memory locations. This contiguous storage allows for efficient, direct (or random) access to any element using a numerical index, which typically starts at zero. By using a single variable name for multiple related data items (e.g., storing student marks instead of using separate variables for each one), arrays simplify data management and make code more concise and less error-prone, especially when dealing with large datasets",
        videoUrl: "https://www.youtube.com/embed/FosoYnhpbHA?si=z1L8qE2Lmkd3LTb0"
      },
      {
        id: 2,
        title: "Linked List",
        content: "A linked list is a linear data structure composed of a sequence of nodes, where each node contains data and a pointer (or reference) to the next node in the sequence. Unlike arrays, linked list elements are not stored contiguously in memory; instead, they are connected through these pointers, forming a chain-like structure. The first node in a linked list is called the head, and it serves as the entry point to traverse the list. The last node typically points to a null value, signifying the end of the list. This dynamic nature allows for efficient insertion and deletion of elements, as only the pointers of adjacent nodes need to be updated, rather than shifting elements as in arrays. However, random access to elements is not efficient in linked lists, as traversal from the head is required to reach a specific node. Despite this, linked lists are fundamental in computer science and are used to implement other data structures like stacks and queues, as well as in various real-world applications such as managing web browser history or creating music playlists.",
        videoUrl: "https://www.youtube.com/embed/oAja8-Ulz6o?si=lE5EGAFye1lvaF6k"
      },
      {
        id: 3,
        title: "Stacks & Queues",
        content: "Stacks and queues are fundamental linear data structures used in computer science for organizing and managing data, but they operate on opposing principles. A stack operates on the Last-In, First-Out (LIFO) principle, much like a pile of plates where the last plate placed on top is the first one removed. Elements are added using a push operation and removed using a pop operation, both from the same end, called the top. Stacks are commonly applied in scenarios requiring reversal or backtracking, such as managing function calls in a program's call stack, implementing undo functionality in software, and evaluating mathematical expressions. In contrast, a queue follows the First-In, First-Out (FIFO) principle, mirroring a line of people waiting for a service, where the first person in line is the first one to be served. Elements are added to the back (or rear) of the queue via an enqueue operation and removed from the front using a dequeue operation. Queues are ideal for situations where elements must be processed in the order they arrive, such as CPU task scheduling, handling print jobs, or implementing breadth-first search algorithms in graph traversal. Both data structures can be implemented using arrays or linked lists, and both offer efficient, constant-time (O(1)) basic operations when managed correctly",
        videoUrl: "https://www.youtube.com/embed/rHQI4mrJ3cg?si=fHzBo2f9TfkTHKlX"
      },
      {
        id: 4,
        title: "Trees",
        content: "A binary tree is a fundamental hierarchical data structure where each node has at most two children, a left child and a right child, making it efficient for organizing data for faster searching, insertion, and deletion. Starting from a single root node, it branches downwards, with nodes either having zero, one, or two children, forming subtrees that represent data relationships, like in file systems or decision processes. Variations such as Binary Search Trees (BSTs) keep data sorted for optimized lookups, while AVL trees maintain balance, making them crucial for algorithms.",
        videoUrl: "https://www.youtube.com/embed/-DzowlcaUmE?si=l-Vv5PVPuVkMJq0N"
      },
      {
        id: 5,
        title: "Dynamic Programming",
        content: "Dynamic programming (DP) is a powerful algorithmic technique used to solve complex problems by breaking them down into smaller, overlapping subproblems and storing their solutions to avoid redundant computations. This approach significantly improves efficiency, often reducing exponential time complexities to polynomial time, particularly for optimization and counting problems",
        videoUrl: "https://www.youtube.com/embed/Z8USYkiRvZw?si=ODL2IVCCAtyTYQOy"
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
        content: "System design is the process of defining a system's architecture, components, interfaces, and data flow to meet specific functional and non-functional requirements, essentially creating a blueprint for a software system that ensures scalability, performance, reliability, and efficiency, much like an architect plans a building. It bridges high-level concepts with concrete implementation, involving choices about databases, load balancers, APIs, and overall structure (like monolith vs. microservices) to handle real-world complexities",
        videoUrl: "https://www.youtube.com/embed/lFeYU31TnQ8?si=kKTglmq_iTRtO3jR"
      },
      {
        id: 2,
        title: "Load Balancing",
        content: "Load balancing is the process of distributing network traffic or computational tasks across multiple servers/resources to optimize usage, maximize throughput, minimize response time, and ensure high availability by preventing any single resource from becoming a bottleneck",
        videoUrl: "https://www.youtube.com/embed/K0Ta65OqQkY?si=uKWneShdT1OnoJsE"
      },
      {
        id: 3,
        title: "Caching",
        content: "Caching - System Design Concept - GeeksforGeeksCaching is storing copies of frequently used data in a temporary, high-speed storage (a cache) for faster access, reducing load times and strain on primary data sources like databases or servers by serving data from this closer, quicker location instead of fetching it repeatedly from the original, slower source",
        videoUrl: "https://www.youtube.com/embed/rsHq4NPDEs0?si=Fii5o7laLDbZWnRW"
      },
      {
        id: 4,
        title: "Database Sharding",
        content: "Database sharding is a technique that splits a large database into smaller, more manageable shards, which are then distributed across multiple servers. This horizontal partitioning improves performance by reducing the amount of data on each server, increases storage capacity, and enhances availability by spreading the load. Each shard contains a subset of the data but shares the same schema as the original database",
        videoUrl: "https://www.youtube.com/embed/be6PLMKKSto?si=8CrTQaMmftCG26gj"
      },
      {
        id: 5,
        title: "Scalable Architectures",
        content: "A scalable architecture is a system designed to handle increasing workloads by efficiently adding resources without performance loss, using strategies like horizontal scaling (more machines) or vertical scaling (bigger machines). Key principles involve loose coupling, statelessness, and asynchronous processing (like message queues) to avoid bottlenecks, common in designs like microservices (Netflix) or cloud autoscaling, ensuring performance during growth.",
        videoUrl: "https://www.youtube.com/embed/ejofP2VKu-4?si=T_A_hpVvUwTx5zuo"
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
