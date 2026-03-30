<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  type ChartOptions
} from 'chart.js'

import { Pie } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const chartData = {
  labels: ['PIX', 'Cartão', 'Boleto'],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: [
        '#a855f7',
        '#6366f1',
        '#22c55e'
      ],
      borderWidth: 0
    }
  ]
}

const chartOptions: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#e5e7eb'
      }
    }
  }
}
</script>

<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>