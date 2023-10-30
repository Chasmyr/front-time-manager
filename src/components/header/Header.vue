<script>

export default {
  name: 'Header',
  components: {}
}

</script>

<template>
    <header class="flex justify-between items-center max-w-7xl m-8">
        <div class="flex justify-between items-center"> 
            <div class="text-primary flex justify-center items-center rounded-full mr-8 p-2 text-3xl font-semibold w-11 h-11 border border-solid">
                <span>G</span>
            </div>
            <div>
                <h1 class="m-0 text-3xl font-normal">Dashboard</h1>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <div class="text-2xl mr-2 font-normal cursor-pointer">
                <span>Username</span>
            </div>
            <div class="flex items-center [&>*]:w-9 [&>*]:h-9 [&>*]:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
        </div>
    </header>
</template>

<style>
</style>