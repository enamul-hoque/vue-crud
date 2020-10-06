<template>
  <div class="list-table">
    <ejs-grid :dataSource="listData" :commandClick="handleCommand" :toolbar="toolbarOptions" :allowRowDragAndDrop="true" :rowDrop="handleChange" :allowSorting="true" :showColumnChooser="true" :allowFiltering="true">
        <e-columns>
            <e-column :field="key" :headerText="item.title" v-for="(item, key, indx) in columnsTitles" :key="indx" :allowSorting="item.sortable" :allowFiltering="item.searchable"></e-column>
            <e-column headerText='Update' width=120 :commands='commands'></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { Toolbar, RowDD, Sort, ColumnChooser, Filter, CommandColumn } from '@syncfusion/ej2-vue-grids';

export default {
    name: "ListTable",
    data() {
        return {
            listData: [],
            columnsTitles: {},
            columnsData: {},
            toolbarOptions: ["ColumnChooser"],
            commands: [
                {
                    type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' }
                }
            ]
        }
    },
    provide: {
        grid: [Toolbar, RowDD, Sort, ColumnChooser, Filter, CommandColumn]
    },
    beforeCreate() {
        fetch("./api/list.php")
            .then(res => res.json())
            .then(res_data => {
                this.columnsData = res_data.data;
                this.listData = res_data.data.rows;
                
                if ( !('headers' in this.columnsData) ) return {};

                const headers = this.columnsData.headers[0];

                for (const columnName in headers) {
                    // checks if columns are hidden
                    if ( !headers[ columnName ].hidden ) {
                        this.columnsTitles[columnName] = headers[ columnName ];
                    }
                }
            }).catch(e => this.$noty.error( String(e) ));
    },
    methods: {
        handleCommand(e) {
            console.log( e.rowData.id );
            this.$router.push({path: 'update', query: { id: e.rowData.id }});
        },
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
                    // status message show
                    let i = 0;

                    data.messages.forEach(message => {
                        setTimeout(() => {
                            if ( data.status === 'success' ) {
                                this.$noty.success(message);
                            } else {
                                this.$noty.error(message);
                            }
                        }, 100*i);

                        i++;
                    });
                }).catch(e => this.$noty.error( String(e) ));
        }
    }
};
</script>
