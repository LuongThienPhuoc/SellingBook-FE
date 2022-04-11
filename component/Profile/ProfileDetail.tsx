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
import style from '../../styles/Profile.module.css'


const ProfileDetail = (props) => {
    return (
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
    )
}

export default ProfileDetail