import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './rotas';
import Menu from './pages/componentes/navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Container>
        <br />
          <Rotas />
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;