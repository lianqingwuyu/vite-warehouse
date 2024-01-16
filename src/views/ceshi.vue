<template>
  <el-button @click="toPage">跳转</el-button>
</template>
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
const toPage = () => {

  router.push({
    path: '/ceshi2'
  })
}
</script>