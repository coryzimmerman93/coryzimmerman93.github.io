import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class TopBar extends React.Component {
    render() {
        return(
            <Nav className="justify-content-center animate-navbar">
                <Navbar style={{marginBottom: -10, marginTop: 0}}>
                    <Navbar.Brand href="./App.js">
                        <NavItem>
                            <h1 className="RTop">
                                -- render --
                            </h1>
                        </NavItem>
                    </Navbar.Brand>
                </Navbar>
            </Nav>
        );
    }
}

export default TopBar;