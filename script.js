const moistureEl = document.getElementById("moisture");
const tempEl = document.getElementById("temperature");
const humidityEl = document.getElementById("humidity");
const statusEl = document.getElementById("status");

let irrigationOn = false;
let chartData = {
  labels: [],
  datasets: [{
    label: 'Soil Moisture %',
    data: [],
    borderColor: 'green',
    fill: false
  }]
};

const ctx = document.getElementById("chart").getContext("2d");
const chart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

function updateSensorData() {
  const moisture = Math.floor(Math.random() * 60) + 30;
  const temperature = Math.floor(Math.random() * 15) + 20;
  const humidity = Math.floor(Math.random() * 50) + 40;

  moistureEl.textContent = moisture;
  tempEl.textContent = temperature;
  humidityEl.textContent = humidity;

  const now = new Date().toLocaleTimeString();
  chartData.labels.push(now);
  chartData.datasets[0].data.push(moisture);

  if (chartData.labels.length > 10) {
    chartData.labels.shift();
    chartData.datasets[0].data.shift();
  }

  chart.update();

  // Auto irrigation logic
  if (moisture < 40 && !irrigationOn) {
    irrigationOn = true;
    statusEl.textContent = "ON (Auto)";
    statusEl.style.color = "green";
  } else if (moisture > 50 && irrigationOn) {
    irrigationOn = false;
    statusEl.textContent = "OFF";
    statusEl.style.color = "red";
  }
}

function toggleIrrigation() {
  irrigationOn = !irrigationOn;
  statusEl.textContent = irrigationOn ? "ON (Manual)" : "OFF";
  statusEl.style.color = irrigationOn ? "green" : "red";
}

setInterval(updateSensorData, 3000);
