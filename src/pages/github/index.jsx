import { getRepositorios, getUser } from '../../service/githubService'
import './estilo.css'
import { useState } from "react"

const Github = () => {
    const [usuario, setUsuario] = useState()
    const [repo, setRepo] = useState([])
    const [user, setUser] = useState('')
    const [listaRepo, setListaRepo] = useState([])

    const Pesquisando = async () => {
        console.log(user)
        const dadosUser = await getUser(user)
        console.log(dadosUser)
        setUsuario(dadosUser)
        const repos = await getRepositorios(user)
        console.log(repos)
        setRepo(repos)

       const resultadoRepo = await repo.map(function(r) {
            return (
                <>
                    <tr>
                        <td>{r?.id}</td>
                        <td>{r?.name}</td>
                        <td>{r?.description}</td>
                        <td><a  href={r?.html_url}>Clique aqui</a></td>
                    </tr>
                </>
            )
        })
        setListaRepo(resultadoRepo)
        
    }

   
    return (
        <>
            <section className="body">
                <div className="form">
                    <input
                        type="text"
                        className="input-text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />
                    <button className="btn-pesquisar"
                        onClick={Pesquisando}>
                        Pesquisar
                    </button>
                </div>
                <div className='usuario'>
                    <h1>{usuario?.login}</h1>
                    <img src={usuario?.avatar_url} alt='perfil' />
                    <p>{usuario?.id}</p>
                    <p>{usuario?.location}</p>

                    <table>
                        <thead>
                            <th>id Repo</th>
                            <th>Nome do Repo</th>
                            <th>Description</th>
                            <th>Link do Repo</th>
                        </thead>
                        <tbody>
                           {listaRepo}

                        </tbody>
                    </table>
                </div>
            </section>
        </>

    )
}

export default Github