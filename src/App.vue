<template>
	<div id="nav">
		<router-link to="/">All Discussions</router-link> |
		<router-link to="/tweet">My Tweets</router-link> |
		<the-header></the-header> |
    <router-link to="/profile">Profile</router-link> |
		<router-link to="/signUp">SignUp</router-link> |
		<router-link to="/login">LogIn</router-link> 
	</div>
	<router-view />
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'

export default{
  components:{
    TheHeader
  }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
}

#nav {
	padding: 30px;
  display: flex;
  justify-content:space-between;
  align-items: center;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
