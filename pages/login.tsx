
import React from 'react'
import Layout from '../component/Layout'
import Head from 'next/head'
import styleLogin from '../styles/Login.module.css'


const Login: React.FC = () => {
    return (
        <Layout>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Login</title>
            </Head>
            <h2 className={styleLogin.test + ' ' + styleLogin.test1}>Đăng nhập</h2>
        </Layout>
    )
}


export default Login

