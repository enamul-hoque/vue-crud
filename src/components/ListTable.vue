<template>
  <div class="list-table">
    <ejs-grid :dataSource="listData" :toolbar="toolbarOptions">
        <e-columns>
            <e-column :field="key" :headerText="item.title" v-for="(item, key, indx) in columnsTitles" :key="indx"></e-column>
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
            columnsData: {},
            toolbarOptions: ["Search"]
        }
    },
    beforeCreate() {
        fetch("./api/list.php")
            .then(res => res.json())
            .then(data => {
                this.columnsData = data.data;
                this.listData = data.data.rows;
            })
            .catch(error => {
                console.log( error );
            });
    },
    provide: {
        grid: [Toolbar, Search]
    },
    computed: {
        columnsTitles() {
            if ( !('headers' in this.columnsData) ) return {};

            let newObj = {};

            for (const columnName in this.columnsData.headers[0]) {
                if ( !this.columnsData.headers[0][ columnName ].hidden ) {
                    newObj[columnName] = this.columnsData.headers[0][ columnName ];
                }
            }

            return newObj;
        }
    }
};
</script>
