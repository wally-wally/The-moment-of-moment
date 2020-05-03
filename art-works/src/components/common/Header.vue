<template>
  <v-app-bar app flat fixed height="56" color="#1d2652">
    <v-spacer />
    <nav class="nav">
      <router-link to="/" style="text-decoration: none; color: black;">
        <span @click="resetSelectItem()"><i class="fas fa-home"></i></span>
      </router-link>
    </nav>
  </v-app-bar>
</template>

<script>
export default{
  name: 'Header',
  methods: {
    resetSelectItem() {
      this.$store.commit('saveNum', 0)
    }
  }
}
</script>

<style scoped>
i {
  color: antiquewhite;
  font-size: 1.5em;
}
</style>