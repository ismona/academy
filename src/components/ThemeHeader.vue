<template>
  <div class="theme-header">
    <img v-if="path" :src="`${path}`" alt="img" width="200">
    <h2>{{ name }}</h2>
    <p v-html="description"></p>
  </div>
</template>

<script>
export default {
   props: ['name', 'path', 'description'],
}
</script>

<style scoped>
.theme-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
}
</style>
