<script>

import Header from '../components/header/Header.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import UserDashboard from '../components/userDashboard/userDashboard.vue';
import UserTable from '../components/userTable/userTable.vue';

export default {
  name: 'Dashboard',
  components: { Header, Sidebar, UserDashboard, UserDashboard, UserTable },
  computed: {
    isDashboard() {
        return this.$store.state.currentContent === "dashboard" ? true : false
    },
    isTeams() {
      return this.$store.state.currentContent === "teams" ? true : false
    }
  }
}

</script>

<template>
    <div class="wrapper">
        <Header />
        <div class="content flex">
            <Sidebar />
            <div v-if="isDashboard" class="w-full mt-12">
                <UserDashboard />
            </div>
            <div v-if="isTeams">
              <UserTable/>
            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 1000px;
}
</style>
