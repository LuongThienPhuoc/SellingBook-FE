import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import style from '../../styles/Home.module.css'

function CardPurchasedList(props) {
    return (

        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6 mx-2 relative'>
            <img className='w-full h-56' src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
            <div className='w-full'>
                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </div>
            </div>
            <div className={'absolute top-0 right-1 p-2 bg-[#fed738] flex flex-col justify-center items-center ' + style.discount }>
                <div className='text-xs font-medium' style={{color: 'red'}}>
                    50%
                </div>
                <div className='text-xs ' style={{color: 'white'}}>
                    GIẢM
                </div>
            </div>
            {
                props.index == 0 ? (
                    <div>
                        <div className='bg-[#000000b5] left-0 right-0 bottom-0 top-0 absolute'></div>
                        <img className='w-3/4 absolute left-1/2 -translate-x-1/2  top-1/4' src='/img/out-of-stock.png'></img>
                    </div>
                ) : null
            }

        </Card>
    );
}

export default CardPurchasedList;