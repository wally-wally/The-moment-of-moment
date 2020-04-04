<template>
  <v-app-bar app flat fixed height="56" color="#F4F2DB">
    <span class="title-wrapper">Project Name by [your_name]</span>
    <v-spacer />
    <nav class="nav">
      <router-link to="/" style="text-decoration: none; color: black;">
        <span @click="resetSelectItem()">Go Main</span>
      </router-link>
    </nav>
  </v-app-bar>
</template>

<script>
export default{
  name: 'Header',
  methods: {
    resetSelectItem() {
      this.$store.commit('selectItem', '')
    }
  }
}
</script>

<style scoped>
.title-wrapper {
  font-family: 'Comic Neue';
  font-size: 1.2em;
}
</style>