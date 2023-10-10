import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navibar() {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showSideDropdown, setShowSideDropdown] = useState(false);
    const [showArticleDropdown, setShowArticleDropdown] = useState(false);
    const [showCommunityDropdown, setShowCommunityDropdown] = useState(false);

    const handleAboutMouseEnter = () => {
        setShowAboutDropdown(true);
    };

    const handleAboutMouseLeave = () => {
        setShowAboutDropdown(false);
    };

    const handleSideMouseEnter = () => {
        setShowSideDropdown(true);
    };

    const handleSideMouseLeave = () => {
        setShowSideDropdown(false);
    };

    const handleArticleMouseEnter = () => {
        setShowArticleDropdown(true);
    };

    const handleArticleMouseLeave = () => {
        setShowArticleDropdown(false);
    };

    const handleCommunityMouseEnter = () => {
        setShowCommunityDropdown(true);
    };

    const handleCommunityMouseLeave = () => {
        setShowCommunityDropdown(false);
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Team Muzik</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <NavDropdown
                            title="ABOUT"
                            id="collapsible-nav-dropdown"
                            show={showAboutDropdown}
                            onMouseEnter={handleAboutMouseEnter}
                            onMouseLeave={handleAboutMouseLeave}
                        >
                            <NavDropdown.Item href="#action/3.1">CREW</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            title="SIDE"
                            id="collapsible-nav-dropdown"
                            show={showSideDropdown}
                            onMouseEnter={handleSideMouseEnter}
                            onMouseLeave={handleSideMouseLeave}
                        >
                            <NavDropdown.Item href="#action/3.1">START</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">INSPIRE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">DREAM</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">EXPLORE</NavDropdown.Item>
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
