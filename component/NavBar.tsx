import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'

const NavBar: React.FC = () => {
    return (
        <Navbar bg="variant" style={{ backgroundColor: '#2BBCBA' }} expand="lg">
            <Container fluid="xxl">
                <Link href='/' passHref>
                    <Navbar.Brand style={{ fontSize: '1.8rem', color: 'white', fontWeight:'700' }} href="#">
                        {/* <img alt=""
                            src="https://www.clipartmax.com/png/middle/51-519858_sell-used-books-and-media-icon.png"
                            width="40"
                            height="40"
                            style={{ borderRadius: '50%', marginRight: '5px' }}
                            className="d-inline-block align-top"></img> */}
                        GOOD BOOK
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Link href='/' passHref>
                            <Nav.Link style={{color:'white'}}>TRANG CHỦ</Nav.Link>
                        </Link>
                        <Link href='/store' passHref>
                            <Nav.Link href="#action2">SÁCH</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ width: '400px' }}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link href='/login' passHref>
                            <Nav.Link href="#action1">Đăng nhập</Nav.Link>
                        </Link>
                        <Link href='/joker/random' passHref>
                            <Nav.Link href="#action1">Đăng ký</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar