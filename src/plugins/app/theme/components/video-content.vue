<template>
	<div class="wrapper">
		<div v-for="video in videos" :key="video.id">
			<h2>{{ video.content_description }}</h2>
			<div class="tags">
				<span v-for="tag in video.tags" :key="tag">#{{ tag }}</span>
			</div>
			<video width="320">
				<source :src="`${video.content_shot}`" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	props: ['themeId'],
	data() {
		return {
			videos: [],
		}
	},
	methods: {
		getVideos() {
			axios
				.get(`https://academy.wezeo.dev/cms/api/v1/themes/${this.themeId}/feed`)
				.then((response) => (this.videos = response.data.data))
		},
	},
	mounted() {
		this.getVideos()
	},
}
</script>

<style scoped>
.wrapper {
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
span {
	display: inline-block;
	margin-right: 10px;
}
.tags {
	padding: 20px 0;
}
</style>
