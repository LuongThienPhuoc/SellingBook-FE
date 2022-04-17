import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import { Container, Grid, Divider } from '@mui/material';
import { BsReverseLayoutTextWindowReverse, BsBook, BsBookmarkStar } from 'react-icons/bs'
import { AiOutlineDashboard } from 'react-icons/ai'
import style from '../../styles/Admin/Dashboard.module.css'
const Layout = dynamic(() => import('../../component/Layout'),
    {
        loading: () => <LinearProgress></LinearProgress>
    }
)

function dashboard(props) {
    const [option, setOption] = useState('Danh sách đơn hàng')
    const handleClickOption = (e) => {
        e.preventDefault()
        setOption(e.target.innerText)
    }

    return (
        <Layout>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Container maxWidth='xl'>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className=' mt-16' item md={3}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            <div className='text-xl font-bold mb-2'>SellingBook</div>
                            <div className='text-base text-[#2C6ECB] cursor-pointer mb-2'>sellingbook.com</div>
                            <Divider></Divider>
                            <button onClick={handleClickOption} className={option == 'Danh sách đơn hàng' ? 'hover:opacity-80 cursor-pointer font-sans items-center mt-4 relative ' + style.active : 'hover:opacity-80 cursor-pointer font-sans items-center mt-4'} style={{ display: 'flex' }}>
                                <AiOutlineDashboard className='mr-2 text-3xl'></AiOutlineDashboard>
                                <span className='text-xl'>Bảng điều khiển</span>
                            </button>
                            <button onClick={handleClickOption} className={option == 'Danh sách đã mua' ? 'hover:opacity-80 cursor-pointer font-sans  items-center mt-3 relative ' + style.active : 'hover:opacity-80 cursor-pointer font-sans  items-center mt-3'} style={{ display: 'flex' }}>
                                <BsBook className='mr-2 text-xl'></BsBook>
                                <span>Danh sách đã mua</span>
                            </button>
                            <button onClick={handleClickOption} className={option == 'Danh sách review' ? 'hover:opacity-80 cursor-pointer font-sans items-center mt-3 relative ' + style.active : 'hover:opacity-80 cursor-pointer font-sans items-center mt-3'} style={{ display: 'flex' }}>
                                <BsBookmarkStar className='mr-2 text-xl'></BsBookmarkStar>
                                <span>Danh sách review</span>
                            </button>
                        </div>
                    </Grid>
                    <Grid className='mt-16' item md={9}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            hello
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default dashboard;