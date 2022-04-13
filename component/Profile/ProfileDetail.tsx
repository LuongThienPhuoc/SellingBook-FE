import React, { useState } from 'react';
import { Grid, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { AiOutlineMail, AiFillEdit } from 'react-icons/ai'
import { BsTelephone, BsGenderAmbiguous } from 'react-icons/bs'
import { CgUserList } from 'react-icons/cg'
import { FaBirthdayCake } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import axios from 'axios';
import { showAlertSuccess, showAlertError } from '../../redux/actions/alertAction';
import { useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';


const ModalEditUser = dynamic(() => import('../../component/Profile/ModalEditUser'))


const ProfileDetail = (props) => {
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState('');
    const [isShow, setIsShow] = useState(false)

    const handleChangeHideModal = () => {
        setIsShow(false);
    }
    const handleChangeShowModal = () => {
        setIsShow(true);
    }


    const handleChangeImg = (fileChangeEvent) => {
        const file = fileChangeEvent.target.files[0];
        const { type } = file;
        if (!(type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg') || type.endsWith('gif'))) {
        } else {
            const formData = new FormData();
            formData.append("file", fileChangeEvent.target.files[0])
            formData.append("upload_preset", "qqqhcaa3");
            axios.post(`https://api.cloudinary.com/v1_1/databaseimg/image/upload`, formData)
                .then(res => {
                    console.log(res.data.url);
                    setAvatar(res.data.url)
                    dispatch(showAlertSuccess('Update đại diện thành công'))
                })
                .catch(err => {
                    dispatch(showAlertSuccess('Lỗi hệ thống'))
                })
        }
    }

    return (
        <div className='rounded-lg ' style={{ boxShadow: 'rgb(0 0 0 / 60%) 0px 3px 8px', padding: '36px' }}>
            {isShow ? <ModalEditUser handleChangeHideModal={handleChangeHideModal}></ModalEditUser> : (
                null
            )}
            <Grid container>
                <Grid item md={5} sm={12} xs={12}>
                    <div className='items-end ' style={{ display: 'flex' }}>
                        <Grid container>
                            <Grid className='flex items-center justify-center' item md={5} sm={12} xs={12}>
                                <label htmlFor='profile-header-update-avatar'>
                                    <Avatar className='cursor-pointer' src={avatar} style={{ height: '140px', width: '140px' }} sx={{ bgcolor: deepOrange[500] }}>NONE</Avatar>
                                </label>
                                <input id="profile-header-update-avatar" type="file" style={{ display: 'none' }} accept="image/png, image/jpeg" onChange={(e) => handleChangeImg(e)}></input>
                            </Grid>
                            <Grid className='flex items-end ml-6' item md={5} sm={12} xs={12}>
                                <div >
                                    <div className='font-sans text-xl font-bold'>Nguyễn Công Phi</div>
                                    <div className='font-sans text-base'>Thành viên bạc</div>
                                    <div className='items-center mt-1 flex' >
                                        <AiOutlineMail className='mr-3.5 text-xl'></AiOutlineMail>
                                        <span className='overflow-hidden'>19522006@gm.uit.edu.vn</span>
                                    </div>
                                    <div className='items-center mt-1 flex' >
                                        <BsTelephone className='mr-3.5 text-xl'></BsTelephone>
                                        <span>012345678d</span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={3} sm={12} xs={12}>
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
                <Grid item md={4} sm={12} xs={12}>
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
                            <AiFillEdit onClick={handleChangeShowModal} className='text-2xl cursor-pointer hover:opacity-80'></AiFillEdit>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileDetail