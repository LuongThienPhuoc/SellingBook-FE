import React from 'react'
import { useDispatch } from 'react-redux'
import { showAlertError, showAlertSuccess } from '../redux/actions/alertAction'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
const Layout = dynamic(() =>
  import('../component/Layout'),
  {
    loading: () => <LinearProgress></LinearProgress>
  }
);

const Home = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(showAlertSuccess("Đúng rồi bạn ơi"))
  }

  const handleClick1 = () => {
    dispatch(showAlertError("Sai rồi bạn ơi"))
  }

  return (
    <Layout activeNav={'home'}>
      <div>
        hello
      </div>
    </Layout>
  )
}


export default Home

