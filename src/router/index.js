import { createRouter, createWebHashHistory } from "vue-router";
import Discussions from "../views/Discussions.vue";
import Tweet from "../views/Tweet.vue"
import Profile from "../views/Profile.vue"
import SignUp from "../views/SignUp.vue"
import LogIn from "../views/LogIn.vue"


const routes = [
	{
		path: "/",
		name: "Discussions",
		component: Discussions
	},
	{
		path: "/tweet",
		name: "Tweet",
		// route level code-splitting
		// this generates a separate chunk (tweet.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Tweet
	},
	{
		path: "/login",
		name: "Login",
		// route level code-splitting
		// this generates a separate chunk (login.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: LogIn, 
	},{
		path: "/profile",
		name: "Profile",
		// route level code-splitting
		// this generates a separate chunk (tweet.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Profile
	},{
		path: "/signup",
		name: "SignUp",
		// route level code-splitting
		// this generates a separate chunk (tweet.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: SignUp
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
