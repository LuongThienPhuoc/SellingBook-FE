import React from 'react'
import { useDispatch } from 'react-redux'
import { showAlertError, showAlertSuccess } from '../redux/actions/alertAction'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import { Container, Grid, TextField, Radio } from '@mui/material'
import style from '../styles/Cart.module.css'


// import CartItem from '';
import InfoUserToPay from '../component/Cart/InfoUserToPay'

const CartItem = dynamic(() => import('../component/Cart/CartItem'))
const Layout = dynamic(() =>
  import('../component/Layout'),
  {
    loading: () => <LinearProgress></LinearProgress>
  }
);

const Cart = () => {
  const dispatch = useDispatch()

  const [selectedValue, setSelectedValue] = React.useState('e');
  const handleClick = () => {
    dispatch(showAlertSuccess("Đúng rồi bạn ơi"))
  }

  const handleClick1 = () => {
    dispatch(showAlertError("Sai rồi bạn ơi"))
  }

  const handleChangeMethoPay = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setSelectedValue(event.target.value);
  }

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChangeMethoPay,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid sm={6}>
            <InfoUserToPay></InfoUserToPay>
          </Grid>
          <Grid sm={6}>
            <div className={'p-4 relative'}>
              <div className={style.line}>

              </div>
              <div className='pt-10'>
                <div className='text-3xl font-bold mb-6'>Giỏ hàng</div>
                {/* Giỏ hàng */}
                <div>
                  <div>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    
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

