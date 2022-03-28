import React, { useState, useEffect, useLayoutEffect } from 'react'
import Head from 'next/head'
import styleLogin from '../styles/Login.module.css'
import dynamic from 'next/dynamic';

const Login = dynamic(() => import('../component/Login'));


const LoginPage = () => {
  const [size, setSize] = useState(0);
  
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Đăng nhập</title>
      </Head>
      <div style={{ display: 'flex', position: 'relative' }}>
        <div className={styleLogin.imgLogin}>
        </div>
        <Login></Login>
      </div>
    </div>
  )
}


export default LoginPage

