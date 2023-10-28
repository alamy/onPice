import { useState } from "react"
import Input from "../../components/Input"
import { cpfMask } from '../../hooks/maskCpf'
const Desafio = () => {
    const [cpf, setCpf] = useState()
    const [listaCPF, setListaCPF ] = useState([])
    const [ingresso, setIngresso] = useState()
    const [qtdTotal, setQtdTotal] = useState(90)
    const [qtdCompra, setQtdCompra] = useState(0)
    const [qtdAutoridade, setQtdAutoridade] = useState(10)
    const [valorTotal, setValorTotal] = useState(0)
    const [flagAutoridade, setFlagAutoridade] = useState('sim')

    const ObjAutoridade = [
        {
            text: 'sim',
            id: 'sim'
        },
        {
            text: 'não',
            id: 'não'

        }
    ]
    const qtdIngresosOpcao = [
        {
            text: '1',
            id: '1'
        },
        {
            text: '2',
            id: '2'
        },
        {
            text: '3',
            id: '3'
        },
        {
            text: '4',
            id: '4'
        },
    ]

    const qtdIngresosOpcaoAuto = [
        {
            text: '1',
            id: '1'
        }
    ]

    const Comprar = () => {

        if (qtdTotal > 0 || qtdAutoridade > 0) {
            if (flagAutoridade === 'sim' && qtdAutoridade > 0) {
                setQtdAutoridade(qtdAutoridade - ingresso)
            } else if (flagAutoridade === 'não') {
                if( ingresso <= qtdTotal){
                    setQtdTotal(qtdTotal - ingresso)
                    setValorTotal((ingresso * 25) + valorTotal)
                    // Adicionando no array os CPF´s
                    //Aqui tem um filter
                    setListaCPF(prev => [...prev, cpf])
                }else {
                    alert('A quantidade de ingressos para compra é: ' + qtdTotal)
                }

            } else {
                alert('Quantidade de ingressos para autoridades acabou')
            }
        } else {
            alert('Quantidade de ingressos esgotadas')
        }

    }

    const totalCpf = listaCPF.map(function(e){
        console.log(e)
        return <li>{e}</li>
    })
    return (
        <>
            <p> Você é autoridade?</p>
            <Input
                id={'autoridade'}
                text={'Você é autoridade'}
                type={'radio'}
                value={flagAutoridade}
                name={'autoridade'}
                Objeto={ObjAutoridade}
                onChange={(e) => { setFlagAutoridade(e.target.value) }} />
            <hr></hr>
            <Input
                id={'cpf'}
                text={'Digite seu CPF'}
                type={'text'}
                value={cpf}
                onChange={(e) => { setCpf(cpfMask(e.target.value)) }} />
            <hr></hr>

            <p>Quantos ingresos deseja comprar</p>
            <Input
                id={'ingresso'}
                text={'Quantos ingressos você quer'}
                type={'radio'}
                name={'escolha'}
                Objeto={flagAutoridade === 'sim' ? qtdIngresosOpcaoAuto : qtdIngresosOpcao}
                value={ingresso}
                onChange={function (e) {
                    setIngresso(e.target.value)
                    console.log(e.target.value)
                }} />


            <button onClick={Comprar}>Comprar</button>

            <hr></hr>

            <p>Quantidade Vendidas: {qtdTotal + qtdAutoridade}</p>

            <p>Caixa : {valorTotal}</p>

        <ul>
            {totalCpf}
        </ul>


        </>
    )
}

export default Desafio