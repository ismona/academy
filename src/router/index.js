import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomePage from '../pages/HomePage.vue'
import ThemePage from '../pages/ThemePage.vue'
import CoursePage from '../pages/CoursePage.vue'
import LessonPage from '../pages/LessonPage.vue'
import YtThemePage from '../pages/YtThemePage.vue'
import YtCoursePage from '../pages/YtCoursePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		name: 'home',
		path: '/home',
		component: HomePage,
	},
	{
		path: '/login',
		component: LoginPage,
	},
	{
		path: '/signup',
		component: SignUpPage,
	},
	{
		path: '/theme/:slug',
		component: ThemePage,
	},
	{
		path: '/yt-theme/:slug',
		component: YtThemePage,
	},
	{
		path: '/course/:slug',
		component: CoursePage,
	},
	{
		name: 'Youtube Course Page',
		path: '/yt-course/:slug',
		component: YtCoursePage,
	},
	{
		name: 'Lesson Page',
		path: '/lesson/:slug',
		component: LessonPage,
	},
	{
		name: 'profile',
		path: '/profile',
		component: ProfilePage
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
