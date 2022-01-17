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
			<yt-theme-header
				v-if="ytTheme.image"
				:name="ytTheme.name"
				:path="ytTheme.image.path"
			></yt-theme-header>
			<yt-course-card
				v-for="lesson in ytTheme.lessons"
				:key="lesson"
				:name="lesson.group_name"
				:lessons="lesson.group_lessons"
			></yt-course-card>
		</ion-content>
	</ion-page>
</template>

<script>
import YtThemeHeader from '../components/YtThemeHeader.vue'
import YtCourseCard from '../components/YtCourseCard.vue'

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

export default {
	data() {
		return {
			ytThemeSlug: this.$route.params.slug,
			ytTheme: [],
		}
	},

	methods: {
		getYtTheme() {
			axios
				.get(
					`https://open-academy.sk/cms/api/courses/slug/?q=${this.ytThemeSlug}`
				)
				.then((response) => (this.ytTheme = response.data.data))
		},
	},
	mounted() {
		this.getYtTheme()
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonButtons,
		YtThemeHeader,
		YtCourseCard,
	},
}
</script>

<style scoped>
.project-wrapper {
	max-width: 1100px;
	margin: auto;
	padding: 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.message {
	text-align: center;
}

ion-segment {
	margin-top: 1rem;
}
</style>
