<template>
  <div class="select-page-wrapper">
    <div class="select-message">
      <div>세 가지의 재료 중 한가지의 재료로 구조물을 만들고자 합니다.</div>
      <div>구조물을 만든 후 떨어트렸을 때<br>망가지지 않을 것 같은 재료를 선택해 주세요.</div>
    </div>
    <div class="items">
      <div class="item">
        <img src="../assets/items/sample.png" alt="sample">
      </div>
      <div class="item">
        <img src="../assets/items/wood.jpg" alt="wood" v-on:click="saveItemNum(1)">
        <div class="item-name">①WOOD</div>
      </div>
      <div class="item">
        <img src="../assets/items/steel.jpg" alt="steel" v-on:click="saveItemNum(2)">
        <div class="item-name">②STEEL</div>
      </div>
      <div class="item">
        <img src="../assets/items/thread.jpg" alt="thread" v-on:click="saveItemNum(3)">
        <div class="item-name">③THREAD</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    saveItemNum(num) {
      this.$store.commit('saveNum', num)
      this.$router.push('/process/1')
    }
  }
}
</script>

<style scoped>
.select-page-wrapper {
  background-color: #1d2652;
  height: 100%;
}

.select-message {
  background-color: antiquewhite;
  font-family: 'Noto Serif KR';
  text-align: center;
  margin: 0 10px;
  font-size: 3.4vw;
  padding: 10px 0;
  line-height: 1.8;
}

img {
  width: 50%;
  display: block;
  margin: 0 auto;
}

.item {
  position: relative;
  margin: 10px 0;
}

.item-name {
  position: absolute;
  color: antiquewhite;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Bitter';
  font-size: 1.1em;
}
</style>