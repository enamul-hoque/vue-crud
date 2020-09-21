<template>
	<div class="list-view">
		<ejs-grid :dataSource="listData"></ejs-grid>
	</div>
</template>

<script>
export default {
	name: 'ListView',
    data() {
		return {
			listData: []
		}
	},
	beforeCreate() {
		fetch('http://localhost/vue-crud/api/list.php')
			.then(res => res.json())
			.then(data => {
				this.listData = data.data.rows;
			})
			.catch(error => {
				console.log( error );
			});
	}
}
</script>
