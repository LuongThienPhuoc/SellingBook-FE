import dynamic from 'next/dynamic';
import LinearProgress from '@mui/material/LinearProgress';
import Head from 'next/head';
import React from 'react';
import { Container, Grid, Divider } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { useSelector, RootStateOrAny } from 'react-redux';
const NavigationBar = dynamic(() => import('../component/Search/NavigationBar'))
const CardPurchasedList = dynamic(() => import('../component/Search/CardPurchasedList'))
const Layout = dynamic(() => import('../component/Layout'),
    {
        loading: () => <LinearProgress></LinearProgress>
    }
)

function search(props) {
    const search = useSelector((state:RootStateOrAny) => state.searchReducer.search)



    return (
        <Layout>
            <Head>
                <title>Tìm kiếm - {search}</title>
            </Head>
            <Container className='relative' maxWidth='xl'>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className='mt-16' item md={4} sm={12}>
                        <div
                            style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }}
                            className='rounded-lg '
                        >
                            <NavigationBar></NavigationBar>
                        </div>
                    </Grid>
                    <Grid className='mt-16'  item md={8} sm={12}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            <div className='text-xl font-bold mb-2'>Kết quả tìm kiếm cho "<span className='text-[#2BBCBA]'>{search}</span>"</div>
                            <div className='mb-4'>Tổng cộng <span className='text-[#2BBCBA]'>340</span> sách được tìm thấy</div>
                            <Grid container spacing={3}>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
                                <CardPurchasedList></CardPurchasedList>
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

export default search;