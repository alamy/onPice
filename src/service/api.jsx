import axios from  'axios'

const opition = {
    // baseURL: 'https://rickandmortyapi.com/api/'
    baseURL: 'https://api.github.com/users/'
}

 const api = axios.create(opition)

 export default api