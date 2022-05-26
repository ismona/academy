<template>
  <div class="thumb-wrapper">
    <img v-if="path" :src="`${path}`" alt="img" height="250" />
    <h2>{{ name }}</h2>
    <div class="tags">
      <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'path', 'tags'],
}
</script>

<style scoped>
span {
  padding-right: 0.5rem;
}
.thumb-wrapper {
  width: 33.33%;
  cursor: pointer;
}
img {
  border-radius: 5px;
  cursor: pointer;
}

</style>
