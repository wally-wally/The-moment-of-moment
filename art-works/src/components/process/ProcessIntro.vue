<template>
  <div class="wrapper">
    <div class="process-intro-section">
      <div class="select-image-wrapper">
        <img v-bind:src="source[num - 1].imgUrl" alt="select-image">
        <div class="select-alert">
          <span>{{ source[num - 1].selectNum }}번 재료를 선택하셨습니다.</span>
        </div>
      </div>
      <div class="start-message-wrapper">
        이제 이 재료를 구조물을 만들어 보겠습니다.<br>만들 때 추가적으로 들어가는 재료는<br>{{ source[num - 1].unSelectNum }}에서도 동일하게 사용됩니다.
      </div>
    </div>
    <router-link to="/process/2">
      <i class="fas fa-angle-double-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: this.$store.state.selectedItem,
      source: [
        {
          'imgUrl': require('../../assets/items/wood.jpg'),
          'selectNum': '①',
          'unSelectNum': '②, ③'
        },
        {
          'imgUrl': require('../../assets/items/steel.jpg'),
          'selectNum': '②',
          'unSelectNum': '①, ③'
        },
        {
          'imgUrl': require('../../assets/items/thread.jpg'),
          'selectNum': '③',
          'unSelectNum': '①, ②'
        },
      ]
    }
  },
}
</script>

<style scoped>
.process-intro-section {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

img {
  display: block;
  margin: 0 auto;
  width: 260px;
}

.select-alert {
  text-align: center;
  margin: 15px auto 30px;
}

span {
  background-color: antiquewhite;
  font-family: 'Noto Serif KR';
  color: #1d2652;
  padding: 0 5px;
  font-weight: 600;
}

.start-message-wrapper {
  color: antiquewhite;
  text-align: center;
  font-family: 'Noto Serif KR';
  line-height: 1.7;
}

.wrapper {
  background-color: #1d2652;
  height: 100%;
}

i {
  font-size: 50px;
  color: antiquewhite;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>