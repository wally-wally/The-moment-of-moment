<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        Copyright ⓒ 2020 by <span class="editor" @click="goYourPage()">wally-wally</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    goYourPage() {
      window.open('https://www.instagram.com/wally_programming/')
    }
  }
}
</script>

<style scoped>
.editor {
  color: orange;
}

.editor:hover {
  cursor: pointer;
}
</style>