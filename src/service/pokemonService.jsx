import api from './api'

export const RickMorty = (name) => {
    const response = api.get(name).then(function(response){
        return response
        }  
    )
    return response
}