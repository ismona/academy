<template>
 <!-- <div class="message">
    <h4>Nenachadzaju sa tu ziadne kurzy.</h4>
  </div>-->
  <div class="project-wrapper">
   <project-card
      v-for="course in computedProperty.courses"
      :router-link="`/course/${course.slug}`"
      :name="course.name"
      :key="course.id"
      :path="course.image"
      :description="course.description"
    ></project-card>
  </div>
</template>
<script>
import ProjectCard from './project-card.vue'

export default {
  inject: ['$theme'],
  computed: {
    computedProperty() {
      return this.$theme()
    },
  },
  components: {
    ProjectCard,
  },
}
</script>

<style scoped>
</style>