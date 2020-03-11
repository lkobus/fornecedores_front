import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('http://localhost:5000/api/empresa', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  },

  createEmpresa (request = {}) {
    return axios.post('http://localhost:5000/api/empresa', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
