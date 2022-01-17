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
				<h2>Prihláste sa</h2>
				<p>alebo si vytvorte <a href="">nový účet</a></p>
				<a @click.prevent="dev_prefill_mentor">mentor</a>
				<a @click.prevent="dev_prefill_student">student</a>
				<form @submit.prevent="login">
					<div class="form-control">
						<ion-input
							type="email"
							placeholder="Email"
							id="email"
							v-model.trim="form.login"
						/>
					</div>
					<div class="form-control">
						<ion-input
							type="password"
							placeholder="Heslo"
							id="password"
							v-model.trim="form.password"
						/>
					</div>
					<p>
						Zadajte platný email a heslo (najmenej 6 znakov).
					</p>
					<ion-button type="submit">Prihlásiť sa</ion-button>
				</form>
				<p>Zabudli ste si heslo? <a href="">Vytvorte si nové</a></p>
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
	IonButton,
} from '@ionic/vue'

export default {
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonBackButton,
		IonButtons,
		IonInput,
		IonButton,
	},
	data() {
		return {
			form: { login: '', password: '' },
		}
	},
	methods: {
		login() {
			this.$store
				.dispatch('auth/login', this.form)
				.then(() => this.$router.push({ name: 'home' }))
				.catch((err) => console.log(err))
		},
		dev_prefill_mentor() {
			this.form = {
				login: 'mentor@wezeo.dev',
				password: '1234567890',
			}
		},
		dev_prefill_student() {
			this.form = {
				login: 'student@wezeo.dev',
				password: '1234567890',
			}
		},
	},
}
</script>

<style>
a {
	cursor: pointer;
}
.login-wrapper {
	max-width: 900px;
	margin: 50px auto;
	text-align: center;
}

.login-wrapper a:first-of-type {
	margin-right: 10px;
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
