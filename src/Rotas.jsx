import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Desafio from "./pages/Desafio"
import Requisicao from "./pages/requisicao"

const Rotas = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/desafio" element={<Desafio />} />
                <Route path="/req" element={<Requisicao />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas