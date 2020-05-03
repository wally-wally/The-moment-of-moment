<template>
  <div class="notfound-wrapper">
    <div class="notfound-mark" data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
      <i class="fas fa-exclamation-triangle d-block"></i>
    </div>
    <div class="alert-message" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1000" data-aos-once="true">
      <p>이 페이지는 없는 페이지입니다.</p>
    </div>
    <div class="alter-intro" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="1000" data-aos-once="true">
      <p><span class="link" @click="goMain">(여기)</span>를 누르면 메인 페이지로 이동합니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.notfound-wrapper {
  height: 100%;
  margin-top: 4rem;
}

.notfound-mark {
  height: 110px;
  padding: 20px 0;
}

.notfound-mark > .fas {
  font-size: 110px;
  color: crimson;
  text-align: center;
  text-shadow: 6px 6px 8px lightgray;
}

.alert-message p {
  font-size: 21px;
  font-weight: bold;
  font-family: 'Nanum Gothic';
  color: darkred;
  padding-top: 40px;
  margin: 30px 0;
  text-align: center;
}

.alter-intro p {
  font-size: 14px;
  font-weight: 600;
  font-family: 'Gothic A1';
  text-align: center;
}

.alter-intro .link {
  font-size: 17px;
  font-weight: 700;
  color: darkblue;
  text-decoration: underline;
}

.alter-intro .link:hover {
  cursor: pointer;
}
</style>