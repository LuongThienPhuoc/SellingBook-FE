import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { createWrapper } from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import store from '../redux/store'
import AlertGoodBook from '../component/Alert'

const MyApp = ({ Component, pageProps }) => {
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
