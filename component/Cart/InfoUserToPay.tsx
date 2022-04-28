import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { Container, Grid, TextField, Radio } from '@mui/material'
import style from '../../styles/Cart.module.css'
import axios from 'axios'
import Link from 'next/link';

function InfoUserToPay(props) {

    const districtRef = useRef()
    const communeRef = useRef()
    const dispatch = useDispatch()
    const [selectedValue, setSelectedValue] = React.useState('momo');

    const [provinces, setProvinces] = useState([])
    let provinceSelect: String
    const [districts, setDistricts] = useState([])
    let districtsSelect: String
    const [communes, setCommunes] = useState([])
    let communesSelect: String

    useEffect(() => {
        const fetAPIProvince = async () => {
            axios.get(`https://api.mysupership.vn/v1/partner/areas/province`).then(res => {
                setProvinces(res.data.results)
            })
        }
        fetAPIProvince()
    }, [])


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

    const handleChangeProvince = async (e) => {
        if (e.target.value == '0') {
            setDistricts([])
            setCommunes([])
        } else {
            await axios.get(`https://api.mysupership.vn/v1/partner/areas/district?province=${e.target.value}`).then(res => {
                console.log(districtRef.current)
                setDistricts(res.data.results)
            })
        }
        provinceSelect = e.target.value
    }

    const handleChangeDistrict = async (e) => {
        if (e.target.value == '0') {
            setCommunes([])
        } else {
            await axios.get(`https://api.mysupership.vn/v1/partner/areas/commune?district=${e.target.value}`).then(res => {
                setCommunes(res.data.results)
            })
        }
        districtsSelect = e.target.value
    }

    return (
        <div className={'p-4 relative'}>
            <div className={style.line}></div>
            <div className='flex justify-between items-center pt-10'>
                <div className='text-3xl font-bold'>Thông tin vận chuyển</div>
                <div className='text-base w-2/6'>Bạn đã có tài khoản? <span className='cursor-pointer text-[#2f5acf] font-medium'>Đăng nhập ngay</span></div>
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
                            label="Tỉnh/TP"
                            name="province"
                            required
                            size='medium'
                            variant="outlined"
                            select
                            onChange={handleChangeProvince}
                            defaultValue={"0"}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Chọn Tỉnh/TP--
                            </option>
                            {provinces.map((province, index) => (
                                <option key={index} value={province.code}>
                                    {province.name}
                                </option>
                            ))}

                        </TextField>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField
                            fullWidth
                            label="Quận/Huyện"
                            name="district"
                            required
                            size='medium'
                            variant="outlined"
                            select
                            ref={districtRef}
                            onChange={handleChangeDistrict}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Chọn Quận/Huyện--
                            </option>
                            {districts.map((district, index) => (
                                <option key={index} value={district.code}>
                                    {district.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item sm={4}>
                        <TextField
                            fullWidth
                            label="Xã/Phường"
                            name="commune"
                            required
                            size='medium'
                            variant="outlined"
                            select
                            ref={communeRef}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Chọn Xã/Phường--
                            </option>
                            {communes.map((commune, index) => (
                                <option key={index} value={commune.code}>
                                    {commune.name}
                                </option>
                            ))}
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
                <div className={selectedValue === 'momo' ? style.paymentActive + ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment : ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment} >
                    <Radio
                        id='radioMethodPay1'
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
                <div className={selectedValue === 'cod' ? style.paymentActive + ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment : ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment}  >
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
                <div className={selectedValue === 'zalopay' ? style.paymentActive + ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment : ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment}  >
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
                <div className={selectedValue === 'diamond' ? style.paymentActive + ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment : ' transition duration-300 ease-out cursor-pointer flex rounded-md items-center h-16 mb-6 ' + ' ' + style.payment} >
                    <Radio
                        name='payment-method'
                        id='radioMethodPay4'
                        {...controlProps('diamond')}
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
                    <Link href={'/cart/policy'} passHref>
                        <span className='cursor-pointer font-bold'> tại đây.</span>
                    </Link>
                </div>
                <div className={'transition duration-300 ease-out cursor-pointer py-4 flex justify-center w-ful bg-black text-white rounded-lg' + ' ' + style.btnPay}>
                    Thanh toán 1895k (Momo)
                </div>
            </div>
        </div>
    );
}

export default InfoUserToPay;