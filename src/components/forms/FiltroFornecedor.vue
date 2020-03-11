<template>
    <div class="col-md-12">

        <form class="form-group">
            <div class="row">
                <label class="col-sm-2 control-label">Nome</label>
                <input v-model="nome" class="col-sm-10" type="text"/>
            </div>
            <br />
            <div class="row">
                <label  class="col-sm-2 control-label">Data</label>
                <input v-model="date" type="text" class="col-sm-10 " v-mask="'##/##/####'" />
            </div>
        </form>
        <va-button :isBlock="false" v-on:click="$emit('submit', $data)" theme="primary" align="right" name="Pesquisar"></va-button>
    </div>
</template>

<script>
    import VABox from '../../widgets/VABox'
    import VAInputGroup from '../../components/VAInputGroup'
    import VACheckBox from '../../components/VACheckBox'
    import VAInput from '../../components/VAInput'
    import VAButton from '../../components/VAButton'
    import VATextareaGroup from '../../components/VATextareaGroup'
    import VAFormGroup from '../../components/VAFormGroup'
    import VARadio from '../../components/VARadio'
    import VASelect from '../../components/VASelect'
    import CadastraFornecedor from '../../components/forms/CadastraFornecedor'
    import VATextarea from '../../components/VATextarea'

    export default {
        props: {

        },
        data : function(){
            return {
                nome : "",
                date : ""
            }
        },
        computed : {

        },
        methods : {

        },
        components: {
            'va-box': VABox,
            'va-input-group': VAInputGroup,
            'va-checkbox': VACheckBox,
            'va-input': VAInput,
            'va-button': VAButton,
            'va-textarea-group': VATextareaGroup,
            'va-form-group': VAFormGroup,
            'va-radio': VARadio,
            'va-select': VASelect,
            'va-textarea': VATextarea
    }
}
</script>