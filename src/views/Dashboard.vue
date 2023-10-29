<script>

import Header from '../components/header/Header.vue';
import Sidebar from '../components/sidebar/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: { Header, Sidebar },
  methods: {
    test() {
        console.log("i")
    }
  }
}

</script>

<template>
    <div class="wrapper">
        <Header />
        <div class="content">
            <Sidebar @click="test"/>
            <div>

            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 1340px;
}
</style>