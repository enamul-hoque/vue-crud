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
	padding: 30px 30px 60px;
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

/** Form Wrap **/
.form-wrap {
	max-width: 600px;
	margin: 0 auto;
}

/** Form Field **/
.field-item {
	display: block;
	margin-bottom: 40px;
	position: relative;
	z-index: 0;
}

.field-item input,
.field-item select {
	display: block;
	width: 100%;
    height: 32px;
    padding: 0;
	color: rgba(0, 0, 0, 0.87);
	border-style: solid;
	border-width: 0 0 1px;
	border-color: rgba(0, 0, 0, 0.42);
	background-color: transparent;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
	outline: 0;
}

.field-item .field-label {
    display: block;
    position: absolute;
    top: 8px;
	left: 0;
	right: 0;
    color: rgba(0, 0, 0, 0.84);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
	line-height: 18px;
	cursor: pointer;
	transition: all .25s ease-in-out;
	z-index: -1;
}

.field-item input:not([type="radio"]):focus ~ .field-label,
.field-item select:not([type="radio"]):focus ~ .field-label {
    top: -16px;
    font-size: 16px;
}

.field-item .field-border {
	display: block;
	position: absolute;
	left: 50%;
	right: 50%;
	bottom: -1px;
	height: 2px;
	background-color: #e3165b;
	opacity: 0;
	transition: left .25s ease-out, right .25s ease-out, opacity .25s ease-in-out;
}

.field-item input:not([type="radio"]):focus ~ .field-border,
.field-item select:not([type="radio"]):focus ~ .field-border {
	left: 0;
	right: 0;
	opacity: 1;
}

.form-submit {
    display: block;
    margin: 0 auto;
    padding: 12px 30px;
    color: #fff;
    background-color: #0378d5;
    border-width: 0;
	border-radius: 5px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    transition: background-color .25s ease-in-out;
    cursor: pointer;
    outline: 0;
}

.form-submit:hover {
    background-color: #036dc2;
}

.field-item input[type="radio"] {
    display: inline-block;
    width: auto;
    height: auto;
    margin: 31px 0 0;
}
.field-item input[type="radio"] ~ .field-label {
    top: 8px;
}
</style>
