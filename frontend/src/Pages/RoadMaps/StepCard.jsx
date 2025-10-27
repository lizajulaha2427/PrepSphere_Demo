export default function StepCard({ icon, label }) {
  return (
    <div className="step-card">
      <span className="step-icon">{icon}</span>
      <span className="step-label">{label}</span>
    </div>
  );
}
