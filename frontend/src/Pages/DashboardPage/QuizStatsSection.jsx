import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function QuizStatsSection() {
  const { user } = useContext(AuthContext);
  const [interviews, setInterviews] = useState([]);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:4000/api/interview/average", {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        setInterviews(data.interviews || []);
        setAverageScore(data.averageScore || 0);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuizData();
  }, [user]);

  if (interviews.length === 0) return <p>No Interviews taken yet.</p>;

  return (
    <div className="quiz-stats-section">
      <h2>Mock Interview Performance</h2>
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Interviews Completed</h3>
          <p>{interviews.length}</p>
        </div>
        <div className="stat-card">
          <h3>Average Score</h3>
          <p>{averageScore}</p>
        </div>
      </div>

      <h3>Mock Interview Improvement Logs</h3>
      <div className="improvement-logs">
        {interviews.map((iq, index) => (
          <div key={index} className="log-card">
            <p>
              <strong style={{ marginRight: "6px" }}>Date:</strong>
              {new Date(iq.date).toLocaleDateString()}

              <span style={{ marginLeft: "12px" }}>
                <strong>Job Role:</strong> {iq.jobRole}
              </span>

              <span style={{ marginLeft: "12px" }}>
                <strong>Score:</strong> {iq.score}
              </span>
            </p>
            <p><strong>Improvement Plan:</strong> {iq.improvementPlan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
