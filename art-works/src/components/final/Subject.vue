<template>
  <div class="intro-wrapper">
    <div class="intro-section">
      <img src="../../assets/double_quotes1.png" alt="double_quotes">
      <div class="intro-name">
        <div class="line"><span>여러가지의 자아,</span></div>
        <div class="line"><span>이기적인 내면,</span></div>
        <div><span>그 순간의 찰나</span></div>
      </div>
      <img src="../../assets/double_quotes2.png" alt="double_quotes">
    </div>
    <router-link to="/final/motivate">
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

.line {
  margin-bottom: 11px;
}

span {
  font-family: 'Noto Serif KR';
  font-size: 8.5vw;
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