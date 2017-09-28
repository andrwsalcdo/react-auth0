import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'


const Header= ({ onLoginClick, accessToken, onLogoutClick }) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                React-Auth0
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        {
            (accessToken)
            ? <NavItem onClick={onLogoutClick}>Logout</NavItem>
            : <NavItem onClick={onLoginClick}>Login</NavItem>
        }
        </Nav>
    </Navbar>
)

export default Header


