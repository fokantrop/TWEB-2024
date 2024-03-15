import React from 'react';
import {Container, Form, FormControl, Navbar, Nav, Button} from "react-bootstrap";
import logo from './Logo.png';

const Header = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="100"
                            width="100"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2"
                            />
                            <Button variant="dark">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
