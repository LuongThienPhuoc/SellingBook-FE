import React from 'react';
import { Divider, ButtonGroup, Button } from '@mui/material';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import style from '../../styles/Profile.module.css'
import { ImSigma } from 'react-icons/im'
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import { SiClockify } from 'react-icons/si'
import { FaShippingFast, FaUserClock } from 'react-icons/fa'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
function CardOrderList(props) {

    const renderStatus = () => {
        switch (props.status) {
            case 'WaitForConfirm':
                return (
                    <>
                        <SiClockify className='text-[#2BBCBA] text-base'></SiClockify>
                        <div className='ml-5 text-base text-[#2BBCBA]'>Chờ xác nhận</div>
                    </>
                )
            case 'Delivering':
                return (
                    <>
                        <FaShippingFast className='text-[#2BBCBA] text-base'></FaShippingFast>
                        <div className='ml-5 text-base text-[#2BBCBA]'>Đang giao</div>
                    </>
                )
            case 'WaitForGoods':
                return (
                    <>
                        <FaUserClock className='text-[#2BBCBA] text-base'></FaUserClock>
                        <div className='ml-5 text-base text-[#2BBCBA]'>Chờ lấy hàng</div>
                    </>
                )
            case 'Delivered':
                return (
                    <>
                        <AiFillCheckCircle className='text-[#2BBCBA] text-base'></AiFillCheckCircle>
                        <div className='ml-5 text-base text-[#2BBCBA]'>Đã giao</div>
                    </>
                )
            case 'Cancelled':
                return (
                    <>
                        <MdCancel className='text-[#FF9E37] text-xl'></MdCancel>
                        <div className='ml-5 text-base text-[#FF9E37]'>Đã hủy</div>
                    </>
                )
            default:
                return (
                    <>
                        Lỗi
                    </>
                )
        }
    }


    const renderButton = () => {
        switch (props.status) {
            case 'WaitForConfirm':
                return (
                    <>
                        <div className='h-auto py-1 px-2 text-xs rounded text-white bg-[#FF9E37] cursor-pointer'>HỦY ĐƠN</div>
                    </>
                )
            case 'Delivering':
                return (
                    <>
                    </>
                )
            case 'WaitForGoods':
                return (
                    <>
                    </>
                )
            case 'Delivered':
                return (
                    <>
                        <div className='mr-2 py-1 px-2 text-xs rounded text-black bg-white border-solid border-1 border-black'>ĐÁNH GIÁ</div>
                        <div className='py-1 px-2 text-xs rounded text-white bg-[#2BBCBA]'>MUA LẠI</div>
                    </>
                )
            case 'Cancelled':
                return (
                    <>
                        <div className='py-1 px-2 text-xs rounded text-white bg-[#2BBCBA]'>MUA LẠI</div>
                    </>
                )
            default:
                return (
                    <>
                        Lỗi
                    </>
                )
        }
    }

    return (
        <Card className='px-9 py-6 mb-4' sx={{ display: 'flex' }}>
            <img className='rounded-lg border-[#2BBCBA] border-1 border-solid mr-3' height={127} width={88} src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
            <div className='w-full'>
                <div className='flex justify-between h-auto'>
                    <div className='flex flex-col'>
                        <div className='font-medium text-lg'>Ngồi khóc trên cây</div>
                        <div className='text-base text-[#555555]'>Nhà xuất bản trẻ</div>
                        <div className='text-base font-medium'>x 1</div>
                    </div>
                    <div className='flex  flex-col'>
                        <div className='flex justify-end items-center'>
                            {renderStatus()}
                        </div>
                        <div className='flex items-end mt-3'>
                            <div className='text-base text-[#2BBCBA]'>300.000đ</div>
                            <div className='ml-5 text-2xl font-medium'>200.000đ</div>
                        </div>
                    </div>
                </div>
                <Divider className='h-px border-solid border-1 border-[#C5C5C5] my-1' ></Divider>
                <div className='flex justify-between mt-2'>
                    <div className='flex items-center'>
                        {renderButton()}

                    </div>
                    <div className='flex items-center'>
                        <ImSigma className='text-xl'></ImSigma>
                        <div className='ml-5 text-2xl font-medium'>220.000đ</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default CardOrderList;