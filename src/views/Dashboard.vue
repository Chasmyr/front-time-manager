<script>

import ChartManager from '../components/chartManager/ChartManager.vue';
import Header from '../components/header/Header.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import UserDashboard from '../components/userDashboard/userDashboard.vue';
import ManagerTable from '../components/userTable/managerTable.vue';

export default {
  name: 'Dashboard',
  components: { Header, Sidebar, UserDashboard, UserDashboard, ChartManager, ManagerTable },
  computed: {
    isDashboard() {
        return this.$store.state.currentContent === "dashboard" ? true : false
    },
    isTeams() {
      return this.$store.state.currentContent === "teams" ? true : false
    },
    isGraphs() {
        return this.$store.state.currentContent === "graphs" ? true : false
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
            <div v-if="isTeams" class="w-full mt-12">
              <ManagerTable/>
            </div>
            <div v-if="isGraphs" class="w-full mt-12">
                <ChartManager />
            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 100%;
}
</style>
