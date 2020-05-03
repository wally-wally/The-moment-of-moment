<template>
  <div class="intro-wrapper">
    <div class="intro-section">
      <img src="../assets/double_quotes1.png" alt="double_quotes">
      <div class="intro-name">
        <span>지금부터 어떠한 구조물을 만들고자 합니다.</span>
      </div>
      <img src="../assets/double_quotes2.png" alt="double_quotes">
    </div>
    <router-link to="/select">
      <i class="fas fa-angle-double-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro-wrapper {
  background-color: #1d2652;
  height: 100%;
}

.intro-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

img {
  display: block;
  width: 70px;
  margin: 0 auto;
  opacity: 0.4;
}

.intro-name {
  text-align: center;
  margin: 40px 0;
}

span {
  font-family: 'Noto Serif KR';
  font-size: 4.7vw;
  font-weight: 600;
  background-color: antiquewhite;
  color: #1d2652;
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