<script>

export default {
  name: 'Sidebar',
  components: {},
  data() {
    return {
        content: ["dashboard", "teams", "graphs", "employes-dashboard"],
        currentContent: "dashboard"
    }
  },
  methods: {
    changeContent(newContent) {
        this.currentContent = newContent
        console.log(this.currentContent)
    }
  }
}

</script>

<template>
    <div class="sidebar-content">
        <div>
            <span @click="changeContent(content[0])">test</span>
        </div>
        <!-- ajouter ici les actions en fonction du status utilisateur -->
        <div v-if="true">
            <span @click="changeContent(content[1])">test</span>
        </div>
        <div v-if="true">
            <span @click="changeContent(content[2])">test</span>
        </div>
        <div v-if="true">
            <span @click="changeContent(content[3])">test</span>
        </div>
    </div>
</template>

<style>
.sidebar-content {
    margin-left: 30px;
}
</style>