import axios from 'axios'

export default {
	namespaced: true,
	state: {
		status: '',
		token: localStorage.getItem('wzo_vue_user_token') || '',
		user: JSON.parse(localStorage.getItem('wzo_vue_user_user') || '{}'),
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, data) {
			console.log(data)
			state.status = 'success'
			if (data.token) {
				state.token = data.token
				localStorage.setItem('wzo_vue_user_token', data.token)
			}

			if (data.user) {
				state.user = data.user
				localStorage.setItem(
					'wzo_vue_user_user',
					JSON.stringify(data.user)
				)
			}
		},
		auth_error(state) {
			state.status = 'error'
			state.token = ''
			localStorage.removeItem('wzo_vue_user_token')
			localStorage.removeItem('wzo_vue_user_user')
		},
		logout(state) {
			state.status = ''
			state.token = ''
			state.user = null
			localStorage.removeItem('wzo_vue_user_token')
			localStorage.removeItem('wzo_vue_user_user')
		},
	},
	actions: {
		login({ commit }, credentials) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios
					.post(
						'https://academy.wezeo.dev/cms/api/v1/auth/login',
						credentials
					)
					.then((resp) => {
						const token = resp.data.data.token
						const user = resp.data.data.user
						console.log(resp)
						commit('auth_success', { token: token, user: user })
						resolve(resp)
					})
					.catch((err) => {
						commit('auth_error')
						reject(err)
					})
			})
		},
		logout({ commit }) {
			return new Promise((resolve) => {
				let config = {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('wzo_vue_user_token')}`,
					},
				}
				axios
					.post(
						'https://academy.wezeo.dev/cms/api/v1/auth/invalidate',
						null,
						config
					)
					.finally(() => {
						commit('logout')
						resolve(null)
					})
			})
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		authStatus: (state) => state.status,
		user: (state) => state.user,
		token: (state) => state.token,
	},
}
