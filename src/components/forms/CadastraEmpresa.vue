<template>
    <div>
         <va-box
        title="Cadastro Empresa"
        theme="box-info"
        :isBorder="true"
        widgetType="">

        <div slot="content">

          <form class="form-horizontal">
            <va-input
              :isHorizontal="true"
              mask="##.###.###/####-##"
              title="CNPJ"
              placeholder="CNPJ"
              vaId="cnpj"
              v-on:change="cnpjChanged"
              >

            </va-input>

            <va-input
              :isHorizontal="true"
              title="Nome Fantasia"
              placeholder="Nome Fantasia"
              mask="*"
              v-on:change="nomeFantasiaChanged"
              vaId="nome-fantasia"
              >
            </va-input>

            <va-select
                title="UF"
                v-on:changed="ufChanged"
                :isHorizontal="true"
                :list="loadUfs"
            ></va-select>
          </form>


        </div>

        <div slot="footer">

          <va-button :isBlock="false" v-on:click="$emit('cancel')" name="Cancel"></va-button>
          <va-button :isBlock="false" v-on:click="$emit('submit', cnpj)" theme="primary" align="right" name="Cadastrar"></va-button>

        </div>

      </va-box>
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

    export default {
        props: {
            ufs : {
                type : Array,
                default : () => { [] }
            }
        },
        data : function(){
            return {
                cnpj : ""
            }
        },
        computed : {
            loadUfs() {
                var self = this;
                var r =  this.lodash.map(this.ufs, function(object) {
                  return self.lodash.pick(object, ['Codigo', 'Nome']);
                });
                var result = [];
                this.lodash.forEach(r, p => {
                    result.push({label : p.Nome, value : p.Codigo})
                })
                return result;
            }
        },
        methods : {
            cnpjChanged(cnpj){
                this.$emit('changedCNPJ', cnpj);
            },
            nomeFantasiaChanged(nomeFantasia) {
                this.$emit('nomeFantasiaChanged', nomeFantasia);
            },
            ufChanged(uf){
                this.$emit('changedUf', uf)
            }
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
            'va-select': VASelect
    }
}
</script>