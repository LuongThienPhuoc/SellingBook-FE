import React from 'react';
import { useDispatch } from 'react-redux'
import { Container, Grid, TextField, Radio } from '@mui/material'


import style from '../../styles/Cart.module.css'
import { showAlertError, showAlertSuccess } from '../../redux/actions/alertAction'

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
        <div className='p-4'>
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

export default InfoUserToPay;