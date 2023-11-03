<script>
  import { ApiGet } from "../../utils/api.js";
  export default {
    data() {
      return {
        users: [],
        teams: []
      }
    },
    created() {
      this.getUsers()
    },
    methods: {
      async getUsers() {
        this.users = await ApiGet('/users')
      }

      // createTeam() {

      // }
    }
  }
</script>

<template>
  <div class="flex">
    <div id="users-table" class="mr-4 px-6 py-4 bg-sky-700 rounded-3xl justify-between text-white">
      <!-- <form>
          <div class="relative">
              <input type="search" id="default-search" class="block w-full p-4 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
              <button type="submit" class="text-black absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </button>
          </div>
      </form> -->
      <table class="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <th class="font-bold px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Username</th>
            <th class="font-bold px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Email</th>
            <!-- <th class="font-bold px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Rôle</th> -->
          </tr>
        </thead>
        <tbody class=" divide-y divide-gray-200">
          <tr v-for="user in users" :key="user">
            <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
            <!-- <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <div id="teams-table" class="px-6 py-4 bg-sky-700 rounded-3xl justify-between text-white">
      <button type="button" class="ml-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Create a team</button>
      <button type="button" class="ml-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Update a team</button>
      <button type="button" class="ml-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Delete a team</button>
      <div class="flex mt-4 ml-2">
        <h1 class="text-3xl tracking-wide">Choose a team:</h1>
        <div class="inline-block relative flex justify-end">
          <select name="" id="" class="text-black ml-4 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option  value="Team 1">Team 1</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <!-- <table class="mt-4 min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="font-bold px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Username</th>
            <th class="font-bold px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Email</th>
            <th class="font-bold px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider">Rôle</th>
          </tr>
        </thead>
        <tbody class=" divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
          </tr>
        </tbody>
      </table> -->
    </div>

  </div>
</template>
