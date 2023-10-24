import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import { Somando } from '../../hooks/Soma'
const Home = () => {


    const [datatual, setDataAtual] = useState(new Date())
    let dia = datatual.getDate()
    let mes = datatual.getMonth() + 1
    let ano = datatual.getFullYear()
    let hora = datatual.getHours()
    let min = datatual.getMinutes()
    let sec = datatual.getSeconds()

    const [result, setResult] = useState()
    const [a, setA] = useState()
    const [b, setB] = useState()
    const [c, setC] = useState()
    const [resultado, setResultado] = useState()
    const [cont, setCont] = useState(10)
    const [pa, setPa] = useState(0)
    const [pg, setPg] = useState(1)
    const [flagButton, setFlagbutton] = useState(false)
    const [x1, setX1] = useState()
    const [x2, setX2] = useState()

    const [delta, setDelta] = useState()


useEffect(() => {
   setTimeout(() => {
    setDataAtual(new Date())
    setResult(ano + '/' + mes + '/' + dia + '-' + hora + ':' + min + ':' + sec)
   },1000)
},[ano, dia, hora, mes, min, sec])

    function calculando() {
        console.log(datatual)
        setCont(cont - 1)
        setPa(pa + 2)
        setPg(pg * 2)
        if(cont === 1){
            setFlagbutton(true)
        }
    }

    function CalculandoRaiz() {
        setDelta(b*b - (4*a*c))
        if(delta === 0){
            setX1(-b/2*a)
            setX2(x1)
        }else if (delta < 0){
            setX1(0)
            setX2(0)
        }else{
            setX1(-b+Math.sqrt(delta)/2*a)

            setX2(-b-Math.sqrt(delta)/2*a)
        }
    }
    return (
        <>
        <p className='teste'>Estoy na Home</p>

        <label>Digite o valor de A</label>
        <input type='number' value={a}
        onBlur={() => {
        }}
        onChange={(e) => {
            setA(e.target.value)
           
        }} />
        <br />
        <label>Digite o valor de B</label>
        <input type='number' value={b} onChange={(e) => {
            setB(e.target.value)
            
        }} 
       />

    <label>Digite o valor de C</label>
        <input type='number' value={c} onChange={(e) => {
            setC(e.target.value)
            
        }} 
       />

       <button onClick={CalculandoRaiz}>Calcular</button>

{delta}
    <p>{delta < 0 ? 'Não tem raiz' : ''}</p>
    <p>{delta === 0 ? 'as Raizes são:' + x1 : '' }</p>
    <p>{delta > 0 ? 'as raizes são: ' + x1 + ' e ' + x2 : null }</p>
    
    {resultado}
<br/>
    {result}
    <br />
        <br />
        {cont}
        <br />
        <br />
        {pa}
        <br />
        <br />
        {pg}
        <br />
    <button disabled={flagButton} onClick={calculando}>clicar</button>

<br />
        <Link to={'/sobre'}>Clique aqui e va para o sobre</Link>
                </>)
} 

export default Home