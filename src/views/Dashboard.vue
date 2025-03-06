<template>
  <div class="dashboard">
    <h1>Financial Dashboard</h1>
    <div class="chart-container">
      <div class="chart-wrapper">
        <h2>Market Overview</h2>
        <Line
          v-if="chartData"
          :data="chartData"
          :options="chartOptions"
          ref="chartRef"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartRef = ref(null)

// Mock data for initial development
const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Portfolio Value',
    data: [65000, 59000, 80000, 81000, 56000, 85000],
    fill: false,
    borderColor: '#2196f3',
    tension: 0.1
  }]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 0
  },
  plugins: {
    legend: {
      position: 'top',
      display: true
    },
    title: {
      display: true,
      text: 'Portfolio Performance'
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 45,
        minRotation: 45,
        autoSkip: true,
        maxTicksLimit: 6,
        padding: 10
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `$${value.toLocaleString()}`
      }
    }
  }
}

onMounted(() => {
  // Future API integration will be implemented here
})

onUnmounted(() => {
  // Clean up chart instance
  const chart = chartRef.value?.chart
  if (chart) {
    chart.destroy()
  }
})
</script>

<style scoped>
.dashboard {
  padding: 0.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
}

.chart-container {
  flex: 1;
  min-height: 0;
  padding: 1rem 1.5rem 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1rem;
}

.chart-wrapper {
  height: calc(100% - 2rem);
  width: 100%;
  position: relative;
  padding-bottom: 2rem;
}

.chart-wrapper h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

h1 {
  margin: 0 0 0.5rem;
  font-size: 1.75rem;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 1rem;
    height: calc(100vh - 2rem);
  }
  
  .chart-container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .chart-wrapper h2 {
    font-size: 1.2rem;
  }

  .chart-container {
    padding: 0.75rem;
  }
}
</style>