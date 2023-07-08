import React from 'react';
import styles from './Navigator.module.css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

const Navigator = () => (
    <div className={styles.Navigator} data-testid="Navigator">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="home-logo"
                        src='/logo192.png'
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="cards">Cards</Nav.Link>
                        <Nav.Link href="carousels">Carousel</Nav.Link>
                        <Nav.Link href="popup">Popup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);

const legacyNavBar = <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand" aria-current="cards" >Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="cards" className="nav-link active" aria-current="cards" >Cards</Link>
                </li>
                <li className="nav-item">
                    <Link to="carousels" className="nav-link active" aria-current="cards" >Carousels</Link>
                </li>
                <li className="nav-item">
                    <Link to="carousels" className="nav-link active" aria-current="carousels" >Pagination</Link>
                </li>
                <li className="nav-item">
                    <Link to="cards" className="nav-link active" aria-current="cards" >Popup</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

Navigator.propTypes = {};

Navigator.defaultProps = {};

export default Navigator;
