<template>
  <div class="loading" v-if="isShow">
    加载中...
  </div>
</template>

<script setup lang="ts">
const isShow = ref<boolean>(false)
const show = () => {
  isShow.value = true
}
const hide = () => {
  isShow.value = false
}
defineExpose({
  isShow,
  show,
  hide,
})
</script>

<style scoped lang="scss">
.loading{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: #000;
  color: #fff;
}
</style>