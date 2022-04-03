import React from 'react'
import { useDispatch } from 'react-redux'
import { showAlertError, showAlertSuccess } from '../redux/actions/alertAction'
import { getAccessToken } from '../utils/cookies';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
const Layout = dynamic(() =>
  import('../component/Layout'),
  {
    loading: () => <LinearProgress></LinearProgress>
  }
);

const Home = () => {
  const dispatch = useDispatch()
  const test = async () => {
    await axios.post('http://localhost:3000/api/user/refresh',
      { phuoc: '123' },
      {
        headers: {
          'Authorization': `Basic ${getAccessToken()}`
        }
      }
    ).then(res => {
      console.log(res)
    })
  }

  return (
    <Layout active="home">
      <h1 onClick={test} className="text-3xl font-bold underline text-red-600 mt-16">
        Hello world!
        <div className='flex justify-center'>hello my selt</div>
      </h1>
    </Layout>
  )
}


export default Home

