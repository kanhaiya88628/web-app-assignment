import React from "react";
import "./style.css";

const Dashboard = () => {
  // Daily productivity data (replace with actual data)
  const dailyProductivityData = [
    { day: "Monday", productivity: 4 },
    { day: "Tuesday", productivity: 92 },
    { day: "Wednesday", productivity: 122 },
    { day: "Thursday", productivity: 93 },
    { day: "Friday", productivity: 89 },
    { day: "Saturday", productivity: 98 },
  ];

  return (
    <div className="dashboard">
      <h2>Employee Productivity Dashboard</h2>
      <div className="productivity-container">
        {dailyProductivityData.map((day) => (
          <div className="day-row" key={day.day}>
            <p className="day">{day.day}</p>
            <div className="bar-container">
              <div
                className="bar"
                style={{ width: `${Math.min(day.productivity, 100)}%` }}
              ></div>
              <p className="percentage">{day.productivity}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
