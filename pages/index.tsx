import React from 'react'
import Layout from '../component/Layout'
import { useDispatch } from 'react-redux'
import { showAlertError, showAlertSuccess } from '../redux/actions/alertAction'
const Home = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(showAlertSuccess("Đúng rồi bạn ơi"))
  }

  const handleClick1 = () => {
    dispatch(showAlertError("Sai rồi bạn ơi"))
  }

  return (
    <Layout>
      <div>
        hello

      </div>
    </Layout>
  )
}


export default Home

