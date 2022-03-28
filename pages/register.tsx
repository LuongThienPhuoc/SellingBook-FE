
import React, { useState } from 'react'
import Head from 'next/head'
import styleLogin from '../styles/Login.module.css'
import '../styles/Login.module.css'

import dynamic from 'next/dynamic';

const Register = dynamic(() => import('../component/Register'));



const RegisterPage: React.FC = () => {
    

    return (
        <div>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Đăng ký</title>
            </Head>
            <div style={{ display: 'flex' }}>
                <div className={styleLogin.imgLogin}>
                </div>
                <Register></Register>
            </div>
        </div >
    )
}

export default RegisterPage

