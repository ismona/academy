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
			<div class="login-wrapper">
				<h2>Vytvorte si účet</h2>
				<p>alebo <a href="">sa prihláste</a></p>
				<form @submit.prevent="submitForm">
					<div class="form-control">
						<ion-input type="email" placeholder="Email" id="email" v-model.trim="email" />
					</div>
					<div class="form-control">
						<ion-input type="password" placeholder="Heslo" id="password" v-model.trim="password" />
					</div>
					<p v-if="!formIsValid">Zadajte platný email a heslo (najmenej 6 znakov).</p>
					<ion-button type="submit">Vytvoriť účet</ion-button>
				</form>
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
	IonInput,
} from '@ionic/vue'

export default {
	data() {
		return {
			email: '',
			password: '',
			formIsValid: true
		}
	},
	methods: {
		submitForm() {
			this.formIsValid = true
			if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
				this.formIsValid = false
				return
			}
			this.$store.dispatch('signup', {
				email: this.email,
				password: this.password
			})
		}
	},
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonButtons,
		IonInput,
	},
}
</script>

<style>
.login-wrapper {
	max-width: 900px;
	margin: 50px auto;
	text-align: center;
}

.login-wrapper p {
	text-align: center;
}

.login-wrapper form {
	margin-bottom: 50px;
	text-align: left;
}

.login-wrapper ion-input,
.login-wrapper ion-button {
	max-width: 450px;
	border-radius: 25px;
	height: 50px;
}

.login-wrapper ion-input {
	background: #fff;
	margin: 30px auto 0;
}

.login-wrapper .native-input {
	padding: 30px;
}

.login-wrapper ion-button {
	margin: 30px auto 0;
	width: 100%;
	display: block;
}

</style>