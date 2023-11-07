<script>
import 'vue3-easy-data-table/dist/style.css';
import { ApiGet } from "../../utils/api.js";
import dataTable from '../dataTable/dataTable.vue';

export default {
  components: {
    dataTable,
  },

   data() {
    return {
      items: [],
      headers: [
        {text: "Username", value: "username"},
        {text: "Email", value: "email"},
        {text: "Role", value: "role"},
        {text: "team", value: "teamsId", sortable: "true"},
      ],
      searchField: ["username", "email", "role", "teamsId"],
      searchValue: "",
      sortBy: "teamsId",
      loading: false
    }
   },

  created() {
    this.getUsers()
  },

  methods: {
    async getUsers() {
      this.loading = true
      this.items = await ApiGet('/users')
      this.loading = false
    },
  }
}
</script>

<template>
  <div class="w-full h-62 p-5 bg-clockbg rounded-3xl shadow flex flex-col">
    <div class="flex">
      <span>Search user: </span>
      <input style="background-color: rgb(219 208 238);" type="text" v-model="searchValue" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 h-7 ml-4 p-2.5">
    </div>
    <dataTable
      :headers="headers"
      :items="items"
      :search-field="searchField"
      :search-value="searchValue"
      :sortBy="sortBy"
      :loading="loading"
    />
  </div>
</template>
