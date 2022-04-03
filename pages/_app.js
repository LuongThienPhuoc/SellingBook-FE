import '../styles/globals.css'
import '../styles/layout.css'
import Head from 'next/head'
import { createWrapper } from 'next-redux-wrapper'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import AlertGoodBook from '../component/Alert'
import { getAccessToken } from '../utils/cookies'
import axios from 'axios'
import * as URL from '../services/api/config'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const fetApi = async () => {
      await axios.post(URL.URL_REFRESH,
        {
          headers: {
            'Authorization': `Basic ${getAccessToken()}`
          }
        }
      ).then(res => {
        console.log(res)
      })
    }
    fetApi()
  }, [])
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
