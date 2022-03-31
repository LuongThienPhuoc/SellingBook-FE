import React from 'react'
import { useDispatch } from 'react-redux'
import { showAlertError, showAlertSuccess } from '../redux/actions/alertAction'
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Container, Grid, TextField, Radio, Badge, Button } from '@mui/material'
import style from '../styles/Cart.module.css'

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
                  <div style={{display:'flex',height:'50px',border: '1px solid black', borderRadius: '20px', backgroundColor: '#D9d9d9', overflow:'hidden'}}>
                    <input placeholder='Mã giảm giá' style={{fontWeight:'500', paddingBottom:'5px',paddingLeft:'20px',width:'70%', height:'50px',borderRight: '1px solid black', outline:'none', borderRadius:'20px'}} type='text'></input>
                    <div style={{cursor:'not-allowed',width:'30%',fontWeight:'600',height:'50px', textAlign:'center', lineHeight:'45px'}}>Áp dụng</div>
                  </div>
                  <div style={{borderTop:'1px solid #00000021',borderBottom:'1px solid #00000021', marginTop:'20px'}}>
                    <div style={{display:'flex', justifyContent:'space-between', margin:'15px 0' , fontSize:'14px', fontWeight:'500'}}>
                      <div>Tạm tính</div>
                      <div>149000đ</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', margin:'15px 0' , fontSize:'14px', fontWeight:'500'}}>
                      <div>Giảm giá</div>
                      <div>149000đ</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', margin:'15px 0' , fontSize:'14px', fontWeight:'500'}}>
                      <div>Phí giao hàng</div>
                      <div>+25000đ</div>
                    </div>
                  </div>
                  <div style={{display:'flex', justifyContent:'space-between', margin:'15px 0' , fontSize:'18px', fontWeight:'600'}}>
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



