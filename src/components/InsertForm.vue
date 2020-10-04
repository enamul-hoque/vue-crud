<template>
    <div class="insert-form">
        <form id="insertForm" class="form-wrap" action="#" method="post" @submit.prevent="handleSubmit">
            <div class="field-item" v-for="(item, name, indx) in fields" :key="indx" v-show="item.type !== 'hidden'">
                <div class="field-inner is-active" v-if="item.type === 'radio'">
                    <span class="field-label">{{ item.title }}</span>

                    <div class="field-radio" v-for="(option, indx3) in item.options" :key="indx3">
                        <input :id="name + '_' + indx3" type="radio" :name="name" :value="option.key" v-model="formInputs[name]" v-bind="item.html_attr" :readonly="item.readonly" :data-validate="item.validate" :required="item.required">

                        <label :for="name + '_' + indx3" class="field-radio-label">{{ option.label }}</label>
                    </div>
                </div>

                <div class="field-inner is-active" v-else-if="item.type === 'select'">
                    <span class="field-label">{{ item.title }}</span>

                    <select v-bind="item.html_attr" :readonly="item.readonly" :data-validate="item.validate" :required="item.required" v-model="formInputs[ name ]">
                        <option v-for="(option, indx2) in item.options" :key="indx2" :value="option.key">{{option.label}}</option>
                    </select>
                </div>
                
                <div class="field-inner" v-else :class="{'is-focused': formInputs[ name ].length}">
                    <input :name="name" :type="item.type" :required="item.required" v-bind="item.html_attr" v-model="formInputs[ name ]" :readonly="item.readonly" :data-validate="item.validate" autocomplete="off" :class="'is-valid-' + validInputs[ name ]">

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
            formInputs: {},
            validInputs: {}
        }
    },
    beforeCreate() {
        fetch("./api/get_form.php")
            .then(res => res.json())
            .then(res_data => {
                const fields = res_data.data.fields[0];
                this.fields = fields;

                for (let field in fields) {
                    this.$set(this.formInputs, field, fields[ field ].default || fields[ field ].value);
                    this.$set(this.validInputs, field, '');
                }
            }).catch(e => this.$noty.error( String(e) ));
    },
    beforeUpdate() {
        for (let field in this.fields) {
            if ( 'validate' in this.fields[ field ] ) {
                console.log(this.fields[ field ].validate);
                switch (this.fields[ field ].validate) {
                    case 'only_letters':
                        this.validInputs[ field ] = this.formInputs[ field ].match(/^[A-Za-z]+$/) ? 'yes' : 'no';
                        break;
                        
                    case 'integer':
                        this.validInputs[ field ] = Number.isInteger( this.formInputs[ field ] ) ? 'yes' : 'no';
                        break;
                        
                    case 'only_letter_number|max:100':
                        break;
                }
            }
        }
    },
    methods: {
        handleSubmit() {
            // new formdata object
			const formData = new FormData();
            formData.append('data', JSON.stringify(this.formInputs));

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
