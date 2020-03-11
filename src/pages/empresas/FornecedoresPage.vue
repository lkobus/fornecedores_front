<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
    <div>
        <div class="dashboard container">
            <transition name="fade">
            <div v-if="!cadastrar" class='col-md-6'>
                <va-info-box
                bgColor='bg-aqua'
                bgIcon='ion ion-ios-gear-outline'
                text='Quantidade Fornecedores'
                :number='fornecedores.length.toString()'
                ></va-info-box>
            </div>
            </transition>
            <transition name="fade">
            <div v-if="!cadastrar" class='col-md-6'>
                <va-button
                name="Cadastrar"
                v-on:click="check()"
                theme="primary"
                ></va-button>
            </div>
            </transition>

            <transition name="fade">
                <form-fornecedor :empresas="empresas" v-on:submit="submit" v-on:cancel="cadastrar = false" v-if="cadastrar">

                </form-fornecedor>
            </transition>

            <filtro-fornecedor v-on:submit="filterAplied"></filtro-fornecedor>
            <data-table :columns="['Nome', 'Cadastro', 'CreatedAt', 'RG', 'DataNascimento', 'Juridica']" :data="fornecedores"></data-table>
        </div>



    </div>
</template>
<script>
import Table from '../../components/Table'
import VAInfoBox from '../../widgets/VAInfoBox'
import VAButton from '../../components/VAButton.vue'
import { mapGetters, mapActions } from 'vuex'
import CadastraFornecedor from '../../components/forms/CadastraFornecedor'
import FiltroFornecedor from '../../components/forms/FiltroFornecedor'
import Toast from '../../lib/toast'
import VABox from '../../widgets/VABox'

export default {
  name: 'FornecedorPage',
  components: {
    'va-info-box': VAInfoBox,
    'data-table': Table,
    'va-button': VAButton,
    'form-fornecedor': CadastraFornecedor,
    'filtro-fornecedor' : FiltroFornecedor,
    'va-box': VABox
  },

  data: function() {
    return {
      cadastrar : false,
      formData : null
    }
  },
  created () {
    this.fetchEmpresas();
    this.fetchFornecedores()
  },
  computed: {
    ...mapGetters([
      'empresas',
      'fornecedores'

    ])
  },
  methods: {
    ...mapActions([
      'fetchEmpresas',
      'fetchFornecedores',
      'createFornecedorPessoaJuridica',
      'createFornecedorPessoaFisica',
      'fetchFornecedoresWithFilter'
    ]),
    filterAplied(data){
        var obj = {}
        if(data.nome !== ""){
            obj.nome = data.nome
        }
        if(data.date !== ""){
            var dateParts = data.date.split("/");
            var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            obj.date = dateObject
        }
        this.fetchFornecedoresWithFilter(obj)
    },
    async submit(data){
        if(data.empresaId === ""){
            data.empresaId = this.empresas[0].BusinessId
        }
        var self = this;
        if(data.juridica){
            await this.createFornecedorPessoaJuridica(data)
            .then((response) => {
                console.log(response)
                self.fetchFornecedores();
                self.cadastrar = false
                Toast.show(self.$toasted, "Fornecedor criado")
            })
            .catch((error) => {
                console.error(error)
                Toast.show(self.$toasted, 'Erro ao salvar fornecedor')
            })
        } else {
            await this.createFornecedorPessoaFisica(data)
            .then((response) => {
                console.log(response)
                self.cadastrar = false
                self.fetchFornecedores();
                Toast.show(self.$toasted, "Fornecedor criado")
            })
            .catch((error) => {
                console.error(error)
                Toast.show(self.$toasted, 'Erro ao salvar fornecedor')
            })
        }
        console.log(this.formData);
    },
    check() {
        this.cadastrar = true
    }
  }

}
</script>