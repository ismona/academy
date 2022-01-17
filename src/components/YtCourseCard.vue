<template>
	<ion-card>
		<ion-card-header>
			<ion-card-title>{{ name }}</ion-card-title>
		</ion-card-header>

		<ion-card-content>
			<ul>
				<li v-for="lesson in lessons" :key="lesson" @click="$router.push({name: 'Youtube Course Page', params: {slug: lesson.slug}})">{{ lesson.name }}</li>
			</ul>
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

export default {
	props: ['name', 'lessons'],
	components: {
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardTitle,
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
	max-width: 50%;
	margin: 30px auto;
}
ul {
	width: 100%;
	padding-left: 0;
}
li {
	cursor: pointer;
	background: rgb(230, 230, 230);
	margin: 10px 0;
	border-radius: 40px;
	padding: 15px;
	display: block;
}
</style>
