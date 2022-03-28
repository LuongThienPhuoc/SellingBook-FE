import React, { useState, useEffect } from 'react'
import styleLogin from '../styles/Login.module.css'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import { limitText } from '../helper/limitText'
import { Button } from '@mui/material'
import { CheckSpecialCharacters } from '../helper/checkSpecialCharaters'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { getCodeAgain } from '../redux/actions/codeAction'
import { makeCode } from '../helper/makeCode'
import { sendCode } from '../services/sendMail'
import { useRouter } from 'next/router'

function ConfirmCode(props) {
    const dispatch = useDispatch();
    const code = useSelector((state: RootStateOrAny) => state.codeReducer.code)
    const email = useSelector((state: RootStateOrAny) => state.codeReducer.email)
    const isLoading = useSelector((state: RootStateOrAny) => state.codeReducer.loading)
    const [isCheckCode, setIsCheckCode] = useState(false);
    const [codeClient, setCodeClient] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) router.push('/forget-password')
    }, [])

    const [pass, setPass] = useState({
        value: '',
        isError: false,
        helperText: ''
    })

    const [rePass, setRePass] = useState({
        value: '',
        isError: false,
        helperText: ''
    })

    const sendCodeAgain = () => {
        let code: String = makeCode(6);
        if (sendCode(code, email)) {
            dispatch(getCodeAgain(code))
        }

    }

    const HandleChangeCode = (e) => {
        limitText(e, 6)
        setCodeClient(e.target.value)
    }

    const HandleChangeNewPass = (e) => {
        limitText(e, 20)
        if (e.target.value.length >= 6 || e.target.value.length == 0) {
            if (!CheckSpecialCharacters(e.target.value)) {
                setPass({
                    value: e.target.value,
                    isError: false,
                    helperText: null,
                })
                if (e.target.value == rePass.value) {
                    setRePass({
                        ...rePass,
                        isError: false,
                        helperText: null,
                    })
                } else {
                    setRePass({
                        ...rePass,
                        isError: true,
                        helperText: 'Nhập lại mật khẩu không đúng',
                    })
                }
            } else {
                setPass({
                    ...pass,
                    isError: true,
                    helperText: 'Mật khẩu chưa kí tự đặc biệt'
                })
            }
        } else {
            setPass({
                ...pass,
                isError: true,
                helperText: 'Mất khẩu phải từ 6 kí tự trở lên'
            })
        }
    }

    const HandleChangeReNewPass = (e) => {
        limitText(e, 20)
        if (e.target.value === pass.value) {
            setRePass({
                value: e.target.value,
                isError: false,
                helperText: null,
            })
        } else {
            setRePass({
                value: e.target.value,
                isError: true,
                helperText: 'Nhập lại mật khẩu không đúng',
            })
        }
    }

    const HandleClickComfirmCode = (e) => {
        console.log(pass.value)
        console.log(rePass.value)
        console.log(codeClient)
        if (pass.value == '' || rePass.value == '' || codeClient == '') {
            console.log('Nhập đầy đủ các  trường')
            e.preventDefault()
        } else if (pass.isError || rePass.isError) {
            console.log('Lỗi')
            e.preventDefault()
        }
        else if (codeClient !== code) {
            setIsCheckCode(true)
            e.preventDefault();
        }
        else {
            console.log('Đăng ký thành công')
        }
    }


    const HandleKeyUp = (e) => {
        if (e.key === 'Enter') {
            let elenmentLinkComfirmCode: HTMLElement = document.querySelector('.comfirm-code')
            elenmentLinkComfirmCode.click()
        }
    }


    return (
        <div className={styleLogin.modalLogin + ' ' + styleLogin.formForgetPass}>
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
                            <p>Mã code đã được gửi về email {email}</p>
                            <p>{code}</p>
                        </div>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '5px' }}>
                            <TextField
                                id="outlined-required"
                                label="Nhập mã code"
                                fullWidth
                                placeholder='VD: 123456'
                                name='code'
                                onKeyUp={(e) => HandleKeyUp(e)}
                                onChange={(e) => HandleChangeCode(e)}
                            />
                        </div>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                            <TextField
                                id="outlined-password-input"
                                label="Mật khẩu mới"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                                onKeyUp={(e) => HandleKeyUp(e)}
                                onChange={(e) => HandleChangeNewPass(e)}
                                error={pass.isError}
                                helperText={pass.helperText}
                            />
                        </div>
                        <div style={{ paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '20px' }}>
                            <TextField
                                id="outlined-password-input"
                                label="Nhập lại mật khẩu"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                                error={rePass.isError}
                                helperText={rePass.helperText}
                                onKeyUp={(e) => HandleKeyUp(e)}
                                onChange={(e) => HandleChangeReNewPass(e)}
                            />
                        </div>
                    </div>
                    {isCheckCode && (
                        <div style={{ color: '#EA230F', display: 'flex', textDecoration: 'none', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '5px' }}>
                            <p>*Mã code không hợp lệ</p>
                            <p onClick={() => sendCodeAgain()} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                Gửi lại mã
                            </p>
                        </div>
                    )}
                    <div style={{ display: 'flex', textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px', width: '100%', marginTop: '10px' }}>
                        <Link href='login' passHref>
                            <Button onClick={(e) => HandleClickComfirmCode(e)} className='comfirm-code' fullWidth style={{ backgroundColor: '#2BBCBA', color: 'white', height: '50px', fontSize: '1.4rem' }} variant="contained">Xác nhận</Button>
                        </Link>
                    </div>
                </div>
    );
}

export default ConfirmCode;