// Header.jsx
import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Header = ({ searchTerm, setSearchTerm, handleOrderByDate, handleOrderByType }) => {
  return (
    <header>
      <Navbar expand="md" className="app-navbar">
        <Container fluid>
          <Navbar.Brand href="#">Feriados en Chile</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                Menú
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link onClick={handleOrderByDate}>Ordenar por Fecha</Nav.Link>
                <Nav.Link onClick={handleOrderByType}>Ordenar por Tipo</Nav.Link>
              </Nav>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

