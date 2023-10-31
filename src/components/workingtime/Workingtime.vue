<script>

import { GChart } from 'vue-google-charts'

export default {
  name: 'workingtime',
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ['day', 'shift', 'b', 'c', 'd'],
        ['Mon', 8, 18, 8, 18,],
        ['Tue', 7, 15, 7, 15],
        ['Wed', 8, 15, 8, 15],
        ['Thu', 8, 16, 8, 16],
        ['Fri', 10, 19, 10, 19]
      ],
      chartOptions: {
        legend: 'none',
        fill: '#e0440e',
        bar: { groupWidth: '80%' },
        'backgroundColor': {
          'fill': '#BFB293',
          'opacity': 100
        },
        chartArea: {'width': '85%', 'height': '60%'},
        vAxis: {
          ticks: [6, 8, 10, 12, 14, 16, 18, 20]
        },
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#FFC28E' }
        }
      }
    }
  }
}

// logique du composant => un select avec une valeur par défault d'une semaine
// fetch les working times en question (ou alors le fait a l'initialisation)
// affiche dans un bar chart avec les jours de la semaine en absices et les heures en ordonées

</script>

<template>
    <div class="w-6/12 h-62 p-3 bg-graph-bg rounded-3xl shadow flex flex-col">
      <div class="flex justify-between items-center">
        <span class="text-second-text ml-2">Week 41</span> 
        <select class="bg-second-text text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 mr-2">
          <option selected>Choose a week</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <GChart 
        type="CandlestickChart"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
</template>

<style>

</style>