import React from "react";
import {
  Chart as LineChartJs,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
LineChartJs.register(
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Tooltip
);

function LineChart({ user, guest }) {
  const labels = ["", "Week 1", "Week 2", "Week 3", "Week 4"];
  const chartData = {
    labels,
    datasets: [
      {
        label: "Guest",
        data: guest,
        borderColor: "#E9A0A0",
        tension: 0.4,
      },
      {
        label: "User",
        data: user,
        borderColor: "#9BDD7C",
        tension: 0.4,
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "150px" }}>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scaleShowVerticalLines: false,
          plugins: {
            title: {
              display: false,
              text: "Activities",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
              min: 0,
              max: 500,
              ticks: {
                stepSize: 100,
              },
            },
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
