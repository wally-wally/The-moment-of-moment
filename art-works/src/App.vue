<template>
  <v-app>
    <ExplorerAlert :dialog="dialog" @closeDialog="closeDialog"></ExplorerAlert>
    <div class="project-wrapper">
      <Header></Header>
      <v-content class="content-wrapper">
        <router-view></router-view>
      </v-content>
      <Footer></Footer>
    </div>
    <div class="alert-wrapper">
      <AlertPage></AlertPage>
    </div>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ExplorerAlert from '@/components/common/ExplorerAlert.vue'
import AlertPage from '@/views/AlertPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ExplorerAlert,
    AlertPage
  },
  data() {
    return {
      dialog: false
    }
  },
  mounted() {
    let agent = navigator.userAgent.toLowerCase()
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
      this.dialog = true
    } else {
      this.closeDialog()
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>

<style scoped>
.project-wrapper {
  height: 100%;
  display: none;
}

.content-wrapper,
.alert-wrapper {
  height: 100%;
}

@media (min-width: 300px) and (max-width: 600px) and (min-height: 480px) and (max-height: 900px) {
  .project-wrapper {
    display: block;
  }
  
  .alert-wrapper {
    display: none;
  }
}

@media (orientation: landscape) {
  .project-wrapper {
    display: none;
  }

  .alert-wrapper {
    display: block;
  }
}
</style>