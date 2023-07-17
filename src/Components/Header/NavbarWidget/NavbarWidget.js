import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarWidget = () => {

    return (
        <div className="navbar-menu">
            <Navbar expand="lg" data-bs-theme="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#">Vacunos</Nav.Link>
                            <Nav.Link href="#">Aves</Nav.Link>
                            <Nav.Link href="#">Cerdo</Nav.Link>
                            <Nav.Link href="#">Embutidos</Nav.Link>
                            <Nav.Link href="#">Almacén</Nav.Link>
                            <Nav.Link href="#">Bebidas</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavbarWidget;