import React from 'react';
import { Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import dynamic from 'next/dynamic';


const CardPurchasedList  = dynamic(() => import('./CardPurchasedList'))

const PurchasedList = (props) => {
    return (
        <div>
            <div className='text-xl text-[#2BBCBA]'>Danh sách đã mua</div>
            <div className='mt-4'>
                <Grid container spacing={5}>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                    <CardPurchasedList></CardPurchasedList>
                </Grid>
            </div>
            <div className='mt-10 flex justify-center profile-pagination'>
                <Pagination count={10} color="primary" variant="outlined" />
            </div>
        </div>
    )
}

export default PurchasedList