<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-back-button
					slot="start"
					default-href="/home"
				></ion-back-button>
				<ion-button
					slot="end"
					class="signup-link"
					v-if="isLoggedIn"
					@click.prevent="logout"
					>Odhlásiť sa</ion-button
				>
				<ion-title>Profil</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="wrapper">
				<div class="profile-info">
					<h2>{{ user.name }} (id: {{ user.id }})</h2>
				</div>
				<ion-segment
					@ionChange="onChange($event.detail.value)"
					:value="activeTab"
				>
					<ion-segment-button value="bookmarks">
						<ion-icon :icon="bookmarks"></ion-icon>
						<ion-label>Uložené</ion-label>
					</ion-segment-button>
					<ion-segment-button value="like">
						<ion-icon :icon="heart"></ion-icon>
						<ion-label>Lajknuté</ion-label>
					</ion-segment-button>
					<ion-segment-button value="done">
						<ion-icon :icon="checkmarkDoneCircle"></ion-icon>
						<ion-label>Dokončené</ion-label>
					</ion-segment-button>
					<ion-segment-button value="tasks">
						<ion-icon :icon="checkmarkDoneCircleOutline"></ion-icon>
						<ion-label>Overené</ion-label>
					</ion-segment-button>
					<ion-segment-button value="projects">
						<ion-icon :icon="school"></ion-icon>
						<ion-label>Projekty</ion-label>
					</ion-segment-button>
				</ion-segment>

				<div v-if="activeTab == 'bookmarks'" class="active-card">
					<bookmark-card></bookmark-card>
				</div>
				<div v-if="activeTab == 'like'">
					<p>like</p>
				</div>
				<div v-if="activeTab == 'done'">
					<p>done</p>
				</div>
				<div v-if="activeTab == 'tasks'">
					<p>tasks</p>
				</div>
				<div v-if="activeTab == 'projects'">
					<p>projects</p>
				</div>
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
	IonSegment,
	IonSegmentButton,
	IonLabel,
} from '@ionic/vue'
import {
	bookmarks,
	heart,
	checkmarkDoneCircle,
	school,
	checkmarkDoneCircleOutline,
} from 'ionicons/icons'

import { mapGetters } from 'vuex'
import BookmarkCard from './components/bookmark-card.vue'

export default {
	data() {
		return {
			bookmarks,
			heart,
			checkmarkDoneCircle,
			school,
			checkmarkDoneCircleOutline,
			activeTab: 'bookmarks',
		}
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonSegment,
		IonSegmentButton,
		IonLabel,
		BookmarkCard,
	},
	methods: {
		logout() {
			this.$store.dispatch('auth/logout').then(() => {
				this.$router.replace('home')
			})
		},
		onChange(value) {
			if (value == 'bookmarks') {
				this.activeTab = 'bookmarks'
			} else if (value == 'like') {
				this.activeTab = 'like'
			} else if (value == 'done') {
				this.activeTab = 'done'
			} else if (value == 'tasks') {
				this.activeTab = 'tasks'
			} else if (value == 'projects') {
				this.activeTab = 'projects'
			}
		},
	},
	computed: {
		...mapGetters('auth', ['isLoggedIn', 'user']),
	},
}
</script>

<style scoped>
.wrapper {
	max-width: 900px;
	margin: auto;
	padding: 0.7rem;
}
ion-segment-button {
	min-height: 30px;
	margin-right: 10px;
	display: flex;
}
.active-card {
	display: flex;
}
</style>
