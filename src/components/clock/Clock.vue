<script>

export default {
    name: 'Clock',
    components: {}
}

</script>

<template>
    <div class="w-3/12 h-52 px-6 py-4 bg-clockbg rounded-lg shadow flex flex-col justify-between">
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-second-text">Clock</h2>
        <div class="flex justify-center items-center flex-col">
            <span class="text-second-text text-sm">Started at :</span>
            <span class="text-second-text text-xl">2023-10-26 08:00</span>
        </div>
        <div class="flex justify-center items-center">
            <button type="button" class="text-second-text hover:text-second-text border border-second-text hover:bg-second-ext focus:ring-4 focus:outline-none focus:ring-second-text font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">Start</button>
        </div>
    </div>
</template>

<style>

</style>