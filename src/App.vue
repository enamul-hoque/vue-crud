<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">List</router-link> |
			<router-link to="/create">Create</router-link> |
			<router-link to="/update">Update</router-link>
		</div>

		<router-view />
	</div>
</template>

<style>
@import '~vuejs-noty/dist/vuejs-noty.css';

body {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#app {
	width: 1170px;
	max-width: 100%;
	margin: 0 auto;
}

#nav {
	padding: 30px;
	text-align: center;
	color: #2c3e50;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

.e-grid .e-headercell[aria-sort] {
	cursor: pointer;
}

.e-filtertext.e-disable + span {
    display: block !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -1px;
    background-color: #fff !important;
	cursor: default !important;
    z-index: 1;
}

.e-filtertext.e-disable + span:before {
    display: none;
}

.noty_type__success {
	background-color: #42b983 !important;
}
</style>
