<template>
<!--  <layout></layout>-->
  <img id="img" src="./assets/1.png" alt="">
</template>
<script setup lang="ts">

  const instance = getCurrentInstance()
  // console.log(instance?.proxy?.$loading.show())
</script>
<style lang="scss">
#app {
  @include bfc;
}
</style>
