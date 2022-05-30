import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import style from '../../styles/Profile.module.css'
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import axios from 'axios';
import * as URL from '../../services/api/config'
const CardOrderList = dynamic(() => import('./CardOrderList'))

const OrderList = (props) => {
    const userInfo = useSelector((state: RootStateOrAny) => state.userReducer.infoUser)
    const status = useSelector((state: RootStateOrAny) => state.userReducer)
    const [active, setActive] = useState('');
    useEffect(() => {
        setActive('All')
    }, [])

    useEffect(() => {
        const fetApi = async () => {
            await axios.get(URL.URL_GET_ORDER_LIST+`?id=${userInfo._id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
        if (status.isLogin) {
            fetApi()
            console.log('call api')
        }
    }, [status.isLogin])

    const handleClickActive = (e) => {
        setActive(e.target.name)
    }

    return (
        <div>
            <div className='text-xl text-[#2BBCBA]'>Danh sách đơn hàng</div>
            <div className='flex justify-center mt-6'>
                <ButtonGroup variant="outlined" size='medium' aria-label=" button group small">
                    <Button onClick={handleClickActive} name='All' className={active === 'All' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600'}>Tất cả</Button>
                    <Button onClick={handleClickActive} name='WaitForConfirm' className={active === 'WaitForConfirm' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Chờ xác nhận</Button>
                    <Button onClick={handleClickActive} name='Delivering'  className={active === 'Delivering' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Đang giao</Button>
                    <Button onClick={handleClickActive} name='WaitForGoods'  className={active === 'WaitForGoods' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Chờ lấy hàng</Button>
                    <Button onClick={handleClickActive} name='Delivered'  className={active === 'Delivered' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Đã giao</Button>
                    <Button onClick={handleClickActive} name='Cancelled'  className={active === 'Cancelled' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Đã hủy</Button>
                </ButtonGroup>
            </div>
            <div className='flex justify-center mb-2.5'>
                <div className='rounded-2xl flex  px-4 py-2 mt-10' style={{ border: '1px solid black', width: '90%' }}>
                    <SearchIcon className='pr-1 text-3xl cursor-pointer text-[#979797] mr-4' />
                    <input className='w-full outline-none' type='text' placeholder='Tìm kiếm theo ID sách, tên sách, ID đơn hàng'></input>
                </div>
            </div>
            <div>
                <CardOrderList status='WaitForConfirm'></CardOrderList>
                <CardOrderList status='Delivering'></CardOrderList>
                <CardOrderList status='WaitForGoods'></CardOrderList>
                <CardOrderList status='Delivered'></CardOrderList>
                <CardOrderList status='Cancelled'></CardOrderList>
            </div>
            <div className='mt-10 flex justify-center profile-pagination'>
                <Pagination count={10} color="primary" variant="outlined" />
            </div>
        </div>
    )
}

export default OrderList
