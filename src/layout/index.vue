<template>
  <div class="xm-box flex ">
    <div>
      <Menu></Menu>
    </div>
    <div class="xm-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
@include b(box){
  @include bfc;
  @include e(right){
    flex: 1;
    display: flex;
    flex-direction: column;

  }
}

</style>