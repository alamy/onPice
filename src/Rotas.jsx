import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Desafio from "./pages/Desafio"

const Rotas = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/desafio" element={<Desafio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas