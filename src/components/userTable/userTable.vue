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
      this.users = await ApiGet('/users')
      this.loading = false
    },

    deleteUser(user) {
      console.log(`deleted ${user}`)
    }
  }
}
</script>

<template>
  <div class="w-full h-62 p-3 bg-clockbg rounded-3xl shadow flex flex-col">
    <span>Search user: </span>
    <input type="text" v-model="searchValue">
    <Vue3EasyDataTable
      :headers="header"
      :items="users"
      :search-field="searchField"
      :search-value="searchValue"
      :sortBy="sortBy"
      :loading="loading"
    >
    <template #item-username="item">
      <div>
        <button @click="console.log(`go to ${item.username} dashboard`)">{{ item.username }}</button>
      </div>
    </template>
    <template #item-teamsId="item">
      <div v-if="item.teamsId == null">
        <p>No team</p>
      </div>
      <div v-else>
        <select>
          <option>{{ item.teamsId }}</option>
        </select>
      </div>
    </template>
    <template #item-role="item">
      <div>
        <select>
          <option value="" disabled>{{ item.role }}</option>
          <option value="">manager</option>
        </select>
      </div>
    </template>
    <template #item-action="user">
      <button @click="deleteUser(user.username)">Delete</button>
    </template>
    <template #empty-message>
      <p>No user corresponding</p>
    </template>
  </Vue3EasyDataTable>
  </div>
</template>
