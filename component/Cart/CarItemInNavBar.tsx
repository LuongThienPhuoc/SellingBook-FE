import * as React from 'react';
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material';
import { MdDelete } from 'react-icons/md'
import style from '../../styles/Cart.module.css'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/actions/cartAction';

const CartItemInNavBar = (props) => {
    console.log(props.detailCart)
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteItem(props.detailCart.product._id))
    }
    return (
        <Grid className='mb-3' container spacing={0}>
            <Grid sm={3}>
                <img height='120px' className=' rounded-2xl' src={props.detailCart.product.imgList[0]} alt={props.detailCart.product.title} />
            </Grid>
            <Grid sm={9}>
                <div className='flex pl-2  justify-between'>
                    <div className='font-medium w-3/4 text-sm'>
                        <p className={'pb-0 mb-1 ' + style.limitText}>{props.detailCart.product.title}</p>
                        <div className='font-normal'>
                            Thể loại: <span className='font-medium'>Pháp luật</span>
                        </div>
                        <div className='font-normal'>
                            Số lượng: <span className='font-medium'>{props.detailCart.amount}</span>
                        </div>
                    </div>
                    <div className='w-1/4 flex flex-column justify-between items-end'>
                        <div onClick={handleDelete} className={'cursor-pointer hover:scale-110'}>
                            <MdDelete></MdDelete>
                        </div>
                        <div>
                            <div className='font-medium'>
                                {props.detailCart.product.price.toLocaleString()}đ
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