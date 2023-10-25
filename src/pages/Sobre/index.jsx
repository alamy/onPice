import Usuario from '../../components/Usuario'
import './style.css'
import { Link } from 'react-router-dom'

const Sobre = () => {
    return (
    <>
        <p>Estoy na Sobre</p>
        <Link className='ygy' to={'/'}>Clique aqui e va para o Home</Link>
        
        <Usuario 
            nome={'alamy'} 
            email={'alamy@alamy.com'}
            telefone={'81 999999999'}
        />
        </>
        )
} 

export default Sobre