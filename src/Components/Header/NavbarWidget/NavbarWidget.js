import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarWidget = () => {

    return (
        <div className="navbar-menu">
            <Navbar expand="lg" data-bs-theme="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link to='/category/carnes'>Carnes</Link>
                            <Link to='/category/guarniciones'>Guarniciones</Link>
                            <Link to='/category/almacen'>Almacén</Link>
                            <Link to='/category/bebidas'>Bebidas</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavbarWidget;