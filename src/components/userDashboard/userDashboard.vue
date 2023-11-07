<script>
import Clock from '../clock/Clock.vue';
import Summary from '../summary/Summary.vue';
import Random from '../random/Random.vue'
import Workingtime from '../workingtime/Workingtime.vue';
import DashboardGraph from '../dashboardGraph/DashboardGraph.vue';
import { customToolTip, workingTimeDataFormat } from '../../utils/chart'
import { getWeekFromDate } from '../../utils/date'

export default {
    name: 'UserDashboard',
    components: { Clock, Summary, Random, Workingtime, DashboardGraph },
    data() {
        return {
            chartData: [],
            bgColor: '#BFB293',
            isLoaded: false
        }
    },
    mounted() {
        let formatedDate = getWeekFromDate(new Date())
        let i = workingTimeDataFormat(this.$store.state.currUser.workingtimes, formatedDate['days'])
        this.chartData = i
        this.isLoaded = true
    },
    methods: {
        init() {
            
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
        <div v-if="isLoaded" class="w-6/12 h-62 p-3 bg-graph-bg rounded-3xl shadow flex flex-col">
            <Workingtime :data="chartData" :bg-color="bgColor"/>
        </div>
        <DashboardGraph />
    </div>
</template>

<style>

</style>