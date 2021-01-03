import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return(
                <Navbar fixed="bottom" style={{marginBottom: 0, marginTop: 0, justifyContent: 'center' }}>
                    <NavItem className="btmInvite">
                        Harvard or MIT student? We are too! Contact us at coryzimmerman93@gmail.com to join our team.
                    </NavItem>
                </Navbar>
        );
    }
}

export default Footer;