<template>
    <div class="insert-form">
        <form id="insertForm" class="form-wrap" action="#" method="post" @submit.prevent="handleSubmit">
            <div class="field-item" v-for="(item, name, indx) in fields" :key="indx" v-show="item.type !== 'hidden'">
                <div class="field-inner" v-if="item.type === 'radio'">
                    <div class="field-radio" v-for="(option, indx3) in item.options" :key="indx3">
                        <input type="radio" :name="option.key">
                        <!-- <input :name="name" :type="item.type" :required="item.required" v-bind="item.html_attr" :value="item.value" :readonly="item.readonly" :data-validate="item.validate" autocomplete="off"> -->

                        <span class="field-label">{{ option.label }}</span>
                    </div>
                </div>

                <div class="field-inner" v-else-if="item.type === 'select'">
                    <select v-bind="item.html_attr" :readonly="item.readonly" :data-validate="item.validate" :required="item.required">
                        <option v-for="(option, indx2) in item.options" :key="indx2" :value="option.key">{{option.label}}</option>
                    </select>
                </div>
                
                <div class="field-inner" v-else>
                    <input :name="name" :type="item.type" :required="item.required" v-bind="item.html_attr" :value="item.value" :readonly="item.readonly" :data-validate="item.validate" autocomplete="off">

                    <span class="field-label">{{ item.title }}</span>
                    <span class="field-border"></span>
                </div>
            </div>

            <button type="submit" class="form-submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "InsertForm",
    data() {
        return {
            fields: [],
            formInputs: {}
        }
    },
    beforeCreate() {
        fetch("./api/get_form.php")
            .then(res => res.json())
            .then(res_data => {
                this.fields = res_data.data.fields[0];
                console.log( this.fields );
            }).catch(e => this.$noty.error( String(e) ));
    },
    methods: {
        handleSubmit() {
            // new formdata object
			const formData = new FormData();
            // formData.append('data', JSON.stringify(formInputs));
            console.log( formData );

            // submit the data
            fetch("./api/submit_form.php", {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(res_data => {
                    // status message show
                    let i = 0;

                    res_data.messages.forEach(message => {
                        setTimeout(() => {
                            if ( res_data.status === 'success' ) {
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
