<template>
	<div class="list-view">
		<ejs-grid :dataSource="listData" :toolbar='toolbarOptions'></ejs-grid>
	</div>
</template>

<script>
import { Toolbar, Search } from '@syncfusion/ej2-vue-grids';

export default {
	name: 'ListView',
    data() {
		return {
			listData: [],
			toolbarOptions: ['Search']
		}
	},
	beforeCreate() {
		fetch('./api/list.php')
			.then(res => res.json())
			.then(data => {
				this.listData = data.data.rows;
			})
			.catch(error => {
				console.log( error );
			});
	},
	provide: {
		grid: [Toolbar, Search]
	}
}
</script>
