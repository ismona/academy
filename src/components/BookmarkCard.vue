<template>
	<ion-card v-for="bookmark in bookmarked" :key="bookmark.id">
		<ion-card-content>
			<img
				v-if="bookmark"
				:src="`${bookmark.content_thumbnail}`"
				width="140"
			/>
			<ion-card-subtitle
				><span v-for="tag in bookmark.tags" :key="tag">
					#{{ tag }}
				</span></ion-card-subtitle
			>
		</ion-card-content>
	</ion-card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

import { IonCard, IonCardContent, IonCardSubtitle } from '@ionic/vue'

const api = {
	bookmark: (id) =>
		axios
			.get(
				`https://academy.wezeo.dev/cms/api/v1/users/${id}/lessons?types=bookmark`
			)
			.then((response) => response.data.data),
}

export default {
	data() {
		return {
			bookmarked: null,
		}
	},
	components: {
		IonCard,
		IonCardContent,
		IonCardSubtitle,
	},
	async created() {
		try {
			this.bookmarked = await api.bookmark(this.user.id)
		} catch (error) {
			this.bookmarked = { error: error }
		}
	},
	computed: {
		...mapGetters('auth', ['user']),
	},
}
</script>

<style scoped>
ion-card {
	max-width: fit-content;
}
</style>
