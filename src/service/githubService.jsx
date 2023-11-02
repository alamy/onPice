import api from './api'
export const getUser = (name) => {
    const dados = api.get(name)
    .then(function(response){
        return response.data
    })
    return dados
}

export const getRepositorios = (name) => {
    const dados = api.get(name + '/repos')
    .then(function(response){
        return response.data
    })
    return dados
}