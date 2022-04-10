import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Container, Grid, Avatar, Divider, ButtonGroup, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { AiOutlineMail, AiFillEdit } from 'react-icons/ai'
import { BsTelephone, BsGenderAmbiguous, BsReverseLayoutTextWindowReverse, BsBook, BsBookmarkStar } from 'react-icons/bs'
import { CgUserList } from 'react-icons/cg'
import { FaBirthdayCake } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import style from '../styles/Profile.module.css'
//card
import { ImSigma } from 'react-icons/im'
import Card from '@mui/material/Card';
import Pagination from '@mui/material/Pagination';
import CardMedia from '@mui/material/CardMedia';

//search
import SearchIcon from '@mui/icons-material/Search';

const Layout = dynamic(() => import('../component/Layout'),
    {
        loading: () => <LinearProgress></LinearProgress>
    }
)

//Purchased List/
const PurchasedList = (props) => {
    return (
        <div>
            <div className='text-xl text-[#2BBCBA]'>Danh sách đã mua</div>
            <div className='mt-4'>
                <Grid container spacing={5}>
                    <Grid item md={4}>
                        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6'>
                            <img className='w-full h-56'  src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                                <div className='w-full'>
                                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6'>
                            <img className='w-full h-56'  src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                                <div className='w-full'>
                                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6'>
                            <img className='w-full h-56'  src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                                <div className='w-full'>
                                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6'>
                            <img className='w-full h-56'  src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                                <div className='w-full'>
                                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6'>
                            <img className='w-full h-56'  src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                                <div className='w-full'>
                                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card className='rounded-lg border-[#2BBCBA] border-1 border-solid mb-6'>
                            <img className='w-full h-56'  src='https://upload.wikimedia.org/wikipedia/vi/6/61/Ng%E1%BB%93i_kh%C3%B3c_tr%C3%AAn_c%C3%A2y_cover.jpg'></img>
                                <div className='w-full'>
                                <div className='flex flex-column items-center h-auto pt-2 px-3 pb-6'>
                                    <div className='text-[#555555] text-base'>Nhà xuất bản trẻ</div>
                                    <div className='text-xl text-[#2BBCBA] text-center'>Cánh chim xanh biết bay về</div>
                                    <div className='font-medium mt-2'>143.000 VNĐ</div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>

            </div>
            <div className='mt-10 flex justify-center profile-pagination'>
                <Pagination count={10} color="primary" variant="outlined" />
            </div>
        </div>
    )
}

//Order List 
const OrderList = (props) => {
    return (
        <div>
            <div className='text-xl text-[#2BBCBA]'>Danh sách đơn hàng</div>
            <div className='flex justify-center mt-6'>
                <ButtonGroup variant="outlined" size='medium' aria-label=" button group small">
                    <Button className={'normal-case border-slate-600 ' + style.orderListActive}>Tất cả</Button>
                    <Button className='normal-case border-slate-600 text-black'>Chờ xác nhận</Button>
                    <Button className='normal-case border-slate-600 text-black'>Đang giao</Button>
                    <Button className='normal-case border-slate-600 text-black'>Chờ lấy hàng</Button>
                    <Button className='normal-case border-slate-600 text-black'>Đã hủy</Button>
                </ButtonGroup>
            </div>
            <div className='flex justify-center mb-2.5'>
                <div className='rounded-2xl flex  px-4 py-2 mt-10' style={{ border: '1px solid black', width: '90%' }}>
                    <SearchIcon className='pr-1 text-3xl cursor-pointer text-[#979797] mr-4' />
                    <input className='w-full' type='text' placeholder='Tìm kiếm theo ID sách, tên sách, ID đơn hàng'></input>
                </div>
            </div>
            <div>
                <Card className='px-9 py-6' sx={{ display: 'flex' }}>
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
                                    <BsReverseLayoutTextWindowReverse className='text-[#2BBCBA] text-base'></BsReverseLayoutTextWindowReverse>
                                    <div className='ml-5 text-base text-[#2BBCBA]'>Chờ xác nhận</div>
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
                                <div className='h-auto py-1 px-2 text-xs rounded text-white bg-[#FF9E37]'>HỦY ĐƠN</div>
                                <div className='py-1 px-2 text-xs rounded text-white bg-[#2BBCBA]'>MUA LẠI</div>
                                <div className='py-1 px-2 text-xs rounded text-black bg-white border-solid border-1 border-black'>ĐÁNH GIÁ</div>
                            </div>
                            <div className='flex items-center'>
                                <ImSigma className='text-xl'></ImSigma>
                                <div className='ml-5 text-2xl font-medium'>220.000đ</div>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>
            <div className='mt-10 flex justify-center profile-pagination'>
                <Pagination count={10} color="primary" variant="outlined" />
            </div>
        </div>
    )
}


