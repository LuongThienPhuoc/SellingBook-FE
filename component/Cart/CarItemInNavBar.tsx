import * as React from 'react';
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material';
import { MdDelete } from 'react-icons/md'
import style from '../../styles/Cart.module.css'
const CartItemInNavBar = () => {
    return (
        <Grid className='mb-3' container spacing={0}>
            <Grid sm={3}>
                <img height='120px' className=' rounded-2xl' src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/February2022/combo_3_mau_brief_bamboo_58_160x181.jpg" alt="" />
            </Grid>
            <Grid sm={9}>
                <div className='flex pl-2'>
                    <div className='font-medium text-sm'>
                        <p className={'pb-0 mb-1 ' + style.limitText}>Kỹ năng thích ứng với biến đổi khí hậu trong sản xuất nông nghiệp của người dân Bến Tre</p>
                        <div className='font-normal'>
                            Thể loại: <span className='font-medium'>Pháp luật</span>
                        </div>
                        <div className='font-normal'>
                            Số lượng: <span className='font-medium'>2</span>
                        </div>
                    </div>
                    <div className='w-1/4 flex flex-column justify-between items-end'>
                        <div className={'cursor-pointer hover:scale-110'}>
                            <MdDelete></MdDelete>
                        </div>
                        <div>
                            <div className='font-medium'>
                                149000đ
                            </div>
                            <div className='line-through text-[#ccc] font-medium'>
                                229000đ
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid className='my-2' sm={12}>
                <Divider></Divider>
            </Grid>
        </Grid>
    )
}

export default CartItemInNavBar