<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const chartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receita',
      data: [1200, 1900, 800, 2400, 3000, 2800],
      borderColor: '#a855f7',
      backgroundColor: 'rgba(168,85,247,0.2)',
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#fff'
      }
    }
  },
  scales: {
    x: {
      ticks: { color: '#ccc' }
    },
    y: {
      ticks: { color: '#ccc' }
    }
  }
}
</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>