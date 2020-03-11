<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
  <div class="dashboard container">
    <div class='col-md-6'>
    <va-info-box
      bgColor='bg-aqua'
      bgIcon='ion ion-ios-gear-outline'
      text='Quantidade empresas'
      :number='empresas.length.toString()'
    ></va-info-box>
  </div>
  <div class='col-md-6'>
    <va-button
      name="Cadastrar"
      v-on:click="check()"
      theme="primary"
    ></va-button>
  </div>


    <transition name="fade">

    <form-empresa :ufs="ufs" v-on:nomeFantasiaChanged="nomeFantasiaChanged" v-on:changedUf="changedUf" v-on:changedCNPJ="changedCnpj" v-on:submit="submit" v-on:cancel="cadastrar = false" v-if="cadastrar">

    </form-empresa>
    </transition>

  <data-table :columns="['CNPJ', 'NomeFantasia', 'VerboseUF']" :data="empresas"></data-table>
  </div>
</template>

<script>
import VAInfoBox from '../../widgets/VAInfoBox'
import VAButton from '../../components/VAButton.vue'
import CadastraEmpresa from '../../components/forms/CadastraEmpresa'
import Table from '../../components/Table'
import { mapGetters, mapActions } from 'vuex'
import lodash from 'lodash'
import Toast from '../../lib/toast'

export default {
  name: 'EmpresaPage',
  components: {
    'va-info-box': VAInfoBox,
    'data-table': Table,
    'va-button': VAButton,
    'form-empresa': CadastraEmpresa,

  },

  data: function() {
    return {
      cadastrar : false,
      cnpj : "",
      uf : "",
      nomeFantasia : "",
      spinner : false
    }
  },
  created () {
    this.fetchEmpresas()
    this.fetchUFs();
  },
  computed: {
    ...mapGetters([
      'empresas',
      'ufs'
    ])
  },
  methods: {
    changedCnpj(event){
      this.cnpj = event;
    },
    changedUf(event){
      this.uf = event;
    },
    nomeFantasiaChanged(event){
      this.nomeFantasia = event;
    },
    ...mapActions([
      'fetchEmpresas',
      'fetchUFs',
      'createEmpresa'
    ]),
    async submit(){
      if(this.uf === ""){
        this.uf = this.ufs[0].Codigo
      }
      var self = this;
      this.spinner = true;
      await this.createEmpresa({
        CNPJ : this.cnpj,
        UF : parseInt(this.uf),
        NomeFantasia : this.nomeFantasia
      }).then((response) => {
        console.log(response)
        self.cadastrar = false
        self.fetchEmpresas();
        Toast.show(self.$toasted, "Empresa criada")
      })
      .catch((error) => {
        console.error(error)
        Toast.show(self.$toasted, 'Erro ao salvar empresa')
      })
    },
    check(){
      this.cadastrar = true;
    }
  }

}
</script>