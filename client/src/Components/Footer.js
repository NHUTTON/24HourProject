import React from "react";
import {Navbar, Nav, NavItem, NavLink, Col, Row, Container} from "reactstrap";
import './Footer.css'

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <Nav className="ml-auto" navbar>
                    <Container>
                        <Row>
                            <h5>Created By:</h5>
                            <Col>
                                <NavItem>
                                    <NavLink href="https://nhutton.github.io/" target="_blank">
                                    Nickolas Hutton
                                    </NavLink>
                                </NavItem>
                            </Col>
                        </Row>
                            <Col>
                                <NavItem>
                                    <NavLink href="https://cjkalahiki.github.io/" target="_blank">
                                        Connor Kalahiki
                                    </NavLink>
                                </NavItem>
                            </Col>
                        
                    </Container>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;