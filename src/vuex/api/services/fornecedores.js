import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('http://localhost:5000/api/fornecedor', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  getByFilter (request = {}) {
    return axios.post('http://localhost:5000/api/fornecedor/search', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  createPessoaFisica (request = {}) {
    return axios.post('http://localhost:5000/api/fornecedor/fisica', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
  createPessoaJuridica (request = {}) {
    return axios.post('http://localhost:5000/api/fornecedor/juridica', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },
}
