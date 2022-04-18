import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import { Container, Grid } from '@mui/material';

const Navigation = dynamic(() => import('../../component/Admin/Navigation'))
const NavigationMobile = dynamic(() => import('../../component/Admin/NavigationMobile'))
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
            <Container className='relative' maxWidth='lg'>
                <NavigationMobile option='dashboard'></NavigationMobile>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16 min:hidden 900px:block' item sm={0} md={3}>
                        <Navigation option='dashboard'></Navigation>
                    </Grid>
                    <Grid className='mt-16' item sm={12} md={9}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            Dashboard
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export default dashboard;