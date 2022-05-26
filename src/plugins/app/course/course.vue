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
			<lesson-header
				v-if="courses.image"
				:name="courses.name"
				:path="courses.image.path"
				:description="courses.description"
			></lesson-header>
			<div class="lessons-wrapper">
				<lesson-card
					v-for="lesson in courses.lessons"
					:key="lesson.id"
					:name="lesson.name"
					:videos="lesson.video_lessons"
					:slug="lesson.slug"
				></lesson-card>
			</div>
			<div class="course-videos">
				<h6>Course Videos</h6>
			</div>
		</ion-content>
	</ion-page>
</template>

<script>
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonBackButton,
	IonButtons,
} from '@ionic/vue'

import axios from 'axios'
import LessonCard from './components/lesson-card.vue'
import LessonHeader from './components/lesson-header.vue'

export default {
	data() {
		return {
			courseSlug: this.$route.params.slug,
			courses: [],
		}
	},
	methods: {
		getLessons() {
			axios
				.get(
					`https://academy.openlab.sk/cms/api/v1/courses/${this.courseSlug}`
				)
				.then((response) => (this.courses = response.data.data))
		},
	},
	mounted() {
		this.getLessons()
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonButtons,
		LessonCard,
		LessonHeader,
	},
}
</script>

<style scoped>
.lessons-wrapper, .course-videos {
	max-width: 1200px;
	margin: auto;
}
</style>
