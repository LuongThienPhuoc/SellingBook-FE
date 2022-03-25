import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'
import style from '../styles/Layout.module.css';

const NavBar = () => {
    return (
        <Navbar bg="variant" style={{ backgroundColor: '#2BBCBA' }} expand="lg">
            <Container fluid="xxl">
                <Link href='/' passHref>
                    <Navbar.Brand style={{ fontSize: '1.8rem', color: 'white', fontWeight: '700' }} href="#">
                        <img
                            alt=""
                            src='/img/logo.png'
                            width="70"
                            height="40"
                            style={{ borderRadius: '50%', marginRight: '5px' }}
                            className="d-inline-block align-top"></img>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div style={{ position: 'relative' }}>
                            <Link href='/' passHref>
                                <Nav.Link className={style.navItemLine} style={{ color: 'white', fontWeight: '600' }}>TRANG CHỦ</Nav.Link>
                            </Link>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Link href='/store' passHref>
                                <Nav.Link className={style.navItemLine + ' ' +style.activeItem} style={{ color: 'white', fontWeight: '600' }}>SÁCH</Nav.Link>
                            </Link>
                        </div>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ width: '300px', marginLeft: '40px' }}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link href='/login' passHref>
                            <Nav.Link style={{ color: 'white', fontWeight: '600' }}>Đăng nhập</Nav.Link>
                        </Link>
                        <Link href='/joker/random' passHref>
                            <Nav.Link style={{ color: 'white', fontWeight: '600' }}>Đăng ký</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar