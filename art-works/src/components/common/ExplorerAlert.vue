<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        <div class="dialog-title">브라우저 변경 권장</div>
      </v-card-title>
      <v-card-text class="pt-3">
        <div class="alert-message">
          <i class="fab fa-internet-explorer"></i>
          <div>현재 <span class="now-browser">인터넷 익스플로러</span>로 접속하셨습니다.</div>
          <div>원활한 서비스 이용을 위해 <span class="recommend-browser">Chrome, Safari</span>와 같은 다른 브라우저로 변경해서 접속해주세요.</div>
          <div class="recommend-browser">Google Chrome 브라우저를 권장합니다.</div>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          <biv class='exit-button'>나가기</biv>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>
.dialog-title {
  font-size: 20px;
  font-weight: 600;
}

.alert-message {
  text-align: center;
}

.alert-message > i {
  font-size: 80px;
  color: #4BC9F8;
  padding: 15px 0;
}

.alert-message > div {
  font-size: 18px;
  line-height: 1.6;
}

.now-browser {
  color: rgb(66, 181, 223);
  font-weight: 600;
}

.recommend-browser {
  color: crimson;
  font-weight: 600;
}
</style>