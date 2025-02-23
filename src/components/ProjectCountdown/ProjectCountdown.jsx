import { useState, useEffect } from "react";
import "./ProjectCountdown.css";

const ProjectCountdown = () => {
  const [clients, setClients] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const speed = 100;

    const clientsTimer = setInterval(() => {
      setClients((prev) => (prev < 32 ? prev + 1 : 32));
    }, speed);

    const successRateTimer = setInterval(() => {
      setSuccessRate((prev) => (prev < 85 ? prev + 3 : 85));
    }, speed);

    const completedTimer = setInterval(() => {
      setCompleted((prev) => (prev < 27 ? prev + 1 : 27));
    }, speed);

    return () => {
      clearInterval(clientsTimer);
      clearInterval(successRateTimer);
      clearInterval(completedTimer);
    };
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-items">
        <div className="countdown">
          <p className="count-number">{clients}+</p>
          <p className="count-text">Brands Trust Me</p>
        </div>
        <div className="divider"></div>
        <div className="countdown">
          <p className="count-number">{successRate}%</p>
          <p className="count-text">Success Rate</p>
        </div>
        <div className="divider"></div>
        <div className="countdown">
          <p className="count-number">{completed}+</p>
          <p className="count-text">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCountdown;
