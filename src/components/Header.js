import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'


const Header= ({ onLoginClick }) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                React-Auth0
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem onClick={onLoginClick}>Login</NavItem>
        </Nav>
    </Navbar>
)

export default Header
