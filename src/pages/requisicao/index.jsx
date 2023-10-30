import { useState } from "react";
import axios from  'axios'
import { ConsultandoPokemonName } from '../../service/pokemonService'

const Requisicao = () => {

const [texto, setTexto] = useState()
const [id, setId] = useState()

const [pokemon, setPokemon] = useState('')

// const Consultando = async () => {
//     let status
//     await axios.get('https://api.adviceslip.com/advice')

//     .then(function (response) {
//         // manipula o sucesso da requisição
//         setTexto(response.data.slip.advice)
//         setId(response.data.slip.id)
//         status = response.status
//         // console.log(response.status);
//     })
//     .catch(function (error) {
//         // manipula erros da requisição
//         console.error(error);
//     })
//     .finally(function (response) {
//         console.log(status)
//           if(status === 200) {
//               alert('alguma sucesso ')
//           }else (
//               alert('error')
//           )
       
//     });

// }



const ConsultandoPokemon = async () => {
    const response = await ConsultandoPokemonName(pokemon)
    console.log(response)
    setTexto(response.data.order)
    setId(response.data.sprites.front_default)

}

       
    return (
        <>
            <p> Teste</p>
           
        <hr></hr>
            <output>{texto}</output>
           <img src={id} alt="teste" />

            <input type="text" value={pokemon} onChange={(e)=> setPokemon(e.target.value)} />

            <button onClick={ConsultandoPokemon}>Consultar Pokemon</button>
        </>
    )
}


export default Requisicao