import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/landing',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		component: () => import('../views/Dashboard/Dashboard.vue'),
	},
	{
		path: '/teams',
		name: 'Teams',
		layout: "dashboard",
		component: () => import('../views/Teams/Teams.vue'),
	},
	{
		path: '/users',
		name: 'Users',
		layout: "dashboard",
		component: () => import('../views/Users/Users.vue'),
	},
	{
		path: '/tasks',
		name: 'Tasks',
		layout: "dashboard",
		component: () => import('../views/Tasks/Tasks.vue'),
	},
	{
		path: '/landing',
		name: 'Landing',
		layout: "dashboard",
		component: () => import('../views/Landing/Landing.vue'),
	},
	{
		path: '/reports',
		name: 'Reports',
		layout: "dashboard",
		component: () => import('../views/Reports/Reports.vue'),
	},
	{
		path: '/settings',
		name: 'Settings',
		layout: "dashboard",
		component: () => import('../views/Settings/Settings.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		component: () => import('../views/Tables.vue'),
	},
	{
		path: '/billing',
		name: 'Billing',
		layout: "dashboard",
		component: () => import('../views/Billing.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
		},
		component: () => import('../views/Profile/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		component: () => import('../views/Sign-In/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import('../views/Sign-Up/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
