import api from './api'

export const ConsultandoPokemonName = (name) => {
    const response = api.get(name).then( function(response){
        return response
        }  
    )
    return response
}