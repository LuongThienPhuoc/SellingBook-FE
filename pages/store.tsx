
import React, { useEffect } from 'react'
import Layout from '../component/Layout'

const Store: React.FC = () => {

  useEffect(() => {
    console.log('effec')
    return () => {
      console.log('Return')
    }
  },[])

  return (
    <Layout active="store">
      <h2 onLoadStart={() => {console.log('Loading')}}>Cửa hàng ở đây</h2>
    </Layout>
  )
}


export default Store

