import Vue from 'vue'
import Router from 'vue-router'
import EmpresaMainPage from 'pages/empresas/EmpresaMainPage'
import FornecedoresPage from 'pages/empresas/FornecedoresPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: EmpresaMainPage
    },
    {
      path: '/EmpresaPage',
      name: 'EmpresaPage',
      component: EmpresaMainPage
    },
    {
      path: '/Fornecedores',
      name: 'Fornecedores',
      component : FornecedoresPage
    }
  ],
  linkActiveClass: 'active'
})
