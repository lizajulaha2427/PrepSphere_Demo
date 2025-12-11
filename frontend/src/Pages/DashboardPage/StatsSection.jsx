import { useEffect, useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StatsSection() {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
  try {
    const token = localStorage.getItem("token");

    // If NO token → do not send request
    if (!token) {
      console.error("No token found");
      setProgressData([]);
      setLoading(false);
      return;
    }

    const res = await fetch("http://localhost:4000/api/progress", {
      headers: { Authorization: `Bearer ${token}` },
    });

    // If unauthorized → do not break the UI
    if (res.status === 401) {
      console.error("Unauthorized or invalid token");
      setProgressData([]);  // Prevent forEach error
      setLoading(false);
      return;
    }

    const data = await res.json();

    // If data is NOT an array → protect UI
    if (!Array.isArray(data)) {
      console.error("Expected array, received:", data);
      setProgressData([]);
      setLoading(false);
      return;
    }

    setProgressData(data);
    setLoading(false);
  } catch (err) {
    console.error("Network/Server error:", err);
    setProgressData([]);
    setLoading(false);
  }
};


    fetchProgress();
  }, []);

  if (loading) return <p>Loading stats...</p>;

  // Total courses & lessons
  const totalCourses = 9;
  const totalLessons = progressData.length;

  // Course progress (latest % per course)
  const courseProgress = {};
  progressData.forEach(p => {
    courseProgress[p.courseName] = Math.max(courseProgress[p.courseName] || 0, p.progress);
  });

  const completedCourses = Object.values(courseProgress).filter(p => p === 100).length;

  // Half doughnut chart
  const courseDoughnutData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completedCourses, totalCourses - completedCourses],
        backgroundColor: ["#28a745", "#FFD93D"],
        borderWidth: 0,
      },
    ],
  };

  const courseDoughnutOptions = {
    rotation: -90,
    circumference: 180,
    plugins: { legend: { display: false } },
  };

  // Daily submissions
  const submissionsByDate = {};
  progressData.forEach(p => {
    const date = new Date(p.date).toLocaleDateString();
    submissionsByDate[date] = (submissionsByDate[date] || 0) + 1;
  });

  const lineData = {
    labels: Object.keys(submissionsByDate),
    datasets: [
      {
        label: "Lessons Completed per Day",
        data: Object.values(submissionsByDate),
        borderColor: "#FF9F43",
        backgroundColor: "rgba(255,159,67,0.2)",
      },
    ],
  };

  // Bar chart
  const barData = {
    labels: Object.keys(courseProgress),
    datasets: [
      {
        label: "Course Completion %",
        data: Object.values(courseProgress),
        backgroundColor: "rgba(54,162,235,0.6)",
      },
    ],
  };

  return (
    <div className="stats-section">

      {/* ⭐ Top row: Total Courses + doughnut chart */}
        <div className="top-stats-row">
            <div className="courses-card">
              <h4>Total Courses</h4>
              <h1>{totalCourses}</h1>
            </div>

            <div className="chart-boxx small-chart">
              <h4>Completion Overview</h4>
              <Doughnut className="dohnut" data={courseDoughnutData} options={courseDoughnutOptions} />
            </div>
            <div className="chart-box2">
              <h4>Lesson Completion Log</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {progressData.map((p, idx) => (
                  <li key={idx} style={{ marginBottom: "10px" }}>
                    <strong>{p.lessonName}</strong> — <em>{new Date(p.date).toLocaleDateString()}</em> — {p.courseName}
                  </li>
                ))}
              </ul>
            </div>
            
        </div>

      {/* Second row tiny stats */}
      <div className="totals">
        <h3>Total Courses Completed: {completedCourses}/{totalCourses}</h3>
        <h3>Total Lessons Completed: {totalLessons}</h3>
      </div>

      {/* Main chart grid */}
      <div className="charts">
        <div className="chart-box">
          <h4>Course-wise Progress</h4>
          <Bar data={barData} />
        </div>

        <div className="chart-box">
          <h4>Daily Submissions</h4>
          <Line data={lineData} />
        </div>

      </div>
    </div>
  );
}
