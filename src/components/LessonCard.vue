<template>
	<ion-card>
		<ion-card-header>
			<ion-card-title>{{ name }}</ion-card-title>
		</ion-card-header>

		<ion-card-content>
			<thumbnail-card
				v-for="video in videos"
				:key="video.id"
				:name="video.name"
				:path="video.content_thumbnail"
				:tags="video.tags"
				@click="
					$router.push({
						name: 'Lesson Page',
						params: { slug: slug },
					})
				"
			></thumbnail-card>
		</ion-card-content>
	</ion-card>
</template>

<script>
import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from '@ionic/vue'

import ThumbnailCard from '../components/ThumbnailCard.vue'

export default {
	props: ['name', 'videos', 'slug'],
	components: {
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardTitle,
		ThumbnailCard,
	},
}
</script>

<style scoped>
ion-card-content {
	display: flex;
	flex-direction: row;
}

ion-card {
	background: #fff;
}
</style>
