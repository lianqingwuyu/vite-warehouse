<template>
  <div>
    {{modelValue}}
    <h1>v-model</h1>
    <el-button @click="close">关闭</el-button>

    <input type="text" v-if="modelValue" />
  </div>
</template>

<script setup lang="ts">
const pros = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const close = ()=>{
  emit('update:modelValue', !pros.modelValue)
}
</script>

<style scoped lang="scss">

</style>