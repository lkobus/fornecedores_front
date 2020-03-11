import axios from 'axios'

export default {
  getAll (request = {}) {
    return axios.get('http://localhost:5000/api/logradouro', request)
          .then((response) => Promise.resolve(response))
          .catch((error) => Promise.reject(error))
  }
}
