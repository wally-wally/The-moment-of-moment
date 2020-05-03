<template>
  <div class="mainpage-wrapper">
    <div class="homepage-title">
      그 순간의 찰나
    </div>
    <div class="button-groups">
      <v-btn class="intro-button" outlined color="indigo" v-on:click="showDialog">Introduction</v-btn>
      <router-link to="/intro">
        <v-btn class="start-button" outlined color="indigo">Get Started</v-btn>
      </router-link>
    </div>
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-3"
          primary-title
        >
          <div class="dialog-title">"여러가지의 자아, 이기적인 내면, 그 순간의 찰나"</div>
        </v-card-title>

        <v-card-text class="pt-2">
          <div class="dialog-text">
            바쁘게 흘러가는 일상 중에 다른 면의 나와 직면하는 날이 있었다. 선의의 행동과 어투와 생각을 하고 있는 동시에 이기적인 마음과 모습을 동시에 가지고 있다는 것을 발견하게 되었다.
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            <div class="exit-button">
              나가기
            </div>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    showDialog: function() {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style scoped>
.mainpage-wrapper {
  background: url('../assets/mainpage01.png');
  background-position: 30% 100%;
  background-size: 145% 110%;
  background-repeat: no-repeat;
  height: 100%;
}

.homepage-title {
  color: rgba(0, 27, 84, .8);
  font-weight: 600;
  font-size: 35px;
  font-family: 'Nanum Brush Script';
  text-align: center;
  padding-top: 22vh;
}

.button-groups {
  padding-top: 50px;
}

.intro-button,
.start-button {
  display: block;
  margin: 0 auto 15px;
  font-size: 18px;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
}

.dialog-title {
  font-size: 13.5px;
  font-family: 'Gothic A1';
  font-weight: bold;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
}

.dialog-text {
  font-size: 13.5px;
  font-family: 'Noto Sans KR';
  color: grey;
  line-height: 1.8;
}

.exit-button {
  font-family: 'Noto Sans KR';
  font-weight: bold;
}

a {
  text-decoration: none;
}
</style>