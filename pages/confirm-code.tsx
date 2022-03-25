
import React from 'react'
import Head from 'next/head'
import styleLogin from '../styles/Login.module.css'
import '../styles/Login.module.css'
import { BsArrowLeftSquareFill, BsBoxArrowRight, BsArrowRightSquareFill } from 'react-icons/bs'
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'

const ConfirmCode: React.FC = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Tìm lại mật khẩu</title>
            </Head>
            <div style={{ display: 'flex' }}>
                <div className={styleLogin.imgLogin}>
                </div>
                <div className={styleLogin.modalLogin}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className={styleLogin.loginDirection}>
                            <Link href={'/forget-password'} passHref>
                                <BsArrowLeftSquareFill style={{ transform: 'translateY(-6px)', marginRight: '5px' }}></BsArrowLeftSquareFill>
                            </Link>
                            <Link href={'/forget-password'} passHref>
                                <p>Nhập lại email</p>
                            </Link>
                        </div>
                        <div className={styleLogin.loginDirection}>
                            <Link href={'/login'} passHref>
                                <p>Đăng nhập</p>
                            </Link>
                            <Link href={'/login'} passHref>
                                <BsArrowRightSquareFill style={{ transform: 'translateY(-6px)', marginLeft: '5px' }}></BsArrowRightSquareFill>
                            </Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <img height='130px' width='200px' src='/img/logo.png'></img>
                        <div style={{ fontSize: '2.4rem' }}>GOOD BOOK</div>
                        <div style={{ fontSize: '2rem', fontWeight: '500', color: '#2BBCBA' }}>Quên mật khẩu</div>
                        <div style={{ display: 'flex', textDecoration: 'none', justifyContent: 'start', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                            <p>Mã code đã được gửi về email example@gmail.com</p>
                        </div>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '5px' }}>
                            <TextField
                                id="outlined-required"
                                label="Nhập mã code"
                                fullWidth
                                name='code'
                                defaultValue='VD: 123456'
                            />
                        </div>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                            <TextField
                                id="outlined-password-input"
                                label="Mật khẩu mới"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                            />
                        </div>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                            <TextField
                                id="outlined-password-input"
                                label="Nhập lại mật khẩu"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                            />
                        </div>
                    </div>
                    <div style={{ color: '#EA230F', display: 'flex', textDecoration: 'none', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '5px' }}>
                        <p>*Mã code không hợp lệ</p>
                        <p style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            Gửi lại mã
                        </p>
                    </div>
                    <div style={{ display: 'flex', textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '10px' }}>
                        <Button fullWidth style={{ backgroundColor: '#2BBCBA', color: 'white', height: '50px', fontSize: '1.4rem' }} variant="contained">Xác nhận</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ConfirmCode

