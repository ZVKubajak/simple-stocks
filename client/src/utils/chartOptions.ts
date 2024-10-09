export const chartOptions = (showPoints: boolean) => ({
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#fff",
        font: { size: 14 },
        minRotation: 0,
        maxRotation: 0,
      },
      grid: { display: false },
    },
    y: {
      ticks: {
        color: "#fff",
        font: { size: 14 },
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: {
    legend: { display: true },
    tooltip: { enabled: true },
  },
  elements: {
    point: {
      radius: showPoints ? 5 : 0,
      hoverRadius: 15,
      hoverBorderWidth: 2,
    },
  },
});
