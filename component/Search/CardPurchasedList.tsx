import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';


function CardPurchasedList(props) {
    return (
        <Grid item md={3}>
            <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid hover:shadow-xl cursor-pointer'>
                <img className='w-full h-48 bg-contain' src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                <div className='w-full'>
                    <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                        <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                        <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                        <div className='font-medium mt-2'>143.000 VNĐ</div>
                    </div>
                </div>
            </Card>
        </Grid>
    );
}

export default CardPurchasedList;