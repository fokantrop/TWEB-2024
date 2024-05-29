// src/Components/Header.tsx
import { Container, Form, FormControl, Navbar, Nav, Button } from "react-bootstrap";
import logo from './Logo.png';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import useStore from '../store/useStore'; // Подключаем Zustand

const Header = () => {
    const searchTerm = useStore((state) => state.searchTerm);
    const setSearchTerm = useStore((state) => state.setSearchTerm);

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
                            <Nav.Link href="/">Домой</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                            <Nav.Link href="/contacts">Связаться</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Поиск"
                                className="me-2"
                                value={searchTerm} // Привязываем значение из состояния
                                onChange={(e) => setSearchTerm(e.target.value)} // Обновляем состояние при изменении ввода
                            />
                            <Button variant="dark">Поиск</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <div style={{ paddingTop: '100px', textAlign: 'left' }}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default Header;
