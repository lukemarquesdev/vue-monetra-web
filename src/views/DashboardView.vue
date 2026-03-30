<script setup lang="ts">
import CardBase from '@/components/cards/CardBase.vue';
import PieChart from '@/components/charts/PieChart.vue';
import RevenueChart from '@/components/charts/RevenueChart.vue';

</script>

<template>
  <main>
    <CardBase title="Dashboard" subtitle="Acompanhe os graficos dos seus gastos">
      <div>
        <div class="flex flex-row justify-between w-full">
          <p class="text-6xl text-white">R$ 10.000</p>
          <p class="text-6xl text-white">R$ 10.000</p>
          <p class="text-6xl text-white">R$ 10.000</p>
        </div>
        
        <div class="flex flex-row justify-between h-100 w-full">
          <div class="h-full w-1/2">
            <RevenueChart />
          </div>
          <div class="h-full w-1/2">
            <PieChart />
          </div>
        </div>
      </div>
    </CardBase>
    <!-- <h1>Dashboard</h1> -->
  </main>
</template>