import axios from  'axios'

const opition = {
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
}

const api = axios.create(opition)

export default api