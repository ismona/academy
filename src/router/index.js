import { createRouter, createWebHistory } from '@ionic/vue-router'
import Home from '../plugins/app/home/home.vue'
import Theme from '../plugins/app/theme/theme.vue'
import Course from '../plugins/app/course/course.vue'
import Lesson from '../plugins/app/lesson/lesson.vue'
import YtTheme from '../plugins/app/yt-theme/yt-theme.vue'
import YtCourse from '../plugins/app/yt-course/yt-course.vue'
import Login from '../plugins/app/login/login.vue'
import SignUp from '../plugins/app/registration/signup.vue'
import Profile from '../plugins/app/profile/profile.vue'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		name: 'home',
		path: '/home',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/signup',
		component: SignUp,
	},
	{
		path: '/theme/:slug',
		component: Theme,
	},
	{
		path: '/yt-theme/:slug',
		component: YtTheme,
	},
	{
		path: '/course/:slug',
		component: Course,
	},
	{
		name: 'Youtube Course Page',
		path: '/yt-course/:slug',
		component: YtCourse,
	},
	{
		name: 'Lesson Page',
		path: '/lesson/:slug',
		component: Lesson,
	},
	{
		name: 'profile',
		path: '/profile',
		component: Profile
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
