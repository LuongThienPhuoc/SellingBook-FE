import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Container, Grid, Badge } from '@mui/material'
import style from '../../styles/Cart.module.css'




function CartItem(props) {
    return (
      <Container className='mb-16'>
        <Grid className={style.cartItem + ' rounded-2xl'} container spacing={2}>
          <Grid className='pt-1 pb-1' sm={3}>
            <Badge badgeContent={2} color={'warning'}>
              <img height='150px' className=' rounded-2xl' src="https://mcdn2-coolmate.cdn.vccloud.vn/uploads/February2022/combo_3_mau_brief_bamboo_58_160x181.jpg" alt="" />
            </Badge>
          </Grid>
          <Grid className='pl-4' sm={7}>
            <div className='font-medium mb-2'>
              Kỹ năng thích ứng với biến đổi khí hậu trong sản xuất nông nghiệp của người dân Bến Tre
            </div>
            <div className='mb-2'>
              Thể loại: <span className='font-medium'>Pháp luật</span>
            </div>
            <div className='flex items-center'>
              <span className='text-2xl cursor-pointer'>
                <AiFillMinusCircle></AiFillMinusCircle>
              </span>
              <span className='mx-2' style={{ border: '1px solid black', borderRadius: '8px', padding: '4px 10px' }}>2</span>
              <span className='text-2xl cursor-pointer'>
                <AiFillPlusCircle></AiFillPlusCircle>
              </span>
            </div>
          </Grid>
          <Grid sm={2}>
            <div className='flex flex-column justify-between items-end h-full p-2'>
              <div className={'cursor-pointer' + ' ' + style.deleteCart}>
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
          </Grid>
        </Grid>
      </Container>
    );
  }

export default CartItem;