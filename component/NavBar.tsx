import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'
import style from '../styles/Layout.module.css';

const NavBar: React.FC = () => {
    return (
        <Navbar bg="variant" style={{ backgroundColor: '#2BBCBA' }} expand="lg">
            <Container fluid="xxl">
                <Link href='/' passHref>
                    <Navbar.Brand style={{ fontSize: '1.8rem', color: 'white', fontWeight: '700' }} href="#">
                        <img
                            alt=""
                            src="https://s3-alpha-sig.figma.com/img/917c/6af9/34d279d63c39796c40ded3d98c39a196?Expires=1649030400&Signature=X8Ux1HjZpFKPi4vat9FctOmZjVvonOsoPjPsDl15Y147HNi0JESrJUcDgwSNZ36q-I8otXXLNwNNa2BVdW8Rthcfl1gjyGwwjwd18PHiPtZsqmE8p9~neyA~hgb0sfXTFFlsRWCcHjljx5jcfAd2c84suJIXAjKYxzyo1moEjF9uxjGRklgvJue~gm0JfGsolzPBiFI04TIIZBv2hs4HWvLkQnkqYcHvbIMRXfb4EWoT2DjNPeSxnt~YhJBhzyvxSDSKL1wEZefdn0YLTpcgYWf4nQNFc7KTsI2Z44soktiFceE7Akis049lMgl0EB9lG5bEWnrUqbwo3RmScFcRiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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