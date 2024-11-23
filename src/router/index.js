import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [
  // Catch-all route for 404 Not Found
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
  },
  // Home route
  {
    path: '/',
    name: 'Home',
    redirect: '/landing',
  },
  // Dashboard route
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: "dashboard",
    component: () => import('../views/Dashboard/Dashboard.vue'),
  },
  // Teams List
  {
    path: '/teams',
    name: 'Teams',
    layout: "dashboard",
    component: () => import('../views/Teams/Teams.vue'),
  },
  // Team Detail (Top-Level Route)
  {
    path: '/teams/team/:id',
    name: 'TeamDetail',
    layout: "dashboard",
    component: () => import('../views/Teams/Team/Team.vue'),
    props: true,
  },
  // Users List
  {
    path: '/users',
    name: 'Users',
    layout: "dashboard",
    component: () => import('../views/Users/Users.vue'),
  },
  // User Detail (Top-Level Route)
  {
    path: '/users/user/:id',
    name: 'UserDetail',
    layout: "dashboard",
    component: () => import('../views/Users/User/User.vue'),
    props: true,
  },
  // Tasks List
  {
    path: '/tasks',
    name: 'Tasks',
    layout: "dashboard",
    component: () => import('../views/Tasks/Tasks.vue'),
  },
  // Task Detail (Top-Level Route)
  {
    path: '/tasks/task/:id',
    name: 'TaskDetail',
    layout: "dashboard",
    component: () => import('../views/Tasks/Task/Task.vue'),
    props: true,
  },
  // Landing Page
  {
    path: '/landing',
    name: 'Landing',
    layout: "dashboard",
    component: () => import('../views/Landing/Landing.vue'),
  },
  // Tables Page
  {
    path: '/tables',
    name: 'Tables',
    layout: "dashboard",
    component: () => import('../views/Tables.vue'),
  },
  // Billing Page
  {
    path: '/billing',
    name: 'Billing',
    layout: "dashboard",
    component: () => import('../views/Billing.vue'),
  },
  // RTL Page
  {
    path: '/rtl',
    name: 'RTL',
    layout: "dashboard-rtl",
    meta: {
      layoutClass: 'dashboard-rtl',
    },
    component: () => import('../views/RTL.vue'),
  },
  // Profile Page
  {
    path: '/Profile',
    name: 'Profile',
    layout: "dashboard",
    meta: {
      layoutClass: 'layout-profile',
    },
    component: () => import('../views/Profile/Profile.vue'),
  },
  // Sign-In Page
  {
    path: '/sign-in',
    name: 'Sign-In',
    component: () => import('../views/Sign-In/Sign-In.vue'),
  },
  // Sign-Up Page
  {
    path: '/sign-up',
    name: 'Sign-Up',
    meta: {
      layoutClass: 'layout-sign-up',
    },
    component: () => import('../views/Sign-Up/Sign-Up.vue'),
  },
];

// Function to add layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route, parentLayout = "default") {
  route.meta = route.meta || {};
  route.meta.layout = route.layout || parentLayout;

  return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

const router = new VueRouter({
  mode: 'history', // Using history mode for clean URLs
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
