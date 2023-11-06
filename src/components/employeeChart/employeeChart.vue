<script>

import Workingtime from '../workingtime/Workingtime.vue';
import { customToolTip } from '../../utils/chart'

export default {
    name: 'EmployeeChart',
    components: {
        Workingtime
    },
    data() {
        return {
            isInitialized: false,
            chartData: [
                ['day', 'shift', 'b', 'c', 'd', {type:'string',role:'tooltip'}],
                ['Mon', 8, 18, 8, 18, customToolTip(8, 18)],
                ['Tue', 7, 15, 7, 15, customToolTip(7, 15)],
                ['Wed', 8, 15, 8, 15, customToolTip(8, 15)],
                ['Thu', null, null, null, null, customToolTip(0, 0)],
                ['Fri', 10, 19, 10, 19, customToolTip(10, 19)]
            ],
            bgColor: '#B9C1B6',
            modalOpen: false
        }
    },
    methods: {
        // gérer le select et surtout l'affichage apres
        employeeView(e) {
            this.isInitialized = true
        },
        modalOpener() {
            this.modalOpen = !this.modalOpen
        }
    }
}

// il faut ajouter les fonctionnalités permettant de voir le working time d'un employé
// de créer des workintimes et d'aller voir les dashboard user 

</script>

<template>
    <div class="w-full px-6 py-4 bg-summarybg rounded-3xl shadow flex flex-col mt-8 mb-4">
        <div class="flex justify-between items-center mb-4">
            <span class="text-second-text ml-2 text-xl font-bold">Employee working hours chart</span>
            <div>
                <select id="employee" @change="employeeView" class="bg-second-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                <option selected>Employee</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                </select>
            </div>
        </div>
        <div class="w-full flex justify-between items-center" v-if="isInitialized">
            <div class="w-6/12">
                <Workingtime :bg-color="bgColor" :data="chartData" />
            </div>
            <div class="w-6/12 flex justify-center items-center flex-col">
                <div>
                    <button type="button" @click="modalOpener" class="text-red-700 hover:text-white border border-tertiary text-tertiary focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2 hover:text-white hover:bg-second-text">Create a new working time</button>
                </div>
                <div>
                    <button type="button" class="text-red-700 hover:text-white border border-tertiary text-tertiary focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2 hover:text-white hover:bg-second-text">View employee dashboard</button>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center text-second-text text-xl mt-12 mb-12" v-else>
            <span>Select an employee</span>
        </div>
        <div v-if="modalOpen" class="fixed w-full h-full z-50 bg-second-text bg-opacity-50 top-0 left-0 flex justify-center items-center">
            <div class="w-full bg-secondary rounded-3xl sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div class="flex justify-between items-center">
                            <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-second-text">
                                Update your account
                            </h1>
                            <div @click="modalOpener" class="text-second-text flex items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="emailForm" class="block mb-2 text-sm font-medium text-second-text">Your email</label>
                                <input id="emailForm" type="email" name="emailForm" class="bg-tertiary text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com">
                            </div>
                            <div>
                                <label for="usernameForm" class="block mb-2 text-sm font-medium text-second-text">Your username</label>
                                <input id="usernameForm" type="text" name="usernameForm" class="bg-tertiary text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="username">
                            </div>
                            <div>
                                <label for="passwordForm" class="block mb-2 text-sm font-medium text-second-text">Password</label>
                                <input id="passwordForm" type="password" name="passwordForm" placeholder="••••••••" class="bg-tertiary text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                            </div>
                            <div class="flex flex-col">
                                <button type="button" class="text-red-700 hover:text-white border border-tertiary text-tertiary focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2 hover:text-white hover:bg-tertiary">Update</button>
                                <button type="submit" class="text-second-text hover:text-danger focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-xs px-5 py-2.5 text-center">Delete your account</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>
</template>

<style>

</style>