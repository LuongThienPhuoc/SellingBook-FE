import React from 'react'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import { Container, Grid } from '@mui/material'
import Head from 'next/head';

const Layout = dynamic(() =>
  import('../../component/Layout'),
  {
    loading: () => <LinearProgress></LinearProgress>
  }
);
const InfoUserToPay = dynamic(() => import('../../component/Cart/InfoUserToPay'))
const CartItem = dynamic(() => import('../../component/Cart/CartItem'))

const Cart = () => {
  return (
    <Layout>
      <Head>
        <title>Cart</title>
      </Head>
      <Container>
        <Grid container spacing={2}>
          <Grid sm={6}>
            <InfoUserToPay></InfoUserToPay>
          </Grid>
          <Grid sm={6}>
            <div className={'p-4 relative'}>
              <div className='pt-10'>
                <div className='text-3xl font-bold mb-10'>Giỏ hàng</div>
                {/* Giỏ hàng */}
                <div>
                  <div>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                  </div>
                  <div style={{ display: 'flex', height: '50px', border: '1px solid black', borderRadius: '20px', backgroundColor: '#D9d9d9', overflow: 'hidden' }}>
                    <input placeholder='Mã giảm giá' style={{ fontWeight: '500', paddingBottom: '5px', paddingLeft: '20px', width: '70%', height: '50px', borderRight: '1px solid black', outline: 'none', borderRadius: '20px' }} type='text'></input>
                    <div style={{ cursor: 'not-allowed', width: '30%', fontWeight: '600', height: '50px', textAlign: 'center', lineHeight: '45px' }}>Áp dụng</div>
                  </div>
                  <div style={{ borderTop: '1px solid #00000021', borderBottom: '1px solid #00000021', marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '14px', fontWeight: '500' }}>
                      <div>Tạm tính</div>
                      <div>149000đ</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '14px', fontWeight: '500' }}>
                      <div>Giảm giá</div>
                      <div>149000đ</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '14px', fontWeight: '500' }}>
                      <div>Phí giao hàng</div>
                      <div>+25000đ</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0', fontSize: '18px', fontWeight: '600' }}>
                    <div>TỔNG</div>
                    <div>149000đ</div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Cart



