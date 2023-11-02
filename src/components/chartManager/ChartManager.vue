<script>
import DailyAverage from '../dailyAverage/DailyAverage.vue';
import WeeklyAverage from '../weeklyAverage/WeeklyAverage.vue';


export default {
    name: 'ChartManager',
    components: { DailyAverage, WeeklyAverage }
}

</script>

<template>
    <div class="w-full flex justifybetween gap-6">
        <DailyAverage />
        <WeeklyAverage />
    </div>
    <div >

    </div>

</template>

<style>

</style>