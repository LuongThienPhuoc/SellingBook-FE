import React, { useState, useEffect, useRef } from 'react';
import { Divider, Grid, TextField } from '@mui/material';
import { BiExit } from 'react-icons/bi'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import axios from 'axios';

function ModalEditUser(props) {
    const [provinces, setProvinces] = useState([])
    let provinceSelect: String
    const [districts, setDistricts] = useState([])
    let districtsSelect: String
    const [communes, setCommunes] = useState([])
    let communesSelect: String
    const districtRef = useRef()
    const communeRef = useRef()
    const [value, setValue] = useState<Date | null>(null);
    useEffect(() => {
        const fetAPIProvince = async () => {
            axios.get(`https://api.mysupership.vn/v1/partner/areas/province`).then(res => {
                setProvinces(res.data.results)
            })
        }
        fetAPIProvince()
    }, [])

    const handleHide = () => {
        props.handleChangeHideModal()
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleSave = () => {
        handleHide()
    }

    const handleChangeProvince = async (e) => {
        if (e.target.value == '0') {
            setDistricts([])
            setCommunes([])
        } else {
            await axios.get(`https://api.mysupership.vn/v1/partner/areas/district?province=${e.target.value}`).then(res => {
                console.log(districtRef.current)
                setDistricts(res.data.results)
            })
        }
        provinceSelect = e.target.value
    }

    const handleChangeDistrict = async (e) => {
        if (e.target.value == '0') {
            setCommunes([])
        } else {
            await axios.get(`https://api.mysupership.vn/v1/partner/areas/commune?district=${e.target.value}`).then(res => {
                setCommunes(res.data.results)
            })
        }
        districtsSelect = e.target.value
    }


    return (
        <div onClick={handleHide} className='profile-modal bg-[#00000040] fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center'>
            <div
                onClick={stopPropagation}
                className='bg-white height-auto w-8/12 rounded-md shadow-md p-10 min-w-[500px] relative'
            >
                <div onClick={handleHide} className='absolute right-0 top-0 m-3 hover:text-[#2BBCBA] cursor-pointer ease-in-out duration-100 transition hover:scale-110 '>
                    <BiExit className='text-2xl'></BiExit>
                </div>
                <div className='text-2xl font-bold mb-3'>Thông tin người dùng</div>
                <div className='text-base text-slate-400 mb-3'>Thông tin này sẽ được hiển thị công khai vì vậy hãy cẩn thận với những gì bạn chia sẻ</div>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <Grid className='my-3 mx-0 pr-4' container spacing={2}>
                    <Grid className='font-medium text-base' xs={6}>
                        Họ tên
                    </Grid>
                    <Grid xs={6}>
                        <TextField value={'Lương Thiện Phước'} fullWidth id="outlined-basic" label='Họ tên' variant="outlined" size='small' />
                    </Grid>
                </Grid>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <Grid className='my-3 mx-0 pr-4' container spacing={2}>
                    <Grid className='font-medium text-base' xs={6}>
                        Ngày sinh
                    </Grid>
                    <Grid xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                label="Basic example"
                                value={value}
                                onChange={(newValue) => {
                                    console.log(newValue)
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField size='small' fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <Grid className='my-3 mx-0 pr-4' container spacing={2}>
                    <Grid className='font-medium text-base' xs={6}>
                        Giới tính
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            fullWidth
                            label="Giới tính"
                            name="gender"
                            required
                            size='small'
                            variant="outlined"
                            select
                            defaultValue={"0"}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Khác--
                            </option>
                            <option value="male">
                                Nam
                            </option>
                            <option value="female">
                                Nữ
                            </option>
                        </TextField>
                    </Grid>
                </Grid>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <Grid className='my-3 mx-0 pr-4' container spacing={2}>
                    <Grid className='font-medium text-base' xs={6}>
                        Tỉnh
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            fullWidth
                            label="Tỉnh/TP"
                            name="province"
                            required
                            variant="outlined"
                            select
                            size='small'
                            onChange={handleChangeProvince}
                            defaultValue={"0"}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Chọn Tỉnh/TP--
                            </option>
                            {provinces.map((province, index) => (
                                <option key={index} value={province.code}>
                                    {province.name}
                                </option>
                            ))}

                        </TextField>

                    </Grid>
                </Grid>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <Grid className='my-3 mx-0 pr-4' container spacing={2}>
                    <Grid className='font-medium text-base' xs={6}>
                        Huyện
                    </Grid>
                    <Grid xs={6}>
                        <TextField
                            fullWidth
                            label="Quận/Huyện"
                            name="district"
                            required
                            size='small'
                            variant="outlined"
                            select
                            ref={districtRef}
                            onChange={handleChangeDistrict}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Chọn Quận/Huyện--
                            </option>
                            {districts.map((district, index) => (
                                <option key={index} value={district.code}>
                                    {district.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <Grid className='my-3 mx-0 pr-4' container spacing={2}>
                    <Grid className='font-medium text-base' xs={6}>
                        Xã
                    </Grid>
                    <Grid xs={6}>
                    <TextField
                            fullWidth
                            label="Xã/Phường"
                            name="commune"
                            required
                            size='small'
                            variant="outlined"
                            select
                            ref={communeRef}
                            SelectProps={{ native: true }}
                        >
                            <option value="0">
                                --Chọn Xã/Phường--
                            </option>
                            {communes.map((commune, index) => (
                                <option key={index} value={commune.code}>
                                    {commune.name}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Divider className='h-[1px] w-full text-slate-300 mb-3'></Divider>
                <div className='flex justify-end'>
                    <div onClick={handleHide} className='py-1 px-3 font-medium rounded border-solid border-1 border-black cursor-pointer hover:opacity-80'>Hủy</div>
                    <div onClick={handleSave} className='py-1 px-3 font-medium rounded border-solid border-1 border-[#2BBCBA] bg-[#2BBCBA] text-white ml-3 cursor-pointer hover:opacity-80'>Lưu</div>
                </div>
            </div>
        </div>
    );
}

export default ModalEditUser;