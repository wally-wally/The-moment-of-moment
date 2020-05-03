<template>
  <div class="mainpage-wrapper">
    <div class="homepage-title">
      그 순간의 찰나
    </div>
    <div class="button-groups">
      <v-btn class="intro-button" outlined color="indigo" v-on:click="showDialog">Documentation</v-btn>
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
          <div class="dialog-title">홈페이지 사용 설명서</div>
        </v-card-title>

        <v-card-text class="pt-2">
          <div class="hi">
            1. GET STARTED를 누른다.<br>
            2. 다음 페이지로 넘어가고자 할 때 화살표 버튼을 누른다.<br>
            3. 각 페이지에 나와있는 문구대로 실행한다.<br>
            <hr>
            <span class="alert-title">주의사항</span><br>
            ※Google Chrome 브라우저에서 실행해주세요.※<br>
            ※이 홈페이지는 모바일 세로 모드에 최적화되어있습니다.※
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
  background: url('../assets/mainpage01.jpg');
  background-position: center;
  background-size: cover;
  height: 100%;
}

.homepage-title {
  color: rgba(0, 27, 84, .8);
  font-weight: 600;
  font-size: 35px;
  font-family: 'Nanum Brush Script', cursive;
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
  font-size: 20px;
  font-family: 'Noto Sans KR';
  font-weight: bolder;
  color: crimson;
}

.hi {
  font-size: 15px;
  font-weight: 900;
  font-family: 'Noto Sans KR';
  line-height: 1.8;
  line-height: 200%;
}

.exit-button {
  font-weight: bold;
  font-family: 'Noto Sans KR';
  font-size: 14px;
}

a {
  text-decoration: none;
}

.alert-title {
  color: crimson;
}

hr {
  margin: 8px 0;
}
</style>