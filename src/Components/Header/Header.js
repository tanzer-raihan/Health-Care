import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../AuthProvider/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut, userName } = useAuth();
    


    return (
        <div >
            <Navbar sticky="top" collapseOnSelect expand="lg" className='navbar' >
                <Container>
                    <Navbar.Brand href="#home"><h4><i className="fas fa-clinic-medical font"></i> <span className='text-custom'>MediTech</span> </h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} className="pages" to="/home">Home</Nav.Link>

                            <Nav.Link as={HashLink} className="pages" smooth to="/home#services">Services</Nav.Link>



                            <Nav.Link as={NavLink} className="pages" to="/appointment">Appointment</Nav.Link>

                            <Nav.Link as={NavLink} className="pages" to="/contact">Contact Us</Nav.Link>


                            {user.email ? <button className='logoutbtn' onClick={logOut}>Log Out</button> :

                                <Nav.Link as={NavLink} className="pages" to="/signin">Sign In</Nav.Link>}

                        </Nav>

                        <h6>
                            {userName || user.displayName}
                        </h6>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;