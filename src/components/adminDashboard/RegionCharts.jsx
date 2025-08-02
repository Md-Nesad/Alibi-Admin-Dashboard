import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const labels = [
  "Region",
  "Region",
  "Region",
  "Region",
  "Region",
  "Region",
  "Region",
];

const weeklyData = [8, 6, 5, 4, 3, 2, 7];

const chartData = {
  labels,
  datasets: [
    {
      data: weeklyData,
      backgroundColor: [
        "#F2B100",
        "#DA9F00",
        "#C28E00",
        "#795900",
        "#614700",
        "#A97C00",
        "#DA9F00",
      ],
      borderRadius: 0,
      barPercentage: 0.6,
      categoryPercentage: 0.7,
      borderSkipped: true,
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "#fff",
      titleColor: "#805AD5",
      bodyColor: "#805AD5",
      borderColor: "#E9D8FD",
      borderWidth: 0,
      padding: 8,
      displayColors: false,
    },
  },
  layout: {
    padding: { top: 10, right: 10, left: 10, bottom: 0 },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#A0AEC0",
        font: { size: 14, family: "Inter, sans-serif" },
        padding: 6,
      },
    },
    y: {
      min: 0,
      max: 9, // Changed to 9 to allow 4 strokes at 0, 3, 6, 9
      grid: {
        color: "#1F2937", // stroke color
        lineWidth: 1,
        borderDash: [4, 4],
        drawBorder: false,
      },
      ticks: {
        color: "#CBD5E1",
        font: { size: 13, family: "Inter, sans-serif" },
        stepSize: 3,
        callback: function (value) {
          return value; // Show all ticks at 0, 3, 6, 9
        },
        padding: 8,
      },
    },
  },
};

export default function IncomeOverTimeChart() {
  return (
    <div
      className="bg-[#0F131C] rounded-xl border border-gray-800 p-4 w-full shadow-sm"
      style={{ height: 260 }}
    >
      <h2 className="text-white text-lg mb-2 ml-2 font-semibold">
        Missed Check-ins per Region
      </h2>
      <div className="mb-2" />
      <div style={{ height: 200 }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
