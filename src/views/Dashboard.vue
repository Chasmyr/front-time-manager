<script>

import Header from '../components/header/Header.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';
import UserDashboard from '../components/userDashboard/userDashboard.vue';

export default {
  name: 'Dashboard',
  components: { Header, Sidebar, UserDashboard },
  computed: {
    isDashboard() {
        return this.$store.state.currentContent === "dashboard" ? true : false
    }
  }
}

</script>

<template>
    <div class="wrapper">
        <Header />
        <div class="content flex">
            <Sidebar />
            <div v-if="isDashboard">
                <UserDashboard />
            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 1000px;
}
</style>