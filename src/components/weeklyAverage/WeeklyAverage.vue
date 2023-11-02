<script>

import { GChart } from 'vue-google-charts'

export default {
    name: 'WeeklyAverage',
    components: {
        GChart
    },
    data() {
        return {
            teamsDisplayed: '1',
            teams: [
                {id: 1, name: 1, value: [4, 6, 7, 8]},
                {id: 2, name: 2, value: [4, 5, 2, 9]},
                {id: 3, name: 3, value: [7, 4, 5, 4]},
                {id: 4, name: 4, value: [3, 2, 3, 2]}
            ],
            chartData: [
                ['Weeks', 'Hours worked on average'],
                ['1',  2],
                ['2',  6],
                ['3',  4],
                ['4',  12]
            ],  
            chartOptions: {
                legend: 'none',
                vAxis: { minValue: 0 },
                chartArea: { width: '85%', height: '65%' },
                'backgroundColor': {
                    'fill': 'C4C3AA',
                    'opacity': 100
                },
            }
        }
    }
}


</script>

<template>
    <div class="w-6/12 h-62 p-3 bg-graph-bg-2 rounded-3xl shadow flex flex-col">
        <div class="flex flex-col mx-2">
            <span class="m-0 text-xl font-bold tracking-tight text-second-text">Weekly average hours worked by teams :</span>
            <ul class="items-center w-full text-sm font-medium bg-graph-bg-2 sm:flex">
                <li class="w-2/12" v-for="team in teams">
                    <div class="flex items-center pl-3">
                        <input @click="test" v-model="teamsToDisplay" :id="'vue-checkbox-list' + team.id" type="checkbox" :value="team.id" class="w-4 h-4 text-second-text focus:ring-blue-500">
                        <label :for="'vue-checkbox-list' + team.id" class="w-full py-2 ml-2 text-sm font-medium text-second-text">{{  team.name  }}</label>
                    </div>
                </li>
            </ul>
        </div>
        <GChart 
            type="AreaChart"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<style>

</style>