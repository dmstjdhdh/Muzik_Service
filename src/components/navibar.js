import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const handleAboutMouseEnter = () => {
        setShowAboutDropdown(true);
    };

    const handleAboutMouseLeave = () => {
        setShowAboutDropdown(false);
    };

    const customStyle = {
        background: 'white',
    };

    return (
        <Navbar
            collapseOnSelect expand="lg"
            style={customStyle}
        >
            <Container>
                <Navbar.Brand href="/">Subin_Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="About"
                            id="collapsible-nav-dropdown"
                            show={showAboutDropdown}
                            onMouseEnter={handleAboutMouseEnter}
                            onMouseLeave={handleAboutMouseLeave}
                        >
                            <NavDropdown.Item
                                href="https://github.com/dmstjdhdh"
                            >SUBIN</NavDropdown.Item>
                            <NavDropdown.Item
                                href="https://www.muzik.click/"
                            >MUZIK</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Links</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://open.kakao.com/o/shXnTOxf">JOIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
