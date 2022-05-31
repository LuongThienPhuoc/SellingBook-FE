import '../styles/globals.css'
import '../styles/bookpage.css'

import '../styles/layout.css'
import '../styles/profile.css'

import Head from 'next/head'
import { createWrapper } from 'next-redux-wrapper'
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import store from '../redux/store'
import AlertGoodBook from '../component/Alert'
import { getAccessToken, setAccessToken } from '../utils/cookies'
import axios from 'axios'
import { useState } from 'react'
import * as URL from '../services/api/config'
import LinearProgress from '@mui/material/LinearProgress';
import { userLogin } from '../redux/actions/userAction'

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log(getAccessToken());
  //   const fetApi = async () => {
  //     const token = getAccessToken()
  //     console.log(token)
  //     if (token !== null || token !== undefined) {
  //       await axios.post(URL.URL_REFRESH).then(res => {
  //         if (res.data.status == 1) {
  //           setAccessToken(res.data.token)
  //           dispatch(userLogin(res.data))
  //         }
  //         setIsLoading(true)
  //       }).catch(err => {
  //         setIsLoading(true)
  //       });
  //     } else {
  //       setIsLoading(true)
  //     }
  //   }
  //   fetApi()
  //   //setIsLoading(true)
  // }, [])


  if (!isLoading) return (<LinearProgress></LinearProgress>)
  return (
    <div className='root-app'>
      <Provider store={store}>
        <Head>
          <link rel='icon' href='/img/logo.png'></link>
          <link rel='stylesheet' href='/css/global.css'></link>
        </Head>
        <Component {...pageProps} />
        <AlertGoodBook></AlertGoodBook>
      </Provider>
    </div>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
