import { useState } from "react";
import axios from 'axios'
import { RickMorty } from '../../service/pokemonService'
import { wait } from "@testing-library/user-event/dist/utils";

const Requisicao = () => {

    const [texto, setTexto] = useState()
    const [id, setId] = useState()
    const [personagem, setPersonagem] = useState([])

    const [pokemon, setPokemon] = useState('')


    const ConsultandoPersonagem = async () => {
        const response = await RickMorty('character')
        console.log(response)
        const per = response.data.results.map(function (e) {
            return <p>{e.name}</p>
        })
        setPersonagem(per)

    }

    const ConsultandoLocal = async () => {
        const response = await RickMorty('location')
        console.log(response)

    }

    const ConsultandoEpisodio = async () => {
        const response = await RickMorty('episode')
        console.log(response)

    }


    return (
        <>
            <p> Teste</p>

            <hr></hr>
            <output>{texto}</output>
            <img src={id} alt="teste" />

            <button onClick={ConsultandoPersonagem}>Personagem</button>
            <button onClick={ConsultandoLocal}>Local</button>
            <button onClick={ConsultandoEpisodio}>Episodio</button>

            {personagem}
        </>
    )
}


export default Requisicao