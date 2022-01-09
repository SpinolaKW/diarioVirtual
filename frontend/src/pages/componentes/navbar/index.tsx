import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
    return(
        <><Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Diário Virtual</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as = {Link} to="/">Início</Nav.Link>
                    <Nav.Link as = {Link} to="/diario">Anotações</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <br />
        </>
    );
}

export default Menu;