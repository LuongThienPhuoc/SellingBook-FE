import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import style from '../../styles/Profile.module.css'
import { ButtonGroup, Button } from '@mui/material';

import { Container, Grid, Divider } from '@mui/material';
import { BsReverseLayoutTextWindowReverse, BsBook, BsBookmarkStar } from 'react-icons/bs'
import { AiOutlineDashboard } from 'react-icons/ai'
import Link from 'next/link';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
const NavigationMobile = dynamic(() => import('../../component/Admin/NavigationMobile'))
const Navigation = dynamic(() => import('../../component/Admin/Navigation'))
const CardOrderList = dynamic(() => import('../../component/Admin/Receipt/CardOrderList'))
const Layout = dynamic(() => import('../../component/Layout'),
    {
        loading: () => <LinearProgress></LinearProgress>
    }
)

function receipt(props) {
    const [active, setActive] = useState('');
    useEffect(() => {
        setActive('All')
    }, [])

    const handleClickActive = (e) => {
        setActive(e.target.name)
    }

    return (
        <Layout>
            <Head>
                <title>Quản lý hóa đơn</title>
            </Head>
            <Container className='relative' maxWidth='lg'>
                <NavigationMobile option='receipt'></NavigationMobile>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16 min:hidden 900px:block' item md={3}>
                        <Navigation option='receipt'></Navigation>
                    </Grid>
                    <Grid className='mt-16' sm={12} item md={9}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            <div className='text-xl font-medium'>Danh sách đơn hàng</div>
                            <div className='flex justify-center mt-6'>
                                <ButtonGroup variant="outlined" size='medium' aria-label=" button group small">
                                    <Button onClick={handleClickActive} name='All' className={active === 'All' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600'}>Tất cả</Button>
                                    <Button onClick={handleClickActive} name='WaitForConfirm' className={active === 'WaitForConfirm' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Chờ xác nhận</Button>
                                    <Button onClick={handleClickActive} name='Delivering' className={active === 'Delivering' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Đang giao</Button>
                                    <Button onClick={handleClickActive} name='WaitForGoods' className={active === 'WaitForGoods' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Chờ lấy hàng</Button>
                                    <Button onClick={handleClickActive} name='Delivered' className={active === 'Delivered' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Đã giao</Button>
                                    <Button onClick={handleClickActive} name='Cancelled' className={active === 'Cancelled' ? style.orderListActive + ' normal-case border-slate-600 hover:opacity-80 hover:bg-[#2BBCBA] text-white' : 'normal-case border-slate-600 '}>Đã hủy</Button>
                                </ButtonGroup>
                            </div>
                            <div className='flex justify-center mb-3'>
                                <div className='rounded-2xl flex  px-4 py-2 mt-5' style={{ border: '1px solid black', width: '90%' }}>
                                    <SearchIcon className='pr-1 text-3xl cursor-pointer text-[#979797] mr-4' />
                                    <input className='w-full outline-none' type='text' placeholder='Tìm kiếm theo ID sách, tên sách, ID đơn hàng'></input>
                                </div>
                            </div>
                            <Grid spacing={2}>
                                <CardOrderList status='WaitForConfirm'></CardOrderList>
                                <CardOrderList status='Delivering'></CardOrderList>
                                <CardOrderList status='WaitForGoods'></CardOrderList>
                                <CardOrderList status='Delivered'></CardOrderList>
                                <CardOrderList status='Cancelled'></CardOrderList>
                            </Grid>
                            <div className='mt-10 flex justify-center profile-pagination'>
                                <Pagination count={10} color="primary" variant="outlined" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default receipt;