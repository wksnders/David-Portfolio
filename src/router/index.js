import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/contact-me',
			name: 'Contact',
			component: () => import('../views/ContactPage.vue'),
        },
		{
    		path: '/testimonials',
    		name: 'Testimonials',
    		component: () => import('../views/TestimonialsPage.vue'),
  		},
		{
			path: '/contact-thanks',
			name: 'Contact',
			component: () => import('../views/ContactPage.vue'),
        },
	],
  	scrollBehavior(to, from, savedPosition) {
  	  	if (to.hash) {
  	  	  	return {
  	  	   		el: to.hash,
  	  	    	behavior: 'smooth',
  	  	  	}
  	  	}
  	},
});

export default router;
