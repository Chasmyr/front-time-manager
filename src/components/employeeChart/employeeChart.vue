<script>

export default {
    name: 'EmployeeChart',
    components: {},
    data() {
        isInitialized: false
    }
}

// il faut ajouter les fonctionnalités permettant de voir le working time d'un employé
// de créer des workintimes et d'aller voir les dashboard user 

</script>

<template>
    <div class="w-full h-56 px-6 py-4 bg-summarybg rounded-3xl shadow flex flex-col justify-between mt-8 mb-4">
        <div class="flex justify-between items-center">
            <span class="text-second-text ml-2 text-xl font-bold">Employee working hours chart</span>
            <div>
                <select id="employee" class="bg-second-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                <option selected>Employee</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
            </div>
        </div>
        <div class="w-full" v-if="isInitialized">

        </div>
        <div class="w-full flex justify-center items-center text-second-text text-xl" v-else>
            <span>Select an employee</span>
        </div>
    </div>
</template>

<style>

</style>