function Profile(props) {

    const render = () => {
        //return (<OrderList></OrderList>)
        return (<PurchasedList></PurchasedList>)
    }

    return (
        <Layout>
            <Head>
                <title>Profile</title>
            </Head>
            <Container maxWidth='lg'>
                <Grid className='mb-16' container spacing={3}>
                    <Grid className=' mt-16' item md={12}>
                        <div className='rounded-lg ' style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '36px' }}>
                            <Grid container>
                                <Grid item md={5}>
                                    <div className='items-end' style={{ display: 'flex' }}>
                                        <Avatar style={{ height: '140px', width: '140px' }} sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                                        <div className='ml-6'>
                                            <div className='font-sans text-2xl font-bold'>Nguyễn Công Phi</div>
                                            <div className='font-sans text-base'>Thành viên bạc</div>
                                            <div className='mt-3.5 items-center' style={{ display: 'flex' }}>
                                                <AiOutlineMail className='mr-3.5 text-xl'></AiOutlineMail>
                                                <span>1952000@gm.uit.edu.vn</span>
                                            </div>
                                            <div className='items-center mt-1' style={{ display: 'flex' }}>
                                                <BsTelephone className='mr-3.5 text-xl'></BsTelephone>
                                                <span>1952000@gm.uit.edu.vn</span>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className='items-end h-full' style={{ display: 'flex' }}>
                                        <div className='ml-6'>
                                            <div className='mt-3.5 items-center' style={{ display: 'flex' }}>
                                                <CgUserList className='mr-3.5 text-xl'></CgUserList>
                                                <span>nguyencongphi</span>
                                            </div>
                                            <div className='items-center mt-1 ' style={{ display: 'flex' }}>
                                                <FaBirthdayCake className='mr-3.5 text-xl'></FaBirthdayCake>
                                                <span>03/12/2001</span>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item md={4}>
                                    <div className='h-full flex justify-between'>
                                        <div className='items-end' style={{ display: 'flex' }}>
                                            <div className='ml-6'>
                                                <div className='mt-3.5 items-center' style={{ display: 'flex' }}>
                                                    <HiOutlineLocationMarker className='mr-3.5 text-xl'></HiOutlineLocationMarker>
                                                    <span>21, Trần Hưng Đạo, Dran, Đơn Dương, Lâm Đồng</span>
                                                </div>
                                                <div className='items-center mt-1' style={{ display: 'flex' }}>
                                                    <BsGenderAmbiguous className='mr-3.5 text-xl'></BsGenderAmbiguous>
                                                    <span>Nam</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <AiFillEdit className='text-2xl cursor-pointer hover:opacity-80'></AiFillEdit>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid className=' mt-16' item md={4}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            <div className='text-xl font-bold mb-2'>Thông tin</div>
                            <Divider></Divider>
                            <div className={'font-sans items-center mt-4 ' + style.active} style={{ display: 'flex' }}>
                                <BsReverseLayoutTextWindowReverse className='mr-2 text-xl'></BsReverseLayoutTextWindowReverse>
                                <span>Danh sách đơn hàng</span>
                            </div>
                            <div className='font-sans  items-center mt-3' style={{ display: 'flex' }}>
                                <BsBook className='mr-2 text-xl'></BsBook>
                                <span>Danh sách đã mua</span>
                            </div>
                            <div className='font-sans items-center mt-3' style={{ display: 'flex' }}>
                                <BsBookmarkStar className='mr-2 text-xl'></BsBookmarkStar>
                                <span>Danh sách review</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid className='mt-16' item md={8}>
                        <div style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '25px' }} className='rounded-lg '>
                            {render()}
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </Layout>
    );
}

export default Profile;