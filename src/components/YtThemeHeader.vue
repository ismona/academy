<template>
	<div class="theme-header">
		<img v-if="path" :src="`${path}`" alt="img" width="200" />
		<h2>{{ name }}</h2>
	</div>
</template>

<script>
export default {
	props: ['name', 'path'],
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
