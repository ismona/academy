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
			<div
				class="lesson-card"
				v-for="lesson in lesson.video_lessons"
				:key="lesson"
			>
				<div class="lesson-content">
					<h2>{{ lesson.content_description }}</h2>
					<div class="tags">
						<span v-for="tag in lesson.tags" :key="tag">
							#{{ tag }}
						</span>
					</div>
					<img
						v-if="lesson.content_thumbnail"
						:src="`${lesson.content_thumbnail}`"
						alt="theme-img"
						height="600"
					/>
				</div>
				<div class="sidebar-icons">
					<a href="#">bookmark</a>
					<a href="#">heart</a>
					<p>{{ lesson.likes }}</p>
					<a @click="openModal(lesson.id)">comments</a>
				</div>
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
	modalController,
} from '@ionic/vue'

import CommentsModal from '../components/CommentsModal.vue'

export default {
	data() {
		return {
			courseSlug: this.$route.params.slug,
			lesson: [],
		}
	},
	methods: {
		getLessons() {
			axios
				.get(
					`https://academy.wezeo.dev/cms/api/v1/lessons/${this.courseSlug}`
				)
				.then((response) => (this.lesson = response.data.data))
		},
		async openModal(payload) {
			const modal = await modalController.create({
				component: CommentsModal,
				componentProps: { id: payload },
			})
			return modal.present()
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
	},
}
</script>

<style scoped>
.lesson-card {
	max-width: 750px;
	margin: 10px auto;
	background: #fff;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.sidebar-icons {
	text-align: right;
}
img {
	padding-bottom: 20px;
}
a {
	display: block;
	margin: 20px 0;
}
p {
	margin: 0;
	text-align: right;
}
</style>
