
import React, { useState } from 'react'
import Head from 'next/head'
import styleLogin from '../styles/Login.module.css'
import '../styles/Login.module.css'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import { limitText } from '../helper/limitText'
import { CheckMail } from '../helper/checkMail'
import { makeCode } from '../helper/makeCode'
import {sendCode} from '../services/sendMail'
import {getCode} from '../redux/actions/codeAction'
import { useDispatch } from 'react-redux'

const ForgetPassword: React.FC = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState({
        value: '',
        isError: false,
        helperText: ''
    })

    const HandleClickButton = (e) => {
        if (email.value == '') {
            console.log('Nhập đầy đủ các  trường')
            e.preventDefault()
        } else if (email.isError) {
            console.log('Lỗi')
            e.preventDefault()
        } else {
            let code: String = makeCode(6);
            if(sendCode(code, email.value)){
                dispatch(getCode(code, email.value))
            }
        }
    }

    const HandleChangeEmail = (e) => {
        limitText(e, 30);
        if (CheckMail(e.target.value) || e.target.value.length === 0) {
            setEmail({
                value: e.target.value,
                isError: false,
                helperText: null,
            })
        } else {
            setEmail({
                ...email,
                isError: true,
                helperText: 'Email không đúng định dạng'
            })
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            let elenmentConfirmCode: HTMLElement = document.querySelector('.confirm-code')
            elenmentConfirmCode.click()
        }
    }

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
                <div className={styleLogin.modalLogin + ' ' + styleLogin.formForgetPass}>
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
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                            <TextField
                                id="outlined-required"
                                label="Email"
                                onChange={(e) => HandleChangeEmail(e)}
                                fullWidth
                                error={email.isError}
                                helperText={email.helperText}
                                onKeyUp={(e) => handleKeyUp(e)}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                        <Link href='confirm-code' passHref>
                            <Button onClick={(e) => HandleClickButton(e)} className='confirm-code' fullWidth style={{ backgroundColor: '#2BBCBA', color: 'white', height: '50px', fontSize: '1.4rem' }} variant="contained">GỬI MÃ CODE</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}



export default ForgetPassword

