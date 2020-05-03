<template>
  <div class="wrapper">
    <div class="image-wrapper">
      <img data-aos="fade-down" data-aos-duration="1000" :src="imgUrl('01')" alt="image1">
      <img data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300" :src="imgUrl('02')" alt="image2">
      <img data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600" :src="imgUrl('03')" alt="image3">
    </div>
    <router-link to="/process/3">
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
    imgUrl(number) {
      return require(`../../assets/process_images/${this.source[this.num - 1]}/processing/${number}.jpg`)
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #1d2652;
  height: 100%;
}

img {
  width: 64%;
  display: block;
  margin: 0 auto;
  padding-bottom: 14px;
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