<script>
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { ApiGet } from "../../utils/api.js";


export default {
  components: {
    Vue3EasyDataTable,
  },
  data() {
    return {
      users: [],
      header: [
        {text: "Username", value: "username"},
        {text: "Email", value: "email"},
        {text: "Role", value: "role"},
        {text: "team", value: "teamsId", sortable: "true"},
        {text: "Action", value: "action"}
      ],
      searchField: ["username", "email", "role"],
      searchValue: "",
      sortBy: "teamsId"
    }
  },

  created() {
    this.getUsers()
  },

  methods: {
    async getUsers() {
      this.users = await ApiGet('/users')
    },

    deleteUser(user) {
      console.log(`deleted ${user}`)
    }
  }
}
</script>

<template>
  <span>Search user: </span>
  <input type="text" v-model="searchValue">
  <Vue3EasyDataTable
    :headers="header"
    :items="users"
    :search-field="searchField"
    :search-value="searchValue"
    :sortBy="sortBy"
  >
  <template #item-teamsId="team">
    <select>
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
  </template>
  <template #item-action="user">
    <button @click="deleteUser(user.username)">Delete</button>
  </template>
</Vue3EasyDataTable>
</template>
