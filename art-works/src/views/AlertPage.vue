<template>
  <div class="alert-page-wrapper">
    <div class="alert-section">
      <div class="alert-mark">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      <div class="alert-message">
        <p>화면 너비를 300px 이상 600px 이하로 조정해 주세요.</p>
        <p>화면 높이를 480px 이상 960px 이하로 조정해 주세요.</p>
      </div>
      <div class="now-screen-size">
        <p>현재 너비: {{ responsiveWidth }}px</p>
        <p>현재 높이: {{ responsiveHeight }}px</p>
      </div>
      <div class="optimization-message">
        <p>※이 홈페이지는 모바일 세로모드에 최적화되어있습니다.※</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsiveWidth: window.innerWidth,
      responsiveHeight: window.innerHeight,
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.responsiveWidth = window.innerWidth
      this.responsiveHeight = window.innerHeight
    })
  }
}
</script>

<style scoped>
.alert-page-wrapper {
  position: relative;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.alert-section {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.alert-mark {
  color: red;
  font-size: 640%;
}

.alert-message,
.now-screen-size,
.optimization-message {
  color: antiquewhite;
  font-weight: 500;
  font-family: 'Jua';
  line-height: 2.9;
}

.alert-message > p,
.now-screen-size > p,
.optimization-message > p {
  margin-bottom: 0;
}

.alert-message {
  font-size: 150%;
}

.now-screen-size {
  font-size: 200%;
}

.optimization-message {
  font-size: 120%;
}

@media (max-width: 300px), (max-height: 480px) {
  .alert-mark {
    color: red;
    font-size: 300%;
  }

  .alert-message,
  .now-screen-size,
  .optimization-message {
    color: antiquewhite;
    font-weight: 500;
    font-family: 'Jua';
    line-height: 2;
    font-size: 100%;
  }
}
</style>