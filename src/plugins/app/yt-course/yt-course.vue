<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button default-href="/home"></ion-back-button>
				</ion-buttons>
				<ion-title>Academy</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="lesson-wrapper">
				<iframe
					width="560"
					height="315"
					v-if="lesson.content"
					:src="videoPath"
					frameborder="0"
				></iframe>
				<h2>{{ lesson.name }}</h2>
				<p v-if="lesson.content">
					{{ lesson.content[0].block_content }}
				</p>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import axios from 'axios'
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonBackButton,
	IonButtons,
} from '@ionic/vue'

export default {
	data() {
		return {
			lessonSlug: this.$route.params.slug,
			lesson: [],
			videoPath: '',
		}
	},
	methods: {
		getCourseLesson() {
			axios
				.get(
					`https://open-academy.sk/cms/api/lessons/slug/?q=${this.lessonSlug}`
				)
				.then((response) => (this.lesson = response.data.data))
		},
	},
	mounted() {
		this.getCourseLesson()
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonButtons,
	},
}
</script>

<style scoped>
.lesson-wrapper {
	max-width: 900px;
	margin: auto;
}
</style>
