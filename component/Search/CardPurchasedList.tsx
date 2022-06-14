import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { useRouter } from 'next/router';

function CardPurchasedList(props) {
    const router = useRouter()
    return (
        <Grid item md={4} sm={4} lg={3} xl={3}>
            <Card onClick={() => { router.push(`/bookpage/${props.product.slug}`) }} className='rounded-lg border-[#2BBCBA] border-1 border-solid hover:shadow-xl cursor-pointer'>
                <img className='w-full h-48 bg-contain object-cover' src={props.product.imgList[0]}></img>
                <div className='w-full'>
                    <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                        <div className='text-[#555555] text-sm text-center font-bold mb-2'>{props.product.author}</div>
                        <div className=' text-[#2BBCBA] text-center font-medium text-lg h-[50px]'>{props.product.title}</div>
                        <div className='font-medium mt-2'>{props.product.price.toLocaleString()} VNĐ</div>
                    </div>
                </div>
            </Card>
        </Grid>
    );
}

export default CardPurchasedList;