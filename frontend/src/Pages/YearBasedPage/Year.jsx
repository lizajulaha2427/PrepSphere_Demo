import React, { useState } from 'react';
import { FileText, ExternalLink, Video, FileCode} from 'lucide-react';

const CSStudentHub = () => {
  const [activeYear, setActiveYear] = useState('year1');
  const [darkMode] = useState(false);

  // Theme colors
  const theme = {
    light: {
      bg: '#FFFFFF',
      cardBg: '#FFFFFF',
      headerBg: '#FFFFFF',
      text: '#3A3A3A',
      textSecondary: '#666',
      border: '#E5E5E5',
      sectionBg: '#FFFFFF',
      sectionHeaderBg: '#FAFAFA',
      footerBg: '#3A3A3A',
      footerText: '#FFFFFF',
      accent: '#ffd56c'
      
    },
    dark: {
      bg: '#1A1A1A',
      cardBg: '#2D2D2D',
      headerBg: '#2D2D2D',
      text: '#FFFFFF',
      textSecondary: '#B0B0B0',
      border: '#404040',
      sectionBg: '#2D2D2D',
      sectionHeaderBg: '#3A3A3A',
      footerBg: '#1A1A1A',
      footerText: '#FFFFFF',
      accent: '#E0C06A'
    }
  };

  const currentTheme = darkMode ? theme.dark : theme.light;


  const yearData = {
    year1: {
      title: "1st Year - Foundation",
      subtitle: "Building Strong Programming Fundamentals",
      materials: [
        { 
          subject: "Programming Fundamentals", 
          topics: ["Variables & Data Types", "Loops & Conditionals", "Functions"],
          resources: [
            { type: "pdf", title: "C Programming Complete Guide", url: "https://www.learn-c.org/", icon: <FileText size={16} /> },
            { type: "video", title: "Programming Basics Video Series", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0", icon: <Video size={16} /> },
            { type: "code", title: "Practice Problems Set 1", url: "https://www.hackerrank.com/domains/c", icon: <FileCode size={16} /> },
            { type: "pdf", title: "Data Types Cheat Sheet", url: "https://www.programiz.com/c-programming/c-data-types", icon: <FileText size={16} /> },
            { type: "external", title: "Online Compiler", url: "https://www.onlinegdb.com/online_c_compiler", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "Mathematics for CS", 
          topics: ["Discrete Math", "Linear Algebra", "Statistics"],
          resources: [
            { type: "pdf", title: "Discrete Mathematics Handbook", url: "https://www.tutorialspoint.com/discrete_mathematics/index.htm", icon: <FileText size={16} /> },
            { type: "video", title: "Linear Algebra Lectures", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", icon: <Video size={16} /> },
            { type: "pdf", title: "Statistics Notes", url: "https://www.khanacademy.org/math/statistics-probability", icon: <FileText size={16} /> },
            { type: "external", title: "Math Problem Solver", url: "https://www.wolframalpha.com/", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "Computer Systems", 
          topics: ["Computer Architecture", "Operating Systems Basics"],
          resources: [
            { type: "pdf", title: "Computer Architecture Textbook", url: "https://www.nand2tetris.org/", icon: <FileText size={16} /> },
            { type: "video", title: "How Computers Work", url: "https://www.youtube.com/watch?v=AkFi90lZmXA", icon: <Video size={16} /> },
            { type: "pdf", title: "OS Fundamentals Guide", url: "https://www.tutorialspoint.com/operating_system/index.htm", icon: <FileText size={16} /> }
          ]
        }
      ]
    },
    year2: {
      title: "Second Year - Core Concepts",
      subtitle: "Data Structures, Algorithms & System Design",
      materials: [
        { 
          subject: "Data Structures & Algorithms", 
          topics: ["Arrays, Linked Lists", "Trees & Graphs", "Sorting & Searching"],
          resources: [
            { type: "pdf", title: "DSA Complete Reference", url: "https://www.geeksforgeeks.org/data-structures/", icon: <FileText size={16} /> },
            { type: "video", title: "Algorithm Visualization Videos", url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O", icon: <Video size={16} /> },
            { type: "code", title: "DSA Code Templates", url: "https://github.com/TheAlgorithms", icon: <FileCode size={16} /> },
            { type: "external", title: "LeetCode Practice", url: "https://leetcode.com/problemset/all/", icon: <ExternalLink size={16} /> },
            { type: "pdf", title: "Time Complexity Cheat Sheet", url: "https://www.bigocheatsheet.com/", icon: <FileText size={16} /> }
          ]
        },
        { 
          subject: "Database Systems", 
          topics: ["SQL", "Database Design", "Normalization"],
          resources: [
            { type: "pdf", title: "Database Systems Textbook", url: "https://www.db-book.com/", icon: <FileText size={16} /> },
            { type: "video", title: "SQL Tutorial Series", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY", icon: <Video size={16} /> },
            { type: "code", title: "SQL Practice Queries", url: "https://www.w3schools.com/sql/", icon: <FileCode size={16} /> },
            { type: "external", title: "Online SQL Playground", url: "https://www.w3schools.com/sql/trysql.asp", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "Web Development", 
          topics: ["HTML/CSS", "JavaScript", "React Basics"],
          resources: [
            { type: "pdf", title: "Web Development Guide", url: "https://developer.mozilla.org/en-US/docs/Learn", icon: <FileText size={16} /> },
            { type: "video", title: "Full Stack Web Course", url: "https://www.youtube.com/watch?v=nu_pCVPKzTk", icon: <Video size={16} /> },
            { type: "code", title: "Project Templates", url: "https://github.com/microsoft/Web-Dev-For-Beginners", icon: <FileCode size={16} /> },
            { type: "external", title: "CodePen Examples", url: "https://codepen.io/", icon: <ExternalLink size={16} /> },
            { type: "pdf", title: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", icon: <FileText size={16} /> }
          ]
        }
      ]
    },
    year3: {
      title: "Third Year - Advanced Topics",
      subtitle: "Specialization, Networks & Advanced Software Engineering",
      materials: [
        { 
          subject: "Computer Networks", 
          topics: ["TCP/IP", "Network Protocols", "Security Fundamentals"],
          resources: [
            { type: "pdf", title: "Computer Networks Textbook", url: "https://www.tutorialspoint.com/data_communication_computer_network/index.htm", icon: <FileText size={16} /> },
            { type: "video", title: "Network Protocols Explained", url: "https://www.youtube.com/watch?v=keeqnciDVOo", icon: <Video size={16} /> },
            { type: "code", title: "Network Programming Examples", url: "https://github.com/networknt/light-example-4j", icon: <FileCode size={16} /> },
            { type: "external", title: "Wireshark Tutorial", url: "https://www.wireshark.org/docs/wsug_html_chunked/", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "Operating Systems", 
          topics: ["Process Management", "Memory Management", "File Systems"],
          resources: [
            { type: "pdf", title: "Operating Systems Concepts", url: "https://www.os-book.com/OS10/", icon: <FileText size={16} /> },
            { type: "video", title: "OS Internals Video Course", url: "https://www.youtube.com/watch?v=26QPDBe-NB8&list=PLblh5JKOoLUJpzDrDSu7f3h43698E3B8g", icon: <Video size={16} /> },
            { type: "code", title: "System Programming Code", url: "https://github.com/remzi-arpacidusseau/ostep-code", icon: <FileCode size={16} /> },
            { type: "pdf", title: "Process Scheduling Notes", url: "https://www.studytonight.com/operating-system/cpu-scheduling", icon: <FileText size={16} /> },
            { type: "external", title: "Linux Commands Reference", url: "https://ss64.com/bash/", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "Machine Learning", 
          topics: ["Supervised Learning", "Neural Networks", "Model Evaluation"],
          resources: [
            { type: "pdf", title: "Machine Learning Handbook", url: "https://www.statlearning.com/", icon: <FileText size={16} /> },
            { type: "video", title: "ML Algorithm Tutorials", url: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", icon: <Video size={16} /> },
            { type: "code", title: "Python ML Examples", url: "https://github.com/scikit-learn/scikit-learn", icon: <FileCode size={16} /> },
            { type: "external", title: "Kaggle Datasets", url: "https://www.kaggle.com/datasets", icon: <ExternalLink size={16} /> },
            { type: "pdf", title: "Statistics for ML", url: "https://www.khanacademy.org/math/statistics-probability", icon: <FileText size={16} /> }
          ]
        },
        { 
          subject: "Software Architecture", 
          topics: ["Design Patterns", "Microservices", "API Design"],
          resources: [
            { type: "pdf", title: "Software Design Patterns", url: "https://refactoring.guru/design-patterns", icon: <FileText size={16} /> },
            { type: "video", title: "System Architecture Course", url: "https://www.youtube.com/watch?v=lTkL1oIMiaU", icon: <Video size={16} /> },
            { type: "code", title: "Design Pattern Examples", url: "https://github.com/kamranahmedse/design-patterns-for-humans", icon: <FileCode size={16} /> },
            { type: "external", title: "API Design Best Practices", url: "https://github.com/microsoft/api-guidelines", icon: <ExternalLink size={16} /> }
          ]
        }
      ]
    },
    year4: {
      title: "Fourth Year - Specialization & Career Prep",
      subtitle: "Industry Projects, Advanced Specialization & Interview Preparation",
      materials: [
        { 
          subject: "Advanced Algorithms", 
          topics: ["Dynamic Programming", "Graph Algorithms", "Optimization"],
          resources: [
            { type: "pdf", title: "Advanced Algorithms Textbook", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/", icon: <FileText size={16} /> },
            { type: "video", title: "Competitive Programming Course", url: "https://www.youtube.com/watch?v=ueNT-w7Oluw&list=PLMCXHnjXnTnto1pZVvH7rbZ9W5neZ7Yhc", icon: <Video size={16} /> },
            { type: "code", title: "Algorithm Implementation", url: "https://github.com/keon/algorithms", icon: <FileCode size={16} /> },
            { type: "external", title: "HackerRank Challenges", url: "https://www.hackerrank.com/domains/algorithms", icon: <ExternalLink size={16} /> },
            { type: "pdf", title: "Interview Problems Collection", url: "https://www.crackingthecodinginterview.com/", icon: <FileText size={16} /> }
          ]
        },
        { 
          subject: "System Design", 
          topics: ["Scalability", "Load Balancing", "Caching Strategies"],
          resources: [
            { type: "pdf", title: "System Design Interview Guide", url: "https://github.com/donnemartin/system-design-primer", icon: <FileText size={16} /> },
            { type: "video", title: "Large Scale Systems Course", url: "https://www.youtube.com/watch?v=ZgdS0EUmn70&list=PL73KFetZlkJSZ9vTDSJ1swZhe6CIYkqTL", icon: <Video size={16} /> },
            { type: "code", title: "System Design Examples", url: "https://github.com/karanpratapsingh/system-design", icon: <FileCode size={16} /> },
            { type: "external", title: "High Scalability Blog", url: "http://highscalability.com/", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "Software Testing", 
          topics: ["Unit Testing", "Integration Testing", "Test Automation"],
          resources: [
            { type: "pdf", title: "Software Testing Guide", url: "https://www.guru99.com/software-testing.html", icon: <FileText size={16} /> },
            { type: "video", title: "Test Automation Course", url: "https://www.youtube.com/watch?v=E2bjaj0ZuuQ", icon: <Video size={16} /> },
            { type: "code", title: "Testing Frameworks Examples", url: "https://github.com/microsoft/playwright", icon: <FileCode size={16} /> },
            { type: "external", title: "Selenium Documentation", url: "https://selenium-python.readthedocs.io/", icon: <ExternalLink size={16} /> }
          ]
        },
        { 
          subject: "DevOps & Cloud", 
          topics: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD"],
          resources: [
            { type: "pdf", title: "DevOps Handbook", url: "https://docs.docker.com/get-started/", icon: <FileText size={16} /> },
            { type: "video", title: "Cloud Computing Course", url: "https://www.youtube.com/watch?v=3hLmDS179YE", icon: <Video size={16} /> },
            { type: "code", title: "Docker & K8s Examples", url: "https://github.com/docker/labs", icon: <FileCode size={16} /> },
            { type: "external", title: "AWS Free Tier", url: "https://aws.amazon.com/free/", icon: <ExternalLink size={16} /> },
            { type: "pdf", title: "CI/CD Pipeline Guide", url: "https://docs.github.com/en/actions", icon: <FileText size={16} /> }
          ]
        }
      ]
    }
  };

  const currentYear = yearData[activeYear];

  const getResourceTypeColor = (type) => {
    if (darkMode) {
      switch(type) {
        case 'pdf': return '#F87171';
        case 'video': return '#A78BFA';
        case 'code': return '#34D399';
        case 'external': return '#60A5FA';
        default: return '#9CA3AF';
      }
    } else {
      switch(type) {
        case 'pdf': return '#DC2626';
        case 'video': return '#7C3AED';
        case 'code': return '#059669';
        case 'external': return '#2563EB';
        default: return '#6B7280';
      }
    }
  };

  const getResourceTypeBg = (type) => {
    if (darkMode) {
      switch(type) {
        case 'pdf': return '#3A1A1A';
        case 'video': return '#2D1A3D';
        case 'code': return '#1A3A26';
        case 'external': return '#1A2640';
        default: return '#333333';
      }
    } else {
      switch(type) {
        case 'pdf': return '#fff8e8';
        case 'video': return '#fff8e8';
        case 'code': return '#fff8e8';
        case 'external': return '#fff8e8';
        default: return '#fff8e8';
      }
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: currentTheme.bg, 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      transition: 'background-color 0.3s ease'   }}>
        
      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '4rem',
          fontWeight: '700',
          color: currentTheme.text,
          marginBottom: '1rem',
          lineHeight: '1.2',
          transition: 'color 0.3s ease'
        }}>
          Access Learning Resources by
          <br />
          <span style={{ color: currentTheme.accent }}>Academic Year</span>
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: currentTheme.textSecondary,
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: '1.6',
          transition: 'color 0.3s ease',
          fontWeight: 'bold'
        }}>
          Find organized study materials, practice problems, and learning resources for each year of your academic journey.
        </p>
      </section>

      {/* Year Selection Tabs */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
        
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: currentTheme.cardBg,
          borderRadius: '12px',
          padding: '0.5rem',
          marginBottom: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          transition: 'background-color 0.3s ease'
        }}>
          {Object.entries(yearData).map(([key, year]) => (
            <button
              key={key}
              onClick={() => setActiveYear(key)}
              style={{
                flex: 1,
                padding: '1rem',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: activeYear === key ? currentTheme.accent : 'transparent',
                color: activeYear === key ? '#3A3A3A' : currentTheme.textSecondary,
                fontWeight: activeYear === key ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {year.title}
            </button>
          ))}
        </div>

        {/* Year Content with Resources */}
        <div style={{
          backgroundColor: currentTheme.cardBg,
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          marginBottom: '3rem',
          transition: 'background-color 0.3s ease'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: currentTheme.text,
              margin: 0,
              marginBottom: '0.5rem',
              transition: 'color 0.3s ease'
            }}>
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: currentTheme.textSecondary,
              margin: 0,
              transition: 'color 0.3s ease'
            }}>
            </p>
          </div>

          {/* Subjects with Resources */}
          <div style={{ display: 'grid', gap: '2rem' }}>
            {currentYear.materials.map((material, index) => (
              <div key={index} style={{
                border: `2px solid ${currentTheme.border}`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease'
              }}>
                {/* Subject Header */}
                <div style={{
                  padding: '1.5rem',
                  backgroundColor: currentTheme.sectionBg,
                  borderBottom: `1px solid ${currentTheme.border}`,
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}>
                  <h4 style={{
                    color: currentTheme.text,
                    margin: '0 0 0.5rem 0',
                    fontWeight: '600',
                    fontSize: '1.3rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {material.subject}
                  </h4>
                  <p style={{
                    color: currentTheme.textSecondary,
                    margin: 0,
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {material.topics.join(' • ')}
                  </p>
                </div>

                {/* Resources Grid */}
                <div style={{ 
                  padding: '1.5rem',
                  backgroundColor: currentTheme.cardBg,
                  transition: 'background-color 0.3s ease'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}>
                    {material.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem',
                        backgroundColor: getResourceTypeBg(resource.type),
                        borderRadius: '8px',
                        border: `1px solid ${getResourceTypeColor(resource.type)}20`,
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                      onClick={() => window.open(resource.url, '_blank')}>
                        <div style={{
                          color: getResourceTypeColor(resource.type),
                          flexShrink: 0
                        }}>
                          {resource.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontWeight: '500',
                            color: currentTheme.text,
                            fontSize: '0.9rem',
                            marginBottom: '0.2rem',
                            transition: 'color 0.3s ease'
                          }}>
                            {resource.title}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: getResourceTypeColor(resource.type),
                            textTransform: 'uppercase',
                            fontWeight: '600'
                          }}>
                            {resource.type}
                          </div>
                        </div>
                        <ExternalLink size={14} style={{
                          color: currentTheme.textSecondary,
                          flexShrink: 0,
                          transition: 'color 0.3s ease'
                        }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CSStudentHub;