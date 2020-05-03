<template>
  <div class="wrapper">
    <div class="image-wrapper">
      <img data-aos="fade-down" data-aos-duration="1000" :src="imgUrl('03')" alt="image03">
      <img data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" :src="imgUrl('04')" alt="image04">
    </div>
    <router-link to="/process/6">
      <i class="fas fa-angle-double-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: this.$store.state.selectedItem,
      source: ['wood', 'steel', 'thread']
    }
  },
  methods: {
    imgUrl: function(number) {
      return require(`../../assets/process_images/${this.source[this.num - 1]}/testing/${number}.png`)
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #1d2652;
  height: 100%;
}

.image-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

img {
  width: 80%;
  display: block;
  margin: 0 auto; /* 너비의 값이 지정되어 있고 display 속성이 block일 때 가운데 정렬 하는 방법 */
}

img:first-child {
  padding-bottom: 40px;
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