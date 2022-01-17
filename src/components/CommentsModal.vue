<template>
	<ion-header>
		<ion-toolbar>
			<div class="comments-header">
				<ion-title>Komentáre</ion-title>
				<span @click="closeModal">X</span>
			</div>
		</ion-toolbar>
	</ion-header>
	<ion-content>
		<div class="comment" v-for="comment in comments" :key="comment">
			<div class="profile-img"></div>
			<div class="comment-content">
				<h6>
					{{ comment.author.name }}
				</h6>
				<div class="text">
					<p class="content">{{ comment.content }}</p>
					<p class="date">{{ comment.created_at }}</p>
				</div>
				<div
					class="replies"
					v-for="reply in comment.replies"
					:key="reply"
				>
					<div class="profile-img"></div>
					<div class="reply-content">
						<h6>{{ reply.author.name }}</h6>
						<div class="text">
							<p class="content">{{ reply.content }}</p>
							<p class="date">{{ reply.created_at }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</ion-content>
	<ion-footer>
		<ion-toolbar
			><ion-input placeholder="Pridať komentár..."></ion-input
		></ion-toolbar>
	</ion-footer>
</template>

<script>
import axios from 'axios'

import {
	IonContent,
	IonHeader,
	IonTitle,
	IonToolbar,
	modalController,
} from '@ionic/vue'

export default {
	data() {
		return {
			comments: [],
		}
	},
	components: { IonContent, IonHeader, IonTitle, IonToolbar },
	props: ['id'],
	methods: {
		async closeModal() {
			await modalController.dismiss()
		},
		getComments() {
			axios
				.get(
					`https://academy.wezeo.dev/cms/api/v1/comments/lesson/${this.id}`
				)
				.then(
					(response) => (this.comments = response.data.data.reverse())
				)
		},
	},
	mounted() {
		this.getComments()
	},
}
</script>

<style scoped>
.modal {
}
.comments-header {
	display: flex;
}
.comment,
.replies {
	padding: 10px 20px;
	display: flex;
}

.date {
	font-size: 14px;
	color: gray;
}
.text {
	display: flex;
	align-items: baseline;
}

h6 {
	font-weight: 700;
	color: gray;
	margin: 0;
}
.content {
	font-size: 15px;
	font-weight: 500;
	margin-right: 10px;
}
.profile-img {
	background: grey;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	display: block;
	margin-right: 20px;
}
span {
	font-weight: 700;
	font-size: 18px;
	padding: 20px;
	cursor: pointer;
}
</style>
