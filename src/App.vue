<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">List</router-link> |
			<router-link to="/create">Create</router-link>
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
.field-item textarea,
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

.field-item textarea {
	min-height: 120px;
	padding-top: 10px;
}

.field-item select {
	cursor: pointer;
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
.field-item textarea:not([type="radio"]):focus ~ .field-label,
.field-item select:focus ~ .field-label,
.field-inner.is-focused .field-label,
.field-inner.is-active .field-label {
    top: -16px;
    font-size: 16px;
}

.field-inner.is-active {
    margin-top: 65px;
}

.field-item .field-border {
	display: block;
	position: absolute;
	left: 50%;
	right: 50%;
	bottom: -1px;
	height: 2px;
	background-color: #42b983;
	opacity: 0;
	transition: left .25s ease-out, right .25s ease-out, opacity .25s ease-in-out;
}

.field-item input:not([type="radio"]):focus ~ .field-border,
.field-item textarea:not([type="radio"]):focus ~ .field-border,
.field-item select:focus ~ .field-border,
.field-item .is-valid-yes ~ .field-border {
	left: 0;
	right: 0;
	opacity: 1;
}

.field-item .is-valid-no ~ .field-border {
	background-color: #e3165b;
}

.form-submit {
    display: block;
    margin: 0 auto;
    padding: 12px 30px;
    color: #fff;
    background-color: #42b983;
    border-width: 0;
	border-radius: 5px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    transition: background-color .25s ease-in-out;
    cursor: pointer;
    outline: 0;
}

.form-submit:hover {
    background-color: #389c6f;
}

.field-radio {
	display: inline-flex;
    align-items: center;
    margin-right: 15px;
}
.field-radio > input {
    display: inline-block;
    width: auto;
    height: auto;
    margin: 10px 5px 0 0;
	cursor: pointer;
}
.field-radio-label {
	display: inline-block;
	margin-top: 12px;
	cursor: pointer;
}

.title {
	padding-bottom: 60px;
    text-align: center;
}
.title > h2 {
    display: inline-flex;
	margin-top: 0;
	margin-bottom: 0;
    border-bottom: 2px solid #42b983;
    text-align: center;
}
</style>
