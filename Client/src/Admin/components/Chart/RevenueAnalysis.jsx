import React from "react";
import { Chart as ChartJs, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function RevenueAnalysis() {
  // Chart data
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Data Set",
        data: [10, 30, 28, 11, 25, 12, 15, 19, 10, 16, 26, 27], // Data for the chart
        backgroundColor: "#FF5555", // Bar color
        borderColor: "#FF5555",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y}`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          drawOnChartArea: true, // Show horizontal grid lines
          drawBorder: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="">
    <div className="my-8">
      <div className="flex justify-between">
        <h2 className="">Review Analysis</h2>
        <div className="">
          <button type="button" className="focus:outline-none text-black bg-[#E5E5E5] font-medium text-sm px-5 py-2.5 mb-2">Weekly</button>
          <button type="button" className="focus:outline-none text-white bg-[#39B54A] font-medium text-sm px-5 py-2.5 mb-2">Today</button>
          <button type="button" className="focus:outline-none text-black bg-[#E5E5E5] font-medium text-sm px-5 py-2.5 mb-2">Monthly</button>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
    </div>
    </>

  );
}

export default RevenueAnalysis;
