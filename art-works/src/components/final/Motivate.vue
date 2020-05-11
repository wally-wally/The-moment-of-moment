<template>
  <div class="wrapper">
    <div class="text">
      <span class="pl-2">바쁘게</span> 흘러가는 일상 중에 다른 면의 나와 직면하는 날이 왔었다. <br>
      선의의 행동과 어투와 생각을 하고 있는 동시에 이기적인 마음과 <br>
      모습을 동시에 가지고 있다는 것을 발견하게 되었다. <br>
      나 포함하여 모든 사람들은 선과 악의 두면이 공존하거나 <br>
      다른 면과 또 다른 면이 서로 공존하며 살고 있다고 생각한다. <br>
      하지만 그 두 면 중 하나의 면만 밖으로 보여지며 사람들은 밖으로 <br>
      보여진 모습만 인식하게 된다. <br>
      아무렇지 않던 시점에 잠재되어 있던 이기적인 것이 서로 공존할 때의 <br>
      그 순간의 찰나가 가장 인간적이고 진실된 모습이라고 생각한다. <br>
      그 순간의 찰나와 어떠한 의도를 가지고 실험을 시작하게 되었다. <br> 
    </div>
     <router-link to="/final/through">
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
  background-color: #1D2652;
  height: 100%
}

.text{
  font-family: 'Noto Serif KR';
  font-size: 3vw;
  color: antiquewhite;
  position: absolute; 
  left: 51%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  line-height: 2.3;
  letter-spacing: -0.1px;
}

i {
  color: antiquewhite;
  font-size: 47px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>