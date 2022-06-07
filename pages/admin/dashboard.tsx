import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const Navigation = dynamic(() => import('../../component/Admin/Navigation'))
const NavigationMobile = dynamic(() => import('../../component/Admin/NavigationMobile'))
// const Layout = dynamic(() => import('../../component/Layout'),
//     {
//         loading: () => <LinearProgress></LinearProgress>
//     }
// )
import Layout from '../../component/Layout'
const GeneralStatistics = dynamic(() => import('../../component/Admin/Dashboard/GeneralStatistics'))
const Traffic = dynamic(() => import('../../component/Admin/Dashboard/Traffic'),
    {
        ssr: false
    }
)
const UserChart = dynamic(() => import('../../component/Admin/Dashboard/UserChart'),
    {
        ssr: false
    }
)

function dashboard(props) {
    const infoUser = useSelector((state: RootStateOrAny) => state.userReducer.infoUser)
    const router = useRouter()
    const status = useSelector((state: RootStateOrAny) => state.userReducer)

    if (!status.isLoading) return (<LinearProgress></LinearProgress>)

    if (!status.isLogin) router.push('/login')

    if (infoUser.role == 'user') router.push('/')

    return (
        <Layout active="admin">
            <Head>
                <title>Dashboard</title>
            </Head>
            <Container className='relative' maxWidth='lg'>
                <NavigationMobile option='dashboard'></NavigationMobile>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16 min:hidden 900px:block' item sm={0} md={3}>
                        <Navigation option='dashboard'></Navigation>
                    </Grid>
                    <Grid className='mt-16 ' item sm={12} md={9}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px' }} className='rounded-lg pb-3'>
                            <GeneralStatistics></GeneralStatistics>
                            <Traffic></Traffic>
                            <UserChart></UserChart>
                            <Traffic></Traffic>
                            <Traffic></Traffic>
                            <div className='flex justify-end mr-5 mt-3'>
                                <div className='flex bg-[#2BBCBA] shadow-sm rounded text-lg items-center py-1 px-2 text-white cursor-pointer'>
                                    <PictureAsPdfIcon className='mr-2'></PictureAsPdfIcon>
                                    <div>XUẤT PDF1</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default dashboard;