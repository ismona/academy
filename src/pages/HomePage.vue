<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Academy</ion-title>
				<ion-button
					slot="end"
					class="signup-link"
					router-link="/profile"
					v-if="isLoggedIn"
					>Profil</ion-button
				>
				<ion-button
					slot="end"
					class="signup-link"
					v-if="isLoggedIn"
					@click.prevent="logout"
					>Odhlásiť sa</ion-button
				>
				<ion-button
					slot="end"
					class="signup-link"
					router-link="/login"
					v-if="!isLoggedIn"
					>Prihlásiť sa ➔</ion-button
				>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-grid>
				<ion-row class="buttons-wrapper">
					<ion-col>
						<ion-button color="danger">Wezeo</ion-button>
					</ion-col>
					<ion-col>
						<div>
							<ion-button color="danger">OpenLab</ion-button>
						</div>
					</ion-col>
					<ion-col>
						<div>
							<ion-button color="danger">PowerPlay</ion-button>
						</div>
					</ion-col>
				</ion-row>

				<ion-searchbar></ion-searchbar>

				<ion-segment
					@ionChange="segmentChanged($event)"
					:value="selectedSegment"
				>
					<ion-segment-button value="all">
						<ion-label>Všetky</ion-label>
					</ion-segment-button>
					<ion-segment-button disabled value="style">
						<ion-label>Style</ion-label>
					</ion-segment-button>
					<ion-segment-button value="frontend">
						<ion-label>Frontend</ion-label>
					</ion-segment-button>
					<ion-segment-button value="backend">
						<ion-label>Backend</ion-label>
					</ion-segment-button>
				</ion-segment>

				<h2>Temy</h2>
				<ion-row class="cards-wrapper">
					<theme-card
						v-for="theme in filteredThemes"
						:router-link="`/theme/${theme.slug}`"
						:key="theme.id"
						:name="theme.name"
						:tags="theme.tags"
						:id="theme.id"
						:image="theme.image"
					></theme-card>
				</ion-row>

				<h2>Youtube lekcie</h2>
				<ion-row class="cards-wrapper">
					<theme-card
						v-for="ytLesson in ytLessons"
						:router-link="`/yt-theme/${ytLesson.slug}`"
						:key="ytLesson.id"
						:name="ytLesson.name"
						:tags="ytLesson.tags"
						:id="ytLesson.id"
						:image="ytLesson.image"
					></theme-card>
				</ion-row>
			</ion-grid>
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
	IonGrid,
	IonRow,
	IonCol,
	IonButton,
	IonSearchbar,
	IonSegment,
	IonSegmentButton,
	IonLabel,
} from '@ionic/vue'

import ThemeCard from '../components/ThemeCard.vue'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			selectedSegment: 'all',
			themes: [],
			filteredThemes: [],
			ytLessons: [],
			filteredLessons: [],
		}
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonGrid,
		IonRow,
		IonCol,
		IonButton,
		IonSearchbar,
		IonSegment,
		IonSegmentButton,
		IonLabel,
		ThemeCard,
	},
	methods: {
		segmentChanged(ev) {
			this.selectedSegment = ev.detail.value
			if (this.selectedSegment === 'all') {
				this.filteredThemes = this.themes
			} else {
				this.filteredThemes = this.themes.filter((val) =>
					val.tags.includes(this.selectedSegment)
				)
			}
			console.log(this.filteredLessons)
		},
		logout() {
			this.$store.dispatch('auth/logout').then(() => {
				this.$router.push('home')
			})
		},
		async getThemes() {
			await axios
				.get('https://academy.wezeo.dev/cms/api/v1/themes')
				.then((response) => (this.themes = response.data.data))
		},
		async getYtLessons() {
			await axios
				.get(
					'https://open-academy.sk/cms/api/courses?results_per_page=1000'
				)
				.then((response) => (this.ytLessons = response.data.data))
		},
	},
	computed: {
		...mapGetters('auth', ['isLoggedIn']),
	},
	async mounted() {
		await this.getThemes()
		await this.getYtLessons()
		this.filteredThemes = this.themes
		console.log("nieco:" + this.ytLessons)
	},
}
</script>

<style>
.buttons-wrapper,
ion-searchbar,
ion-segment {
	max-width: 650px;
	margin: auto;
}
.cards-wrapper {
	max-width: 900px;
	margin: auto;
	padding: 0.7rem;
}
ion-grid {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
ion-content {
	--ion-background-color: var(--ion-color-light);
}
ion-button {
	max-width: 206px;
}

ion-searchbar {
	--icon-color: black !important;
	--background: var(--ion-color-primary-contrast) !important;
	--box-shadow: 0px 0px 15px -8px rgba(0, 0, 0, 0.2) !important;
	--border-radius: 20px !important;
	max-width: 650px;
	margin: 15px auto;
	padding: 0 2px !important;
	--placeholder-font-weight: 300 !important;
}

ion-segment ion-segment-button {
	--border-radius: 3px;
	--indicator-color: var(--ion-color-primary);
	--color-checked: white;
	--color: var(--ion-color-primary);
}
.segment-button-checked {
	background: var(--ion-color-primary);
	color: var(--color-checked);
	--border-radius: 3px;
	min-height: 40px;
}

img {
	margin-top: 2rem;
}

.signup-link {
	padding: 0 20px;
	cursor: pointer;
	font-weight: 700;
}
</style>
