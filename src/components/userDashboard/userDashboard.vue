<script>
import Clock from '../clock/Clock.vue';
import Summary from '../summary/Summary.vue';
import Random from '../random/Random.vue'
import Workingtime from '../workingtime/Workingtime.vue';
import DashboardGraph from '../dashboardGraph/DashboardGraph.vue';
import { customToolTip } from '../../utils/chart'

export default {
    name: 'UserDashboard',
    components: { Clock, Summary, Random, Workingtime, DashboardGraph },
    data() {
        return {
            chartData: [
                ['day', 'shift', 'b', 'c', 'd', {type:'string',role:'tooltip'}],
                ['Mon', 8, 18, 8, 18, customToolTip(8, 18)],
                ['Tue', 7, 15, 7, 15, customToolTip(7, 15)],
                ['Wed', 8, 15, 8, 15, customToolTip(8, 15)],
                ['Thu', null, null, null, null, customToolTip(0, 0)],
                ['Fri', 10, 19, 10, 19, customToolTip(10, 19)]
            ],
            bgColor: '#BFB293'
        }
    }
}
</script>

<template>
    <div class="w-full flex justify-between gap-6">
        <Summary />
        <Random />
        <Clock />
    </div>
    <div class="w-full flex justifybetween gap-6 mt-6">
        <div class="w-6/12 h-62 p-3 bg-graph-bg rounded-3xl shadow flex flex-col">
            <Workingtime :data="chartData" :bg-color="bgColor"/>
        </div>
        <DashboardGraph />
    </div>
</template>

<style>

</style>