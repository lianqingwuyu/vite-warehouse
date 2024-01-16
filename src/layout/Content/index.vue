<script setup lang="ts">

</script>

<template>
  <div class="xm-content">
    <router-view></router-view>
<!--    <div class="xm-content__itexms" v-for="i in 100">{{ i }}</div>-->
  </div>
</template>

<style scoped lang="scss">
@include b(content) {
  flex: 1;
  overflow: auto;
  @include e(items) {
    padding: 10px;
    margin:10px;
    border:1px solid #ccc;
    border-radius: 4px;
  }
}
</style>