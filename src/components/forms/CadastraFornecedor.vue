<template>
    <div>
        <va-box
        title="Cadastro Fornecedor"
        theme="box-info"
        :isBorder="true"
        widgetType="">

        <div slot="content">

          <form class="form-horizontal">
          <va-checkbox
              text="Pessoa Juridica"
              v-on:changed="changedJuridica"
            >
            </va-checkbox>
            <va-input
                v-if="juridica"
              :isHorizontal="true"
              mask="##.###.###/####-##"
              title="CNPJ"
              placeholder="CNPJ"
              vaId="cnpj"
              v-on:change="cnpjChanged"
              >

            </va-input>

            <va-input
                v-if="!juridica"
              :isHorizontal="true"
              mask="###.###.###-##"
              title="CPF"
              placeholder="cpf"
              vaId="cpf"
              v-on:change="cpfChanged">
            </va-input>
            <transition name="fade">
                <va-input
                v-if="!juridica"
                :isHorizontal="true"
                mask="#.###.###"
                title="RG"
                placeholder="rg"
                vaId="rg"
                v-on:change="rgChanged">
                </va-input>
            </transition>
            <transition name="fade">
                <va-input
                v-if="!juridica"
                :isHorizontal="true"
                mask="##/##/####"
                title="Data Nascimento"
                placeholder="dd/MM/yyyy"
                vaId="dataNascimento"
                v-on:change="dataNascimentoChanged">
                </va-input>
            </transition>

            <va-input
              :isHorizontal="true"
              title="Nome"
              placeholder="Nome"
              mask="*"
              v-on:change="nomeChanged"
              vaId="nome"
              >
            </va-input>

            <va-select
                title="Empresa"
                v-on:changed="empresaChanged"
                :isHorizontal="true"
                :list="loadEmpresaSelect"
            ></va-select>

            <b>Telefones</b>
            <va-textarea
                title="Telefones"
                :isHorizontal="true"
                placeholder="Um telefone por linha"
                v-on:change="telefonesChanged"
            >
            </va-textarea>

          </form>


        </div>

        <div slot="footer">

          <va-button :isBlock="false" v-on:click="$emit('cancel')" name="Cancel"></va-button>
          <va-button :isBlock="false" v-on:click="$emit('submit', $data)" theme="primary" align="right" name="Cadastrar"></va-button>

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
    import CadastraFornecedor from '../../components/forms/CadastraFornecedor'
    import VATextarea from '../../components/VATextarea'

    export default {
        props: {
            empresas : {
                type : Array,
                default : () => { return [] }
            }
        },
        data : function(){
            return {
                juridica : false,
                cadastro : "",
                nome : "",
                rg : "",
                dataNascimento : "",
                empresaId : "",
                telefones : []
            }
        },
        computed : {
            loadEmpresaSelect() {
                var self = this;
                var r =  this.lodash.map(this.empresas, function(object) {
                  return self.lodash.pick(object, ['NomeFantasia', 'BusinessId']);
                });
                var result = [];
                this.lodash.forEach(r, p => {
                    result.push({label : p.NomeFantasia, value : p.BusinessId})
                })
                return result;
            },
        },
        methods : {

            changedJuridica(valor){
                this.juridica = valor
            },
            dataNascimentoChanged(dataNascimento){
                var dateParts = dataNascimento.split("/");
                var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
                this.dataNascimento = dateObject
            },
            cpfChanged(cpf){
                this.cadastro = cpf;
            },
            telefonesChanged(telefones){
                this.telefones = telefones.split('\n')
            },
            empresaChanged(empresa){
                this.empresaId = empresa;
            },
            cnpjChanged(cnpj){
                this.cadastro = cnpj;
            },
            nomeChanged(nome) {
                this.nome = nome;
            },
            rgChanged(rg){
                this.rg = rg;
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
            'va-select': VASelect,
            'va-textarea': VATextarea
    }
}
</script>