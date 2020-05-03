<template>
  <div class="wrapper">
    <div class="text">
      "작가의 의도와 관람하는 사람의 해석은 다를 수 있다"<br>
      를 보여주고자 했다.
    </div>
    <router-link to="/final/artist">
      <i class="fas fa-angle-double-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  background-color: #1d2652;
  height: 100%;
}

.text {
  color: antiquewhite;
  font-size: 4vw;
  font-weight: 900;
  font-family: 'Noto Serif KR';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  line-height: 2.5;
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