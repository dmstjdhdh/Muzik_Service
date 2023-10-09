import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Team Muzik</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <NavDropdown title="ABOUT" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">CREW</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SIDE" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                START
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                INSPIRE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                DREAM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                EXPLORE
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="ARTICLE" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                START
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                INSPIRE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                DREAM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                EXPLORE
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="COMMUNITY" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                START
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                INSPIRE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                DREAM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                EXPLORE
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">SHOP</Nav.Link>
                        <Nav.Link href="#features">NEWSLETTER</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">LOGIN</Nav.Link>
                        <Nav.Link href="#deets">SIGNUP</Nav.Link>
                        <Nav.Link href="#deets">JOIN</Nav.Link>
                        <Nav.Link href="#deets">MY</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navibar;