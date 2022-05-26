<template>
  <div class="lesson-header">
     <img v-if="path" :src="`${path}`" alt="img" height="80"/>
    <h2>{{ name }}</h2>
    <p v-html="description"></p>
  </div>
</template>

<script>
export default {
    props: ['name', 'path', 'description']
}
</script>

<style scoped>
.lesson-header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
}
</style>