<template>
  <div class="list-table">
    <ejs-grid :dataSource="listData" :toolbar="toolbarOptions" :allowRowDragAndDrop="true" :rowDrop="handleChange">
        <e-columns>
            <e-column :field="key" :headerText="item.title" v-for="(item, key, indx) in columnsTitles" :key="indx"></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { Toolbar, Search, RowDD } from '@syncfusion/ej2-vue-grids';

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
        grid: [Toolbar, Search, RowDD]
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
    },
    methods: {
        handleChange(row) {
            // build the id list
            let newIDOrder = {},
                i = 1;

            this.columnsData.rows.forEach(item => {
                newIDOrder[ item.id ] = i;
                i++;
            });
            
            // new formdata object
			const formData = new FormData();
            formData.append('data', JSON.stringify(newIDOrder));
            
            // Send the id list
            fetch("./api/reorder.php", {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    // status message show in the console
                    data.messages.forEach(el => {
                        console.log( 'Redorder Rows: ' + el );
                    });
                })
                .catch(error => {
                    console.log( error );
                });
        }
    }
};
</script>
