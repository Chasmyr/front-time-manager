<script>
import 'vue3-easy-data-table/dist/style.css';
import { ApiGet } from "../../utils/api.js";
import dataTable from '../dataTable/dataTable.vue';
import { onlyUsers } from '../../utils/table';

export default {
  components: {
    dataTable,
  },

   data() {
    return {
      items: [],
      users: [
        {
          username: "leo",
          email: "leo@exemple.com",
          role: "employee",
          teamsId: 1
        },
        {
          username: "dada",
          email: "dada@exemple.com",
          role: "employee",
          teamsId: 2
        },
        {
          username: "mzmz",
          email: "mzmz@exemple.com",
          role: "employee",
          teamsId: 3
        },
        {
          username: "bobo",
          email: "bobo@exemple.com",
          role: "employee",
          teamsId: 1
        },
        {
          username: "vovo",
          email: "vovo@exemple.com",
          role: "employee",
          teamsId: 2
        },
        {
          username: "Evans",
          email: "vovo@exemple.com",
          role: "employee",
          teamsId: 2
        }
      ],
      managedTeams: [],
      headers: [
        {text: "Username", value: "username"},
        {text: "Email", value: "email"},
        {text: "Role", value: "role"},
        {text: "team", value: "teamsId", sortable: "true"},
        {text: "action", value: "action"}
      ],
      searchField: ["username", "email", "role", "teamsId"],
      searchValue: "",
      sortBy: "teamsId",
      loading: false
    }
   },

   created() {
    this.items = onlyUsers(this.users, this.$store.state.currUser.username)
   }
  }
</script>

<template>
  <div class="w-full h-62 p-5 bg-summarybg rounded-3xl shadow flex flex-col">
    <div class="flex">
      <span class="text-second-text">Search user: </span>
      <input type="text" v-model="searchValue" class="bg-summarybg border border-second-text text-second-text text-sm rounded-lg block w-52 h-7 ml-4 p-2.5">
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