// CartItem
function CartItem(props) {
  return (
    <Container className='mb-16'>
      <Grid className={style.cartItem + ' rounded-2xl'} container spacing={2}>
        <Grid className='pt-1 pb-1' sm={3}>
          <Badge badgeContent={2} color={'warning'}>
            <img height='150px' className=' rounded-2xl' src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/February2022/combo_3_mau_brief_bamboo_58_160x181.jpg" alt="" />
          </Badge>
        </Grid>
        <Grid className='pl-4' sm={7}>
          <div className='font-medium mb-2'>
            Kỹ năng thích ứng với biến đổi khí hậu trong sản xuất nông nghiệp của người dân Bến Tre
          </div>
          <div className='mb-2'>
            Thể loại: <span className='font-medium'>Pháp luật</span>
          </div>
          <div className='flex items-center'>
            <span className='text-2xl cursor-pointer'>
              <AiFillMinusCircle></AiFillMinusCircle>
            </span>
            <span className='mx-2' style={{ border: '1px solid black', borderRadius: '8px', padding: '4px 10px' }}>2</span>
            <span className='text-2xl cursor-pointer'>
              <AiFillPlusCircle></AiFillPlusCircle>
            </span>
          </div>
        </Grid>
        <Grid sm={2}>
          <div className='flex flex-column justify-between items-end h-full p-2'>
            <div className={'cursor-pointer' + ' ' + style.deleteCart}>
              <MdDelete></MdDelete>
            </div>
            <div>
              <div className='font-medium'>
                149000đ
              </div>
              <div className='line-through text-[#ccc] font-medium'>
                229000đ
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}





function InfoUserToPay(props) {
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
    <div  className={'p-4 relative' }>
      <div className={style.line}></div>
      <div className='flex justify-between items-center pt-10'>
        <div className='text-3xl font-bold'>Thông tin vận chuyển</div>
        <div>Bạn đã có tài khoản? <span className='cursor-pointer text-[#2f5acf] font-medium'>Đăng nhập ngay</span></div>
      </div>
      <Container className='pt-10'>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              label="Outlined"
              id="outlined-basic"
              defaultValue="normal"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Outlined"
              id="outlined-basic"
              defaultValue="Small"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Outlined"
              id="outlined-basic"
              defaultValue="Small"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Outlined"
              id="outlined-basic"
              defaultValue="Small"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              required
              size='medium'
              variant="outlined"
              select
              SelectProps={{ native: true }}
            >
              <option value="0">
                --Select gender--
              </option>
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
            </TextField>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              required
              size='medium'
              variant="outlined"
              select
              SelectProps={{ native: true }}
            >
              <option value="0">
                --Select gender--
              </option>
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
            </TextField>
          </Grid>
          <Grid item sm={4}>
            <TextField
              fullWidth
              label="Gender"
              name="gender"
              required
              size='medium'
              variant="outlined"
              select
              SelectProps={{ native: true }}
            >
              <option value="0">
                --Select gender--
              </option>
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
            </TextField>
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Outlined"
              id="outlined-basic"
              defaultValue="Small"
              variant="outlined"
              size="medium"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
      <div className='pt-14 text-3xl font-bold'>Hình thức thanh toán</div>
      <div className='p-4'>
        {/* Momoo */}
        <div className={'transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment} >
          <Radio
            id='radioMethodPay'
            name='payment-method'
            {...controlProps('momo')}
            sx={{
              color: '#bdbdbd',
              '&.Mui-checked': {
                color: '#00bfa5',
              },
            }}
          />
          <label className='flex items-center' htmlFor="radioMethodPay">
            <img className='mx-3' height={'35px'} width={'35px'} src='/img/momo-icon.png'></img>
            <div className='ml-2 font-medium '>Thanh toán bằng momo</div>
          </label>
        </div>
        {/* COD */}
        <div className={'transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 hover:border-[#243c5a]' + ' ' + style.payment + ' ' + style.paymentActive} >
          <Radio
            name='payment-method'
            id='radioMethodPay2'
            {...controlProps('cod')}
            sx={{
              color: '#bdbdbd',
              '&.Mui-checked': {
                color: '#00bfa5',
              },
            }}
          />
          <label className='flex items-center' htmlFor="radioMethodPay2">
            <img className='mx-3' height={'35px'} width={'35px'} src='/img/cod-icon.png'></img>
            <div className='ml-2'>
              <div className='font-medium'>COD</div>
              <div>Thanh toán khi nhận hàng</div>
            </div>
          </label>
        </div>
        {/* ZAlo pay */}
        <div className={'transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 hover:border-[#243c5a]' + ' ' + style.payment} >
          <Radio
            name='payment-method'
            id='radioMethodPay3'
            {...controlProps('zalopay')}
            sx={{
              color: '#bdbdbd',
              '&.Mui-checked': {
                color: '#00bfa5',
              },
            }}
          />
          <label className='flex items-center' htmlFor="radioMethodPay3">
            <img className='mx-3' height={'35px'} width={'35px'} src='/img/zalopay-icon.jpg'></img>
            <div className='ml-2 font-medium'>Ví điện tử ZaloPay</div>
          </label>
        </div>
        {/* Xu  */}
        <div className={'transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 hover:border-[#243c5a]' + ' ' + style.payment} >
          <Radio
            name='payment-method'
            id='radioMethodPay4'
            {...controlProps('diamod')}
            sx={{
              color: '#bdbdbd',
              '&.Mui-checked': {
                color: '#00bfa5',
              },
            }}
          />
          <label className='flex items-center' htmlFor="radioMethodPay4">
            <img className='mx-3' height={'35px'} width={'35px'} src='/img/kimcuong-icon.png'></img>
            <div className='ml-2 font-medium'>Thanh toán bằng kim cương</div>
          </label>
        </div>
        <div className='mb-6'>Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm
          <span className='cursor-pointer font-bold'> tại đây.</span>
        </div>
        <div className={'transition duration-300 ease-out cursor-pointer py-4 flex justify-center w-ful bg-black text-white rounded-lg' + ' ' + style.btnPay}>
          Thanh toán 1895k (Momo)
        </div>
      </div>
    </div>
  );
}

