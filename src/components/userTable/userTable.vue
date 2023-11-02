<script>
export default {
  data() {
    return {
      user: this.$store.state.currUser
    }
  }
}
</script>

<template>
  <div class="flex">
    <div id="users-table" class="mr-4 px-6 py-4 bg-sky-700 rounded-3xl justify-between text-white">
      <table class="min-w-full divide-y divide-gray-200 ">
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
      <table class="mt-4 min-w-full divide-y divide-gray-200">
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
      </table>
    </div>

  </div>
</template>
