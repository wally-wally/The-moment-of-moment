<template>
  <div class="wrapper">
    <div class="text">여러분이 생각한 결과가 나왔나요?</div>
    <router-link to="/final/subject">
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
  font-size: 4.7vw;
  font-weight: 900;
  font-family: 'Noto Serif KR';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
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