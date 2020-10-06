<template>
	<div class="list-page">
	    <div class="title">
	        <h2>Entry List</h2>
	    </div>
	    
		<ListTable />
	</div>
</template>

<script>
import ListTable from "@/components/ListTable.vue";

export default {
	name: "ListPage",
	components: {
		ListTable
	}
};
</script>
