import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Diario from './pages/diario';

const Rotas: React.FC = () => {
    return(
        <Routes>
            <Route index element = {<Home />} />
            <Route path = "diario" element = {<Diario />} />
            <Route path = "*" element = {<h1>Não Encontrado!</h1>} />
        </Routes>
    );
}

export default Rotas;