import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    console.log(response)
    commit(types.FETCH_PRODUCT, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const fetchEmpresas = ({ commit }) => {
  // API request
  return services.empresas.getAll()
  .then((response) => {
    console.log(response)
    commit(types.FETCH_EMPRESAS, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const fetchUFs = ({ commit }) => {
  // API request
  return services.logradouro.getAll()
  .then((response) => {
    console.log(response)
    commit(types.FETCH_UF, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const fetchFornecedores = ({ commit }) => {
  // API request
  return services.fornecedores.getAll()
  .then((response) => {
    console.log(response)
    commit(types.FETCH_FORNECEDORES, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const fetchFornecedoresWithFilter = ({ commit }, args) => {
  // API request
  return services.fornecedores.getByFilter(args)
  .then((response) => {
    console.log(response)
    commit(types.FETCH_FORNECEDORES, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const createEmpresa = ({ commit }, args) => {
  return services.empresas.createEmpresa(args);
}

export const createFornecedorPessoaFisica = ({ commit }, args) => {
  return services.fornecedores.createPessoaFisica(args);
}

export const createFornecedorPessoaJuridica = ({ commit }, args) => {
  return services.fornecedores.createPessoaJuridica(args);
}