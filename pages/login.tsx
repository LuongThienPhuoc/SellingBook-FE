import React from 'react'
import Layout from '../component/Layout'
import Head from 'next/head'
import styleLogin from '../styles/Login.module.css'
import '../styles/Login.module.css'
import { BsArrowLeftSquareFill, BsBoxArrowRight, BsArrowRightSquareFill } from 'react-icons/bs'
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material'
import { Button } from '@mui/material'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGoogleCircle } from 'react-icons/ai'

const Register: React.FC = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Đăng nhập</title>
      </Head>
      <div style={{ display: 'flex' }}>
        <div className={styleLogin.imgLogin}>
        </div>
        <div className={styleLogin.modalLogin}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={styleLogin.loginDirection}>
              <Link href={'/'} passHref>
                <BsArrowLeftSquareFill style={{ transform: 'translateY(-6px)', marginRight: '5px' }}></BsArrowLeftSquareFill>
              </Link>
              <Link href={'/'} passHref>
                <p>Trang chủ</p>
              </Link>
            </div>
            <div className={styleLogin.loginDirection}>
              <Link href={'/register'} passHref>
                <p>Đăng ký</p>
              </Link>
              <Link href={'/register'} passHref>
                <BsArrowRightSquareFill style={{ transform: 'translateY(-6px)', marginLeft: '5px' }}></BsArrowRightSquareFill>
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img height='130px' width='200px' src='https://s3-alpha-sig.figma.com/img/e8c8/7924/da09018c99d55ea49bdc6212a1810516?Expires=1649030400&Signature=hlAxB~I0ZrCnSDx2XmwYk1K8Mrco-Hqv-6ATXUP9Yh0LrcBdOSrAFJW29K2fb-~P6gMbMu8JvVqDu2mhAYxkp1wJKQb4eT125VtDKmO3RjasJFZjoLpCPXISE9XsvZg-758zUUpdxWYuZo~VbuirpIV6r1XY8axr~zDHqIqTf5V-tVSSilWk7-PA5xeF24q4E6rvXBxlj16NogG8r770Va-uKP730oTLLai4z8xpRcgiWPTDxTV3sCAKP6m-GRA~yr1GufYmnx8~-bNU3ybx4zml-OCyyz0KQe8oS2AFMDNRUisFHpVa8cZ5PLomdpdKNAx4SUZlaRtb8Q5pCQmc2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
            <div style={{ fontSize: '2.4rem' }}>GOOD BOOK</div>
            <div style={{ fontSize: '2rem', fontWeight: '500', color: '#2BBCBA' }}>Đăng nhập</div>
            <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
              <TextField
                id="outlined-required"
                label="Tên tài khoản"
                fullWidth
              />
            </div>
            <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
              <TextField
                id="outlined-password-input"
                label="Mật khẩu"
                type="password"
                fullWidth
                autoComplete="current-password"
              />
            </div>
          </div>
          <div style={{ display: 'flex', textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
            <p>Xem hướng dẫn</p>
            <Link href={'/forget-password'} passHref>
              <p className={styleLogin.forgetPassHover} style={{ color: '#2BBCBA', fontWeight: '500' }}>
                Quên mật khẩu
              </p>
            </Link>
          </div>
          <div style={{ display: 'flex', textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
            <Button fullWidth style={{ backgroundColor: '#2BBCBA', color: 'white', height: '50px', fontSize: '1.4rem' }} variant="contained">ĐĂNG NHẬP</Button>
          </div>
          <div style={{ color: 'rgba(0, 0, 0, 0.4)', marginBottom: '35px', paddingLeft: '60px', paddingRight: '60px', width: '100%', height: '1px', marginTop: '20px' }}>
            <Divider orientation='horizontal' flexItem>
              Hoặc
            </Divider>
          </div>
          <div style={{ display: 'flex', textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-evenly', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
            <div style={{ cursor: 'pointer', fontSize: '2rem', height: '50px', width: '50px', color: '#36589D', borderRadius: '50%', padding: '5px', border: '1px solid #36589D', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <BsFacebook></BsFacebook>
            </div>
            <div style={{ cursor: 'pointer', fontSize: '2rem', height: '50px', width: '50px', color: '#EA230F', borderRadius: '50%', padding: '5px', border: '1px solid #EA230F', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <AiFillGoogleCircle></AiFillGoogleCircle>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register

