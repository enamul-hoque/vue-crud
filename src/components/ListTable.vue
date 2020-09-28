<template>
  <div class="list-table">
    <ejs-grid :dataSource="listData" :toolbar='toolbarOptions'>
		<e-columns>
			<e-column :field='key' :headerText='item.title' v-for="(item, key, indx) in columnsTitles" :key="indx" v-if="item.hidden === false"></e-column>
		</e-columns>
	</ejs-grid>
  </div>
</template>

<script>
import { Toolbar, Search } from '@syncfusion/ej2-vue-grids';

export default {
	name: "ListTable",
	data() {
		return {
			listData: [],
			toolbarOptions: ['Search'],
			columnsTitles: {}
		}
	},
	beforeCreate() {
		fetch('./api/list.php')
			.then(res => res.json())
			.then(data => {
				this.columnsTitles = data.data.headers[0];
				console.log( data.data.headers[0] );
				console.log( data.data.rows );
				this.listData = data.data.rows;
			})
			.catch(error => {
				console.log( error );
			});
	},
	provide: {
		grid: [Toolbar, Search]
	}
};
</script>
