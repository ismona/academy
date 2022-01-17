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
			<theme-header
				v-if="theme.image"
				:description="theme.description"
				:name="theme.name"
				:path="theme.image.path"
			></theme-header>

			<ion-segment
				@ionChange="segmentChanged($event)"
				:value="selectedSegment"
			>
				<ion-segment-button value="project-content">
					<ion-label>Projekty</ion-label>
				</ion-segment-button>
				<ion-segment-button value="video-content">
					<ion-label>Vsetky videa</ion-label>
				</ion-segment-button>
			</ion-segment>
			<component
				v-if="theme.id"
				:is="selectedSegment"
				:themeId="theme.id"
			></component>
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
	IonLabel,
	IonSegment,
	IonSegmentButton,
} from '@ionic/vue'

import ThemeHeader from '../components/ThemeHeader.vue'
import ProjectContent from '../components/ProjectContent.vue'
import VideoContent from '../components/VideoContent.vue'
import axios from 'axios'

export default {
	data() {
		return {
			themeSlug: this.$route.params.slug,
			selectedSegment: 'project-content',
			theme: [],
		}
	},
	provide() {
		return {
			$theme: () => this.theme,
		}
	},
	methods: {
		segmentChanged(ev) {
			this.selectedSegment = ev.detail.value
		},
		getTheme() {
			axios
				.get(
					`https://academy.wezeo.dev/cms/api/v1/themes/${this.themeSlug}`
				)
				.then((response) => (this.theme = response.data.data))
		},
	},
	mounted() {
		this.getTheme()
		console.log(this.$route)
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonButtons,
		ThemeHeader,
		IonLabel,
		IonSegment,
		IonSegmentButton,
		ProjectContent,
		VideoContent,
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
